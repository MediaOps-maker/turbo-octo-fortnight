# Product Metadata Update Form

This repository contains a small Node.js web application for updating records in `Products - Green-lit (Metadata CSV) (7)_002.csv` by itemcode.

## What it does

- Looks up products from the CSV by the `Item Code` column.
- Renders only the approved editable metadata fields in a webform: `Press Title`, `Press Title - Sort`, `Press Title - Short`, `Long Description`, `Medium Description`, `Short Description`, `Xtra Short Description`, and `Tiny Description`.
- Accepts user edits, submitter information, and notes.
- Updates the matching CSV row on submit when served by Node; in CSV fallback mode, downloads a replacement CSV because browsers cannot overwrite local files directly.
- Downloads a JSON receipt in the browser and stores a matching JSON submission record on the server. The receipt includes `products-green-lit.metadata.schema` and `products-green-lit.parent-child.schema` documents under `jsonFiles`.
- Stores updated itemcodes in `records/updated-itemcodes.json` and blocks any second update for the same itemcode.

## Run locally

```bash
npm start
```

Open <http://localhost:3000>, enter an itemcode, update the metadata fields, and submit the form. If you open `public/index.html` directly or see a backend connection error, use the CSV fallback mode: select `Products - Green-lit (Metadata CSV) (7)_002.csv` and optionally `records/updated-itemcodes.json`; submitting will download a replacement CSV, an updated lock record, and the JSON receipt.

## Test

```bash
npm test
```

## JSON schemas

The downloadable receipt contains two schema-specific JSON documents:

- `jsonFiles.metadata` follows `schemas/products-green-lit.metadata.schema`.
- `jsonFiles.parentChild` follows `schemas/products-green-lit.parent-child.schema`.

## Runtime files

- `records/updated-itemcodes.json` is the lock list that prevents duplicate itemcode updates.
- `submissions/*.json` contains per-update receipt records and is ignored by Git so generated receipts do not clutter commits.
