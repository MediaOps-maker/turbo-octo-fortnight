import { createServer } from 'node:http';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseCsv, stringifyCsv } from './lib/csv.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 3000);
const CSV_FILE = path.join(__dirname, 'Products - Green-lit (Metadata CSV) (7)_002.csv');
const PUBLIC_DIR = path.join(__dirname, 'public');
const RECORDS_DIR = path.join(__dirname, 'records');
const SUBMISSIONS_DIR = path.join(__dirname, 'submissions');
const UPDATED_ITEMCODES_FILE = path.join(RECORDS_DIR, 'updated-itemcodes.json');
const ITEM_CODE_COLUMN = 'Item Code';
export const EDITABLE_FIELDS = [
  'Press Title',
  'Press Title - Sort',
  'Press Title - Short',
  'Long Description',
  'Medium Description',
  'Short Description',
  'Xtra Short Description',
  'Tiny Description',
];
const PARENT_CHILD_FIELDS = ['Series', 'Season', 'S#', 'Episode', 'Episode Number'];
const METADATA_SCHEMA = 'products-green-lit.metadata.schema';
const PARENT_CHILD_SCHEMA = 'products-green-lit.parent-child.schema';

async function ensureStorage() {
  await mkdir(RECORDS_DIR, { recursive: true });
  await mkdir(SUBMISSIONS_DIR, { recursive: true });
  try {
    await readFile(UPDATED_ITEMCODES_FILE, 'utf8');
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    await writeFile(UPDATED_ITEMCODES_FILE, JSON.stringify({ updatedItemCodes: [] }, null, 2));
  }
}

async function readCsvTable() {
  const csv = await readFile(CSV_FILE, 'utf8');
  const rows = parseCsv(csv);
  if (rows.length === 0) {
    throw new Error('The CSV file is empty.');
  }
  return { headers: rows[0], rows };
}

async function readUpdatedItemCodes() {
  await ensureStorage();
  const record = JSON.parse(await readFile(UPDATED_ITEMCODES_FILE, 'utf8'));
  return new Set(record.updatedItemCodes || []);
}

async function writeUpdatedItemCodes(updatedItemCodes) {
  await writeFile(
    UPDATED_ITEMCODES_FILE,
    JSON.stringify({ updatedItemCodes: [...updatedItemCodes].sort() }, null, 2)
  );
}

function findRowIndexByItemCode(rows, headers, itemCode) {
  const itemCodeIndex = headers.indexOf(ITEM_CODE_COLUMN);
  if (itemCodeIndex === -1) {
    throw new Error(`Missing required "${ITEM_CODE_COLUMN}" column in CSV.`);
  }
  return rows.findIndex((row, index) => index > 0 && row[itemCodeIndex] === itemCode);
}

function rowToObject(headers, row) {
  return Object.fromEntries(headers.map((header, index) => [header, row[index] ?? '']));
}

function jsonResponse(res, statusCode, payload, extraHeaders = {}) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    ...extraHeaders,
  });
  res.end(JSON.stringify(payload, null, 2));
}

function errorResponse(res, statusCode, message) {
  jsonResponse(res, statusCode, { error: message });
}

async function readRequestJson(req) {
  let body = '';
  for await (const chunk of req) {
    body += chunk;
    if (body.length > 1_000_000) {
      throw new Error('Request body is too large.');
    }
  }
  return JSON.parse(body || '{}');
}

function sanitizeItemCode(itemCode) {
  return String(itemCode || '').trim();
}

function sanitizeFilename(value) {
  return value.replace(/[^a-zA-Z0-9_-]/g, '_');
}

function pickFields(product, fields) {
  return Object.fromEntries(fields.map((field) => [field, product[field] ?? '']));
}

function getPresentEditableFields(headers) {
  return EDITABLE_FIELDS.filter((field) => headers.includes(field));
}

function buildSchemaDocuments({ itemCode, submittedAt, submittedBy, notes, originalProduct, updatedProduct }) {
  return {
    metadata: {
      $schema: METADATA_SCHEMA,
      itemCode,
      submittedAt,
      submittedBy,
      notes,
      originalMetadata: pickFields(originalProduct, EDITABLE_FIELDS),
      updatedMetadata: pickFields(updatedProduct, EDITABLE_FIELDS),
    },
    parentChild: {
      $schema: PARENT_CHILD_SCHEMA,
      itemCode,
      submittedAt,
      hierarchy: pickFields(updatedProduct, PARENT_CHILD_FIELDS),
    },
  };
}

async function getProduct(req, res, itemCode) {
  const normalizedItemCode = sanitizeItemCode(itemCode);
  const { headers, rows } = await readCsvTable();
  const rowIndex = findRowIndexByItemCode(rows, headers, normalizedItemCode);
  if (rowIndex === -1) {
    return errorResponse(res, 404, `No product found for itemcode ${normalizedItemCode}.`);
  }

  const updatedItemCodes = await readUpdatedItemCodes();
  return jsonResponse(res, 200, {
    itemCode: normalizedItemCode,
    locked: updatedItemCodes.has(normalizedItemCode),
    headers,
    product: rowToObject(headers, rows[rowIndex]),
    updateableFields: getPresentEditableFields(headers),
    metadataSchema: METADATA_SCHEMA,
    parentChildSchema: PARENT_CHILD_SCHEMA,
  });
}

function validateUpdates(updates, presentEditableFields) {
  if (typeof updates !== 'object' || Array.isArray(updates)) {
    return 'Updates must be an object keyed by CSV column name.';
  }

  const invalidFields = Object.keys(updates).filter((field) => !presentEditableFields.includes(field));
  if (invalidFields.length > 0) {
    return `Only these fields can be updated: ${presentEditableFields.join(', ')}. Invalid fields: ${invalidFields.join(', ')}.`;
  }

  return '';
}

function applyUpdatesToRow({ headers, row, updates, presentEditableFields }) {
  const originalProduct = rowToObject(headers, row);
  const updatedProduct = { ...originalProduct };

  for (const field of presentEditableFields) {
    if (!Object.prototype.hasOwnProperty.call(updates, field)) continue;
    const columnIndex = headers.indexOf(field);
    const normalizedValue = updates[field] == null ? '' : String(updates[field]);
    row[columnIndex] = normalizedValue;
    updatedProduct[field] = normalizedValue;
  }

  return { originalProduct, updatedProduct };
}

function buildSubmissionRecord({ itemCode, timestamp, submittedBy, notes, originalProduct, updatedProduct }) {
  const schemaDocuments = buildSchemaDocuments({
    itemCode,
    submittedAt: timestamp,
    submittedBy,
    notes,
    originalProduct,
    updatedProduct,
  });

  return {
    itemCode,
    submittedAt: timestamp,
    submittedBy,
    notes,
    schemas: {
      metadata: METADATA_SCHEMA,
      parentChild: PARENT_CHILD_SCHEMA,
    },
    jsonFiles: schemaDocuments,
  };
}

async function submitUpdate(req, res) {
  const payload = await readRequestJson(req);
  const itemCode = sanitizeItemCode(payload.itemCode);
  const updates = payload.updates || {};

  if (!itemCode) {
    return errorResponse(res, 400, 'An itemcode is required.');
  }

  await ensureStorage();
  const updatedItemCodes = await readUpdatedItemCodes();
  if (updatedItemCodes.has(itemCode)) {
    return errorResponse(res, 409, `Itemcode ${itemCode} has already received an update and cannot be updated again.`);
  }

  const { headers, rows } = await readCsvTable();
  const presentEditableFields = getPresentEditableFields(headers);
  const validationError = validateUpdates(updates, presentEditableFields);
  if (validationError) {
    return errorResponse(res, 400, validationError);
  }

  const rowIndex = findRowIndexByItemCode(rows, headers, itemCode);
  if (rowIndex === -1) {
    return errorResponse(res, 404, `No product found for itemcode ${itemCode}.`);
  }

  const timestamp = new Date().toISOString();
  const submittedBy = String(payload.submittedBy || '').trim();
  const notes = String(payload.notes || '').trim();
  const { originalProduct, updatedProduct } = applyUpdatesToRow({
    headers,
    row: rows[rowIndex],
    updates,
    presentEditableFields,
  });
  const submissionRecord = buildSubmissionRecord({
    itemCode,
    timestamp,
    submittedBy,
    notes,
    originalProduct,
    updatedProduct,
  });

  await writeFile(CSV_FILE, stringifyCsv(rows));
  await writeFile(
    path.join(SUBMISSIONS_DIR, `${sanitizeFilename(itemCode)}-${timestamp.replace(/[:.]/g, '-')}.json`),
    JSON.stringify(submissionRecord, null, 2)
  );
  updatedItemCodes.add(itemCode);
  await writeUpdatedItemCodes(updatedItemCodes);

  return jsonResponse(res, 200, submissionRecord, {
    'Content-Disposition': `attachment; filename="product-${sanitizeFilename(itemCode)}-update.json"`,
  });
}

async function submitBatchUpdate(req, res) {
  const payload = await readRequestJson(req);
  const items = Array.isArray(payload.items) ? payload.items : [];

  if (items.length === 0) {
    return errorResponse(res, 400, 'At least one itemcode update is required.');
  }

  const normalizedItems = items.map((item) => ({
    itemCode: sanitizeItemCode(item.itemCode),
    updates: item.updates || {},
  }));
  const missingItem = normalizedItems.find((item) => !item.itemCode);
  if (missingItem) {
    return errorResponse(res, 400, 'Every batch item requires an itemcode.');
  }

  const duplicateItemCodes = normalizedItems
    .map((item) => item.itemCode)
    .filter((itemCode, index, itemCodes) => itemCodes.indexOf(itemCode) !== index);
  if (duplicateItemCodes.length > 0) {
    return errorResponse(res, 400, `Duplicate itemcodes are not allowed in one submission: ${[...new Set(duplicateItemCodes)].join(', ')}.`);
  }

  await ensureStorage();
  const updatedItemCodes = await readUpdatedItemCodes();
  const lockedItemCodes = normalizedItems.map((item) => item.itemCode).filter((itemCode) => updatedItemCodes.has(itemCode));
  if (lockedItemCodes.length > 0) {
    return errorResponse(res, 409, `These itemcodes have already received updates and cannot be updated again: ${lockedItemCodes.join(', ')}.`);
  }

  const { headers, rows } = await readCsvTable();
  const presentEditableFields = getPresentEditableFields(headers);
  for (const item of normalizedItems) {
    const validationError = validateUpdates(item.updates, presentEditableFields);
    if (validationError) {
      return errorResponse(res, 400, `Itemcode ${item.itemCode}: ${validationError}`);
    }
  }

  const rowIndexesByItemCode = new Map();
  for (const item of normalizedItems) {
    const rowIndex = findRowIndexByItemCode(rows, headers, item.itemCode);
    if (rowIndex === -1) {
      return errorResponse(res, 404, `No product found for itemcode ${item.itemCode}.`);
    }
    rowIndexesByItemCode.set(item.itemCode, rowIndex);
  }

  const timestamp = new Date().toISOString();
  const submittedBy = String(payload.submittedBy || '').trim();
  const notes = String(payload.notes || '').trim();
  const records = normalizedItems.map((item) => {
    const { originalProduct, updatedProduct } = applyUpdatesToRow({
      headers,
      row: rows[rowIndexesByItemCode.get(item.itemCode)],
      updates: item.updates,
      presentEditableFields,
    });
    updatedItemCodes.add(item.itemCode);
    return buildSubmissionRecord({
      itemCode: item.itemCode,
      timestamp,
      submittedBy,
      notes,
      originalProduct,
      updatedProduct,
    });
  });

  const batchRecord = {
    submittedAt: timestamp,
    submittedBy,
    notes,
    itemCodes: records.map((record) => record.itemCode),
    schemas: {
      metadata: METADATA_SCHEMA,
      parentChild: PARENT_CHILD_SCHEMA,
    },
    records,
  };

  await writeFile(CSV_FILE, stringifyCsv(rows));
  await writeFile(
    path.join(SUBMISSIONS_DIR, `batch-${timestamp.replace(/[:.]/g, '-')}.json`),
    JSON.stringify(batchRecord, null, 2)
  );
  await writeUpdatedItemCodes(updatedItemCodes);

  return jsonResponse(res, 200, batchRecord, {
    'Content-Disposition': `attachment; filename="product-metadata-batch-${timestamp.replace(/[:.]/g, '-')}.json"`,
  });
}

async function serveStatic(res, requestedPath) {
  const filePath = path.normalize(path.join(PUBLIC_DIR, requestedPath === '/' ? 'index.html' : requestedPath));
  const relativePath = path.relative(PUBLIC_DIR, filePath);
  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    return errorResponse(res, 403, 'Forbidden.');
  }

  const ext = path.extname(filePath);
  const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
  };

  try {
    const file = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
    res.end(file);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return errorResponse(res, 404, 'Not found.');
    }
    throw error;
  }
}

export const app = createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'GET' && requestUrl.pathname.startsWith('/api/product/')) {
      return getProduct(req, res, decodeURIComponent(requestUrl.pathname.replace('/api/product/', '')));
    }

    if (req.method === 'POST' && requestUrl.pathname === '/api/update') {
      return submitUpdate(req, res);
    }

    if (req.method === 'POST' && requestUrl.pathname === '/api/batch-update') {
      return submitBatchUpdate(req, res);
    }

    if (req.method === 'GET') {
      return serveStatic(res, requestUrl.pathname);
    }

    return errorResponse(res, 405, 'Method not allowed.');
  } catch (error) {
    return errorResponse(res, 500, error.message || 'Unexpected server error.');
  }
});

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await ensureStorage();
  app.listen(PORT, () => {
    console.log(`Product update form available at http://localhost:${PORT}`);
  });
}
