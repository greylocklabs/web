# greylocklabs.org

The Greylock Labs website: a landing page for the apps, served by GitHub Pages at
[greylocklabs.org](https://greylocklabs.org).

The site is in `www/`, which the Pages workflow publishes. `www/style.css`, `www/theme.js` and
`www/fonts/` are Callie's site files, unchanged, so every site in the family looks alike; this
page's own layout and headline are in `www/home.css` and `www/home.js`. `brand/` holds the logo as
a square SVG and as the 512 pixel PNG the GitHub organization uses.

The fonts are Nunito and Fraunces, under the SIL Open Font License; see `www/fonts/`.

Commit messages follow the same conventional style as the apps, checked by commitlint in CI. Run
`npm install` and `git config core.hooksPath .githooks` to check them locally as well.
