# Product Metadata Batch Update Form

This repository contains a small Node.js web application with a BYUtv-inspired batch web form for updating one or more records in `Products - Green-lit (Metadata CSV) (7)_002.csv` by itemcode.

## What it does

- Matches the current BYUtv website style with a dark streaming-app shell, lowercase navigation, oversized hero typography, blue accent treatments, workflow pills, and polished metadata form cards.
- Looks up one or more products from the CSV by the `Item Code` column.
- Displays related `Series`, `S#`, and `Episode Number` context for each loaded itemcode when those values exist.
- Renders only the approved editable metadata fields in a webform: `Press Title`, `Press Title - Sort`, `Press Title - Short`, `Long Description`, `Medium Description`, `Short Description`, `Xtra Short Description`, and `Tiny Description`.
- Accepts user edits, submitter information, notes, and optional supporting documents for a batch.
- Requires every loaded itemcode to be marked complete before the final export/submission button is enabled.
- Updates the matching CSV rows on final submission when served by Node; in CSV fallback mode, downloads a replacement CSV because browsers cannot overwrite local files directly.
- Downloads the `product-metadata-batch` JSON receipt plus one matching XML version of that batch receipt and one XSL stylesheet for viewing the XML in a browser. The receipt includes `products-green-lit.metadata.schema` and `products-green-lit.parent-child.schema` documents under each record's `jsonFiles`, plus metadata for uploaded supporting documents.
- Stores updated itemcodes in `records/updated-itemcodes.json` and blocks any second update for the same itemcode.

## Run locally

```bash
npm start
```

Open <http://localhost:3000>, enter one or more itemcodes separated by commas, spaces, or new lines, optionally attach supporting documents (`.docx`, `.doc`, `.pdf`, `.xlsx`, `.xls`, or `.csv`), complete each item in the batch workspace, and then run the final export/submission. If you open `public/index.html` directly or see a backend connection error, use the CSV fallback mode: select `Products - Green-lit (Metadata CSV) (7)_002.csv` and optionally `records/updated-itemcodes.json`; submitting will download a replacement CSV, an updated lock record, and the JSON, XML, and XSL receipts.

## Test

```bash
npm test
```

## JSON schemas

The downloadable `product-metadata-batch` JSON receipt contains two schema-specific JSON documents per record:

- `jsonFiles.metadata` follows `schemas/products-green-lit.metadata.schema`.
- `jsonFiles.parentChild` follows `schemas/products-green-lit.parent-child.schema`.
- A single `product-metadata-batch` XML file mirrors the batch JSON receipt in XML format, including supporting document metadata, and `product-metadata-batch.xsl` provides a browser-readable stylesheet for that XML file.

## Runtime files

- `records/updated-itemcodes.json` is the lock list that prevents duplicate itemcode updates.
- `submissions/*.json` contains per-update receipt records and is ignored by Git so generated receipts do not clutter commits.
- `submissions/supporting-documents/` contains uploaded supporting documents for server-backed batch submissions.
