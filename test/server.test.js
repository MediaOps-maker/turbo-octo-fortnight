import test from 'node:test';
import assert from 'node:assert/strict';
import { EDITABLE_FIELDS } from '../server.js';

test('server exposes only the approved editable metadata fields', () => {
  assert.deepEqual(EDITABLE_FIELDS, [
    'Press Title',
    'Press Title - Sort',
    'Press Title - Short',
    'Long Description',
    'Medium Description',
    'Short Description',
    'Xtra Short Description',
    'Tiny Description',
  ]);
});
