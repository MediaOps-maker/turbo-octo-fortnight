# turbo-octo-fortnight

This repository contains a standalone HTML metadata form that matches the supplied Series/Season/Episode/Extra form mockup and generates JSON from submitted user input.


## GitHub repository

This project corresponds to `MediaOps-maker/turbo-octo-fortnight` on GitHub. The metadata form is intended to be committed at the repository root as `index.html`.

## Where to find the form

- Main form file: [`index.html`](./index.html)
- Open `index.html` directly in a browser to use the form.

## What the form does

The page lets a user enter metadata fields for the selected form type:

- Title
- Short Title (25 chars)
- Sort Title
- Long, Medium, Short, XShort, and Tiny descriptions with matching character limits
- Expected Duration
- Series / Season / Episode relationship status, which indicates whether the submitted records are a fully connected new series/season/episode set or an addition to an existing series and/or season

After clicking **Save Form**, the page renders a formatted JSON payload in the **Generated JSON** section below the form. The payload includes a `relationship` object with boolean flags for `isNewSeries`, `isNewSeason`, and `isNewEpisode` so downstream tooling can determine whether the submission creates all connected records or adds a new season and/or episode to existing records.

## Repository visibility

The form is included in this change set at the repository root as `index.html`, with this README alongside it. If the GitHub page for `MediaOps-maker/turbo-octo-fortnight` still only shows `.gitkeep`, the change has not been applied to that GitHub repository yet.

