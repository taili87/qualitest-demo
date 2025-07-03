// To get cypress / Mocha assertion command
/// <reference types="cypress"/>

import { LOCATOR_DATA } from '../locators/locators';
import { VALIDATION_TEXT } from '../fixtures/testData';

describe("Filter Translation Spanish to English ", () => {
  beforeEach(() => {
    cy.visit("https://translate.google.com/");
  });

  it("Validate the data is Spanish", () => {
    cy.get(LOCATOR_DATA.fielInput).type(VALIDATION_TEXT.valueSpanish).type('{enter}');
    cy.get(LOCATOR_DATA.valitedWord, { timeout: 1000 }).should('be.visible');
    cy.get(LOCATOR_DATA.valitedWord).first().should("exist");
    cy.get(LOCATOR_DATA.searchType, { timeout: 10000 }).should('be.visible').clear().type(VALIDATION_TEXT.valueSpanish);
    cy.get(LOCATOR_DATA.englishTitle, { timeout: 10000 }).should('contain.text', 'how are you');
    
  });
});

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






