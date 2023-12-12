describe('Post Page', () => {
  beforeEach(() => {
    cy.clearCookie('access_token');
    // 테스트 실패 시 cypress.config.ts에 ACCESS_TOKEN이 있는지 확인 필요
    cy.setCookie('access_token', Cypress.env('ACCESS_TOKEN'));
  });
  it('should render on desktop', () => {
    cy.viewport('macbook-13');
    cy.visit('/post');
    cy.wait(1000);
    cy.matchImageSnapshot('desktop/post');
  });

  it('should render on mobile', () => {
    cy.viewport('iphone-xr');
    cy.visit('/post');
    cy.wait(1000);
    cy.matchImageSnapshot('mobile/post');
  });
});
