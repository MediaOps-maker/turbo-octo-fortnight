import test from 'node:test';
import assert from 'node:assert/strict';
import {
  applyUpdatesToRow,
  findRowIndexByItemCode,
  getPresentEditableFields,
  validateUpdates,
} from '../lib/product-updates.js';

const editableFields = ['Press Title', 'Short Description'];

test('findRowIndexByItemCode locates data rows by the Item Code column', () => {
  const rows = [
    ['Item Code', 'Press Title'],
    ['950672', 'Original title'],
  ];

  assert.equal(findRowIndexByItemCode(rows, rows[0], '950672'), 1);
  assert.equal(findRowIndexByItemCode(rows, rows[0], 'missing'), -1);
});

test('findRowIndexByItemCode requires the Item Code column', () => {
  assert.throws(
    () => findRowIndexByItemCode([['Press Title']], ['Press Title'], '950672'),
    /Missing required "Item Code" column/
  );
});

test('getPresentEditableFields returns editable webform fields found in the CSV', () => {
  assert.deepEqual(
    getPresentEditableFields(['Item Code', 'Short Description', 'Other'], editableFields),
    ['Short Description']
  );
});

test('validateUpdates rejects invalid webform fields', () => {
  assert.equal(validateUpdates({ 'Press Title': 'New title' }, editableFields), '');
  assert.match(validateUpdates({ Other: 'Nope' }, editableFields), /Invalid fields: Other/);
  assert.match(validateUpdates(null, editableFields), /Updates must be an object/);
});

test('applyUpdatesToRow updates only approved CSV columns and returns original and updated products', () => {
  const headers = ['Item Code', 'Press Title', 'Short Description', 'Locked Column'];
  const row = ['950672', 'Original title', 'Original short', 'Do not edit'];

  const result = applyUpdatesToRow({
    headers,
    row,
    updates: {
      'Press Title': 'New title',
      'Short Description': null,
    },
    presentEditableFields: editableFields,
  });

  assert.deepEqual(row, ['950672', 'New title', '', 'Do not edit']);
  assert.equal(result.originalProduct['Press Title'], 'Original title');
  assert.equal(result.updatedProduct['Press Title'], 'New title');
  assert.equal(result.updatedProduct['Short Description'], '');
});
