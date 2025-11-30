
import { ExcelRow } from "../../types/excel";

describe("Excel Data Test", () => {
  it("should read data from Excel", () => {
    cy.task("readExcel", {
      filePath: "cypress/fixtures/testdata.xlsx",
      sheetName: "Sheet1",
    }).then((data) => {
      cy.log(`Excel Data: ${JSON.stringify(data)}`);
      expect(data[0].Name).to.equal("John");
      expect(data[1].City).to.equal("London");
    });
  });
});
