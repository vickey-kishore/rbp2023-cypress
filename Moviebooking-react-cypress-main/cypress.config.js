const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on,config)
      module.exports = (on, config) => {
        on('task', tasks)
        config.env.codeCoverageTasksRegistered = true
        return config
      }
      // implement node event listeners here
      return config
    },
  },
});
