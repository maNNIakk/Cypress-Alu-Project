const { defineConfig } = require("cypress");

module.exports = 
defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: true,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss"
  },
  video: false,
  recordKey: process.env.CYPRESS_RECORD_KEY,
  projectId: "fzfg3u",
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});