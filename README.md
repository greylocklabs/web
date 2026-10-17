# greylocklabs.org

The Greylock Labs website: a landing page for the apps, served by GitHub Pages at
[greylocklabs.org](https://greylocklabs.org).

`style.css`, `theme.js` and `fonts/` are Callie's site files, unchanged, so every site in the family
looks alike. This page's own layout is in `home.css`. `brand/` holds the logo as a square SVG and
as the 512 pixel PNG the GitHub organization uses.

The fonts are Nunito and Fraunces, under the SIL Open Font License; see `fonts/`.

Commit messages follow the same conventional style as the apps, checked by commitlint in CI. Run
`npm install` and `git config core.hooksPath .githooks` to check them locally as well.
