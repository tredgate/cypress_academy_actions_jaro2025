//first_github_actions_tests.cy.js

describe("Cypress GitHub actions demo", () => {
  it("Open pmtool and fill username", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("admin");
    cy.get("#username").should("have.value", "admin");
  });
});
