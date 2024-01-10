// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@syncx/eslint-config"],
  rules: {
    "@next/next/no-img-element": "off",
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
