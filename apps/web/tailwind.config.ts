const baseConfig = require("@syncx/tailwind-config");
const path = require("path");

module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    `${path.join(require.resolve("@syncx/ui"), "..")}/**/*.{ts,tsx}`, // this means to include the @syncx/ui file in this package and use them in the build process
  ],
};
