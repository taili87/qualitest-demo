const { defineConfig } = require("cypress");
import * as XLSX from "xlsx";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

on("task", {
        readExcel({ filePath, sheetName }) {
          const workbook = XLSX.readFile(filePath);
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet);
          return jsonData; // returns array of objects
        },
        writeExcel({ filePath, sheetName, data }) {
          const workbook = XLSX.readFile(filePath);
          const ws = XLSX.utils.json_to_sheet(data);
          workbook.Sheets[sheetName] = ws;
          XLSX.writeFile(workbook, filePath);
          return true;
        },

      });
    },
    baseUrl: "https://example.cypress.io",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/index.js",
    
  },
});
