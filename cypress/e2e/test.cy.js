
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

// describe("API Mocking in Cypress using cy.intercept Method ", () => {
//   beforeEach(() => {
//     cy.visit("https://demo.realworld.io/");
//     cy.intercept("GET", "https://api.realworld.io/api/tags", {
//       fixture: "mockTags.json",
//     });
//     cy.intercept(
//       "GET",
//       "https://api.realworld.io/api/articles?limit=10&offset=0",
//       { fixture: "mockArticles.json" }
//     );
//   });

//   it("Mock API Tags, and then validate on UI", () => {
//     cy.get(".tag-list", { timeout: 1000 })
//       .should("contain", "Cypress")
//       .and("contain", "Playwright");
//   });

//   it("Mock the Article feed, and then validate on UI", () => {
//     cy.get("app-favorite-button.pull-xs-right").contains("10");
//     cy.get(".author").contains("Kailash Pathak");
//     cy.get(".preview-link > p").contains("SLASSCOM QUALITY SUMMIT 2023");
//   });
// });
