module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
}

const path = require("path")

// Export a function. Accept the base config as the only param.
module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ]

    // Return the altered config
    return config
  },
}
