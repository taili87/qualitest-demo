// cypress.config.js
const xlsx = require('xlsx');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        writeXLSX({ filePath, data, sheetName = 'Sheet1' }) {
          const ws = xlsx.utils.json_to_sheet(data);
          const wb = xlsx.utils.book_new();
          xlsx.utils.book_append_sheet(wb, ws, sheetName);
          xlsx.writeFile(wb, filePath);
          return null;
        },
        // Example for reading an existing file
        readXLSX({ filePath, sheetName = 'Sheet1' }) {
          const workbook = xlsx.readFile(filePath);
          const ws = workbook.Sheets[sheetName];
          return xlsx.utils.sheet_to_json(ws);
        }
      });
      return config;
    },
  },
};
