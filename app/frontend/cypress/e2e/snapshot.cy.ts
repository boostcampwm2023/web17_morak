describe('Main Page', () => {
  it('should render on desktop', () => {
    cy.viewport('macbook-13');
    cy.visit('/');
    cy.matchImageSnapshot('desktop');
  });

  it('should render on mobile', () => {
    cy.viewport('iphone-xr');
    cy.visit('/');
    cy.matchImageSnapshot('mobile');
  });
});
