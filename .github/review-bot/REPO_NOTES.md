# Repo notes - web

Facts the review bot cannot infer from one pass over the diff. The philosophy, the finding categories, the workflow,
the scoring and the output format all live in the bot's base prompt; this file only refines them for this repo.

## What this repo is

The greylocklabs.org website: a static landing page for the Greylock Labs apps, with no build step. The Pages workflow
publishes `www/` as it is, through greylocklabs/.github's shared `pages.yml`.

| Path                        | What it is                                                               |
| --------------------------- | ------------------------------------------------------------------------ |
| `www/index.html`, `home.*`  | The landing page and its own layout and headline.                        |
| `www/style.css`, `theme.js` | Callie's site files, unchanged, so every site in the family looks alike. |
| `www/fonts/`                | Nunito and Fraunces, with their licenses.                                |
| `www/apps/`, `www/brand/`   | The apps' cards and the brand page.                                      |
| `www/.well-known/`          | Files other services read to verify the domain, such as Microsoft's.     |
| `www/CNAME`                 | The custom domain Pages serves; changing it moves the site.              |
| `brand/`                    | The logo and other brand images, not published.                          |

## What to check

- **Shared files stay shared.** `www/style.css`, `www/theme.js` and `www/fonts/` should match Callie's site; a change
  to them here that Callie does not have is a finding.
- **Published paths.** Anything outside `www/` is not served, and `www/CNAME` and `www/.well-known/` must stay where
  they are. A JSON file under `.well-known/` must be valid JSON.
- **Pages work without JavaScript.** Content and links must be there with scripts off; scripts only add to them.
- **Accessibility.** Real links and buttons, alt text on images that carry meaning, and text at 4.5:1 contrast in the
  light and dark themes.
