# Product Metadata Update Form

This repository contains a small Node.js web application for updating records in `Products - Green-lit (Metadata CSV) (7)_002.csv` by itemcode.

## What it does

- Looks up products from the CSV by the `Item Code` column.
- Renders the CSV metadata fields in a webform.
- Accepts user edits, submitter information, and notes.
- Updates the matching CSV row on submit.
- Downloads a JSON receipt in the browser and stores a matching JSON submission record on the server.
- Stores updated itemcodes in `records/updated-itemcodes.json` and blocks any second update for the same itemcode.

## Run locally

```bash
npm start
```

Open <http://localhost:3000>, enter an itemcode, update the metadata fields, and submit the form.

## Test

```bash
npm test
```

## Runtime files

- `records/updated-itemcodes.json` is the lock list that prevents duplicate itemcode updates.
- `submissions/*.json` contains per-update receipt records and is ignored by Git so generated receipts do not clutter commits.
