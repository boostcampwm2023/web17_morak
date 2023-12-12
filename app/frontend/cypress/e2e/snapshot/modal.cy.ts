describe('Modal', () => {
  beforeEach(() => {
    cy.clearCookie('access_token');
  });
  it('should render on desktop', () => {
    cy.viewport('macbook-13');
    cy.visit('/');
    cy.wait(1000);
    cy.get('ul > li:first-child').click();
    cy.matchImageSnapshot('desktop/modal-login-require');
  });

  it('should render on mobile', () => {
    cy.viewport('iphone-xr');
    cy.visit('/');
    cy.wait(1000);
    cy.get('ul > li:first-child').click();
    cy.matchImageSnapshot('mobile/modal-login-require');
  });
});
