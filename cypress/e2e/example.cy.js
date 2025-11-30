// example.cy.js
it('should write and read an XLSX file', () => {
  const dataToWrite = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
  ];
  const filePath = 'cypress/downloads/test.xlsx';

  // Write data to XLSX
  cy.task('writeXLSX', { filePath, data: dataToWrite });

  // Read data from XLSX (using the example task from step 2)
  cy.task('readXLSX', { filePath }).then((dataFromJson) => {
    expect(dataFromJson.length).to.equal(2);
    expect(dataFromJson[0].name).to.equal('Alice');
  });
});
