const ITEM_CODE_COLUMN = 'Item Code';

export function rowToObject(headers, row) {
  return Object.fromEntries(headers.map((header, index) => [header, row[index] ?? '']));
}

export function findRowIndexByItemCode(rows, headers, itemCode) {
  const itemCodeIndex = headers.indexOf(ITEM_CODE_COLUMN);
  if (itemCodeIndex === -1) {
    throw new Error(`Missing required "${ITEM_CODE_COLUMN}" column in CSV.`);
  }
  return rows.findIndex((row, index) => index > 0 && row[itemCodeIndex] === itemCode);
}

export function getPresentEditableFields(headers, editableFields) {
  return editableFields.filter((field) => headers.includes(field));
}

export function validateUpdates(updates, presentEditableFields) {
  if (typeof updates !== 'object' || updates === null || Array.isArray(updates)) {
    return 'Updates must be an object keyed by CSV column name.';
  }

  const invalidFields = Object.keys(updates).filter((field) => !presentEditableFields.includes(field));
  if (invalidFields.length > 0) {
    return `Only these fields can be updated: ${presentEditableFields.join(', ')}. Invalid fields: ${invalidFields.join(', ')}.`;
  }

  return '';
}

export function applyUpdatesToRow({ headers, row, updates, presentEditableFields }) {
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
