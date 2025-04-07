//pmtool_login_tests.cy.js

describe("PMtool Login Tests", { tags: "@smoke" }, () => {
  it("Title exist", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("h3.form-title").should("exist");
  });
});
