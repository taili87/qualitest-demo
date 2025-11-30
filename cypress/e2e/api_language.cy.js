// To get cypress / Mocha assertion command
/// <reference types="cypress"/>

import { VALIDATION_TEXT } from '../fixtures/testData';


describe('Validate the JsonBin EMNDPOINT API - GET method', () => {
  const url = 'https://api.jsonbin.io/v3/b/67a8329bad19ca34f8fc9ae7';
  it('Should return status 200 and contain expected structure from English or Spanish', () => {
    cy.request('GET', url).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.record[0].text).to.eq(VALIDATION_TEXT.valueEnglish)
      expect(response.body.record[0].language).to.eq(VALIDATION_TEXT.valueLanguageEnglish)
      expect(response.body.record[1].text).to.eq(VALIDATION_TEXT.valueSpanish)
      expect(response.body.record[1].language).to.eq(VALIDATION_TEXT.valueLanguageSpanish)
      
    });
  });
});






