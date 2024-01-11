const baseConfig = require("@syncx/tailwind-config");

module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./src/**/*.{ts.tsx}"
  ]
};


