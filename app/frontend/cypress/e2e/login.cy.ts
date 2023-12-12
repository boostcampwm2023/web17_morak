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
  });
});
