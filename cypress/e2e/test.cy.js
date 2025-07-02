
describe("Filter Language to English ", () => {
  beforeEach(() => {
    cy.visit("https://translate.google.com/?sl=es&tl=en&op=translate");
    cy.intercept("GET", "https://api.jsonbin.io/v3/b/67a8329bad19ca34f8fc9ae7", {
      fixture: "qalitest_testData.json",
    });
  });

  it("Mock API Tags, and then validate on UI", () => {
    cy.get("textarea[aria-label").type("Hola").type('{enter}')
    cy.get('textarea[role=combobox]', { timeout: 1000 }).should('be.visible')
    
  });
});

