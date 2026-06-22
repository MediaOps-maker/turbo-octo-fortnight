import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCsv, stringifyCsv, csvRowsToObjects } from '../lib/csv.js';

test('parseCsv handles quoted commas, quotes, and BOM', () => {
  const rows = parseCsv('\ufeffTitle,Description,Item Code\n"A, B","Said ""hi""",123\n');
  assert.deepEqual(rows, [
    ['Title', 'Description', 'Item Code'],
    ['A, B', 'Said "hi"', '123'],
  ]);
});

test('stringifyCsv escapes fields that need quoting', () => {
  const csv = stringifyCsv([
    ['Title', 'Description'],
    ['A, B', 'Line 1\nLine 2'],
  ]);
  assert.equal(csv, 'Title,Description\n"A, B","Line 1\nLine 2"\n');
});

test('csvRowsToObjects maps headers to row values', () => {
  const objects = csvRowsToObjects([
    ['Title', 'Item Code'],
    ['Product', '950672'],
  ]);
  assert.deepEqual(objects, [{ Title: 'Product', 'Item Code': '950672' }]);
});
