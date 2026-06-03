# turbo-octo-fortnight

This repository contains a standalone HTML metadata form that matches the supplied Series/Season/Episode/Extra form mockup, uses a BYUtv-inspired dark streaming-app visual style, and generates JSON from submitted user input.


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
- Series / Season / Episode relationship status, which indicates whether the submitted records are a fully connected new series/season/episode set or an addition to an existing series/season
- Counts for how many seasons and episodes need to be added, including support for multiple new season and/or episode forms
- Extra parent selection so an Extra can be marked as a child of an existing series, season, or episode
- Required existing reference IDs that dynamically appear for the selected relationship, such as existing series, season, or episode IDs
- A top-of-form workflow setup area where relationship, counts, and required existing references are selected before the metadata fields are filled in
- A generated form progress section that shows which season or episode form is currently being worked on and unlocks the next generated form only after the current required fields are complete
- A Download JSON button that is enabled only after JSON has been generated and all planned generated forms are complete
- Season-only generated forms that collect only a season number
- Episode generated forms that include an episode season number field to associate each episode with its season
- Episode season numbers auto-populate from the user-entered Season Number values, so the actual season numbers can be greater than the count of seasons being added while each added season still receives the selected number of episodes

After clicking **Save Form**, the page renders a formatted JSON payload in the **Generated JSON** section below the form. The payload includes a `relationship` object with boolean flags for `isNewSeries`, `isNewSeason`, `isNewEpisode`, `requestedSeasonCount`, `requestedEpisodeCount`, `hasMultipleSeasons`, and `hasMultipleEpisodes`. It also includes a `formPlan` object that lists which individual Series, Season, Episode, or Extra forms should be created for the active tab and selected workflow. When the Extra tab is active, the payload includes an `extraParent` object that records whether the Extra is a child of an existing series, season, or episode. Required fields are enabled dynamically: existing-series workflows require an existing series ID, existing-season workflows require an existing season ID, and Extra workflows require the selected parent ID before JSON can be generated. For multiple seasons or episodes, the form displays the current generated form position and stores completed form entries as users move through the generated form sequence. Changing the relationship/count workflow clears any previously generated JSON, and completed generated JSON can be downloaded once every planned form has been completed. JSON saving is blocked until all generated forms in the Current Form Progress sequence have been completed; generated Season forms only ask for season number, and generated Episode forms include an episode season number for season association. When multiple seasons and episodes are requested, the episode forms are distributed evenly across the entered season numbers, so an Existing series needs a new season and episode workflow uses the user-provided Season Number values on the corresponding Episode forms.

## Repository visibility

The form is included in this change set at the repository root as `index.html`, with this README alongside it. If the GitHub page for `MediaOps-maker/turbo-octo-fortnight` still only shows `.gitkeep`, the change has not been applied to that GitHub repository yet.

