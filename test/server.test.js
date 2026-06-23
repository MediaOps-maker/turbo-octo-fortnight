import test from 'node:test';
import assert from 'node:assert/strict';
import { EDITABLE_FIELDS, buildBatchXmlDocument, buildBatchXslDocument } from '../server.js';

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


test('server builds one XML and XSL receipt for the product metadata batch JSON', () => {
  const batchRecord = {
    submittedAt: '2026-06-22T00:00:00.000Z',
    submittedBy: 'Metadata Team',
    notes: 'Use <safe> escaping & formatting',
    itemCodes: ['950672'],
    schemas: { metadata: 'products-green-lit.metadata.schema', parentChild: 'products-green-lit.parent-child.schema' },
    records: [{
      itemCode: '950672',
      submittedAt: '2026-06-22T00:00:00.000Z',
      submittedBy: 'Metadata Team',
      notes: 'Use <safe> escaping & formatting',
      schemas: { metadata: 'products-green-lit.metadata.schema', parentChild: 'products-green-lit.parent-child.schema' },
      jsonFiles: {
        metadata: { $schema: 'products-green-lit.metadata.schema', updatedMetadata: { 'Press Title': 'Updated' } },
        parentChild: { $schema: 'products-green-lit.parent-child.schema', hierarchy: { 'Episode Number': '1' } },
      },
    }],
  };

  const xmlFile = buildBatchXmlDocument(batchRecord);
  const xslFile = buildBatchXslDocument();

  assert.match(xmlFile, /<productMetadataBatch>/);
  assert.match(xmlFile, /<itemCode>950672<\/itemCode>/);
  assert.match(xmlFile, /<field name=\"Press Title\">Updated<\/field>/);
  assert.match(xmlFile, /Use &lt;safe&gt; escaping &amp; formatting/);
  assert.doesNotMatch(xmlFile, /xmlFile|xslFile/);
  assert.match(xslFile, /<xsl:stylesheet/);
  assert.match(xslFile, /Product Metadata Batch/);
});
