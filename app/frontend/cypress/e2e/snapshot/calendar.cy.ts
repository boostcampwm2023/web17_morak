describe('Calendar Page', () => {
  beforeEach(() => {
    cy.clearCookie('access_token');
    // 테스트 실패 시 cypress.config.ts에 ACCESS_TOKEN이 있는지 확인 필요
    cy.setCookie('access_token', Cypress.env('ACCESS_TOKEN'));
  });
  it('should render on desktop', () => {
    cy.viewport('macbook-13');
    cy.visit('/calendar');
    cy.wait(1000);
    cy.matchImageSnapshot('desktop/calendar');
  });

  it('should render on mobile', () => {
    cy.viewport('iphone-xr');
    cy.visit('/calendar');
    cy.wait(1000);
    cy.matchImageSnapshot('mobile/calendar');
  });

  it('should render on desktop with empty sidebar open', () => {
    cy.viewport('macbook-13');
    cy.visit('/calendar');
    cy.wait(1000);
    cy.get('[data-cy="sidebar-button"]').click();
    cy.matchImageSnapshot('desktop/calendar-sidebar');
  });

  it('should render on mobile with empty sidebar open', () => {
    cy.viewport('iphone-xr');
    cy.visit('/calendar');
    cy.wait(1000);
    cy.get('[data-cy="sidebar-button"]').click();
    cy.matchImageSnapshot('mobile/calendar-sidebar');
  });
});
