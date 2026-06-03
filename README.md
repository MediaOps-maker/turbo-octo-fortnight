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
- Counts for how many seasons and episodes need to be added, including support for multiple new season and/or episode forms
- Extra parent selection so an Extra can be marked as a child of an existing series, season, or episode
- Required existing reference IDs that dynamically appear for the selected relationship, such as existing series, season, or episode IDs

After clicking **Save Form**, the page renders a formatted JSON payload in the **Generated JSON** section below the form. The payload includes a `relationship` object with boolean flags for `isNewSeries`, `isNewSeason`, `isNewEpisode`, `requestedSeasonCount`, `requestedEpisodeCount`, `hasMultipleSeasons`, and `hasMultipleEpisodes`. It also includes a `formPlan` object that lists which individual Series, Season, Episode, or Extra forms should be created for the active tab and selected workflow. When the Extra tab is active, the payload includes an `extraParent` object that records whether the Extra is a child of an existing series, season, or episode. Required fields are enabled dynamically: existing-series workflows require an existing series ID, existing-season workflows require an existing season ID, and Extra workflows require the selected parent ID before JSON can be generated.

## Repository visibility

The form is included in this change set at the repository root as `index.html`, with this README alongside it. If the GitHub page for `MediaOps-maker/turbo-octo-fortnight` still only shows `.gitkeep`, the change has not been applied to that GitHub repository yet.

