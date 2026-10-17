// Scopes are the only part that differs between apps in the suite; the rules below are shared.
const scopes = [
  "brand", // the logo and the files under brand/
  "ci",
  "deps",
];

/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        // body-max-line-length, except for Dependabot, whose bodies paste release notes.
        "body-line-length": ({ body, raw }, _when, max) => {
          if (/^Signed-off-by: dependabot\[bot\]/m.test(raw)) return [true];
          const long = (body ?? "").split("\n").some((line) => line.length > max);
          return [!long, `body's lines must not be longer than ${max} characters`];
        },
      },
    },
  ],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build", // build system, CMake, dependencies
        "chore", // maintenance with no src or test change
        "ci", // GitHub Actions, COPR, OBS
        "docs", // README, CONTRIBUTING, code comments only
        "feat", // new user-facing capability
        "fix", // bug fix
        "perf", // performance with no behaviour change
        "refactor", // restructuring with no behaviour change
        "revert", // reverts a previous commit
        "style", // formatting only, no code change
        "test", // tests only
      ],
    ],
    "scope-enum": [2, "always", scopes],
    "scope-empty": [0], // cross-cutting commits may omit a scope
    "subject-case": [2, "always", "lower-case"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 72],
    "body-max-line-length": [0],
    "body-line-length": [2, "always", 100],
  },
};
