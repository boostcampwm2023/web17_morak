describe('Main Page', () => {
  it('should render on desktop', () => {
    cy.viewport('macbook-13');
    cy.visit('/');
    cy.wait(1000);
    cy.matchImageSnapshot('desktop/main');
  });

  it('should render on mobile', () => {
    cy.viewport('iphone-xr');
    cy.visit('/');
    cy.wait(1000);
    cy.matchImageSnapshot('mobile/main');
  });
});
