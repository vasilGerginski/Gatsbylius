describe("Homepage", () => {
  it("Test browse our collection scroll to article list", () => {
    cy.visit("http://localhost:8000");

    cy.contains("Our latest products").should("not.be.visible");
    cy.contains("Browse our collection").click();
    cy.contains("Our latest products").should("be.visible");
  });

  it("Click on Details button should display product page", () => {
    cy.visit("http://localhost:8000");

    // Force it because "details" is not visible in the dom
    cy.contains("Details", { force: true })
      .first()
      .click({ force: true });

    cy.url().should("include", "/product/");
  });

  it("Click on a category should display category page", () => {
    cy.visit("http://localhost:8000");

    cy.get('[data-name="container-fluid"] > :last-child > :first-child')
      .first()
      .click();

    cy.url().should("include", "/categories/prints");
  });
});
