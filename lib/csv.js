export function parseCsv(text) {
  const cleanText = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < cleanText.length; i += 1) {
    const char = cleanText[i];
    const next = cleanText[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (char === '\r') {
      if (next === '\n') {
        continue;
      }
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

export function stringifyCsv(rows) {
  return rows
    .map((row) => row.map(formatField).join(','))
    .join('\n') + '\n';
}

function formatField(value) {
  const normalizedValue = value == null ? '' : String(value);
  if (/[",\r\n]/.test(normalizedValue)) {
    return `"${normalizedValue.replaceAll('"', '""')}"`;
  }
  return normalizedValue;
}

export function csvRowsToObjects(rows) {
  const [headers, ...dataRows] = rows;
  return dataRows.map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ''])));
}
