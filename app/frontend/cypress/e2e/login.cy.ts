describe('메인 페이지 비로그인 테스트', () => {
  it('로그인하지 않고 메뉴를 클릭했을 경우 로그인 필요 모달이 떠야 한다', () => {
    cy.viewport('macbook-13');
    cy.visit('/');
    cy.get('[data-cy="header-menu"] > [data-cy="header-menu-item"]').each(
      ($li) => {
        cy.wrap($li).click().wait(100);
        cy.get('dialog').find('button').click();
      },
    );
    cy.get('[data-cy="login-button"] > button').should('be.visible');
  });
});

describe('메인 페이지 로그인 테스트', () => {
  beforeEach(() => {
    cy.clearCookie('access_token');
    // 테스트 실패 시 cypress.config.ts에 ACCESS_TOKEN이 있는지 확인 필요
    cy.setCookie('access_token', Cypress.env('ACCESS_TOKEN'));
    cy.viewport('macbook-13');
    cy.visit('/');
  });

  it('로그인한 상태에서는 메인 페이지에 로그인 버튼이 보이지 않아야 한다.', () => {
    cy.get('[data-cy="login-button"]').should('be.empty');
  });

  it('로그인한 상태에서 첫 번째 메뉴를 클릭했을 경우 해당 라우터로 넘어간다', () => {
    cy.get('[data-cy="header-menu-item"]').first().click();
    cy.get('[data-cy="header-menu-item"]')
      .first()
      .should('have.css', 'font-weight')
      .and('match', /700/);
    cy.url().should('include', '/mogaco');
  });
});
