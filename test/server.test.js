import test from 'node:test';
import assert from 'node:assert/strict';
import { EDITABLE_FIELDS, buildXmlDocuments, buildXslDocuments } from '../server.js';

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


test('server builds XML and XSL receipt documents that match the JSON schema groups', () => {
  const xmlFiles = buildXmlDocuments({
    itemCode: '950672',
    submittedAt: '2026-06-22T00:00:00.000Z',
    submittedBy: 'Metadata Team',
    notes: 'Use <safe> escaping & formatting',
    originalProduct: {
      'Press Title': 'Original',
      Series: 'Show',
      Season: '1',
      'S#': 'S1',
      Episode: 'Pilot',
      'Episode Number': '1',
    },
    updatedProduct: {
      'Press Title': 'Updated',
      Series: 'Show',
      Season: '1',
      'S#': 'S1',
      Episode: 'Pilot',
      'Episode Number': '1',
    },
  });
  const xslFiles = buildXslDocuments();

  assert.match(xmlFiles.metadata, /<metadata schema="products-green-lit.metadata.schema">/);
  assert.match(xmlFiles.metadata, /<field name="Press Title">Updated<\/field>/);
  assert.match(xmlFiles.metadata, /Use &lt;safe&gt; escaping &amp; formatting/);
  assert.match(xmlFiles.parentChild, /<parentChild schema="products-green-lit.parent-child.schema">/);
  assert.match(xmlFiles.parentChild, /<field name="Episode Number">1<\/field>/);
  assert.match(xslFiles.metadata, /<xsl:stylesheet/);
  assert.match(xslFiles.parentChild, /Products Green-lit Parent\/Child Update/);
});
