const { defineConfig } = require("cypress")
require('dotenv').config()

module.exports = 
defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: true,
    html: false,
    json: true,
    timestamp: "mmddyyyy_HHMMss"
  },
  video: false,
  recordKey: process.env.CYPRESS_RECORD_KEY ,
  projectId: "fzfg3u",
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});