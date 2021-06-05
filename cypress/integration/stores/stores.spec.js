describe('Teste da página de lojas', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Acessar tela de lojas pelo menu', () => {
        cy.get('[data-cy="menu"]').click();

        cy.get('[data-cy="stores"]').click();

        cy.contains('Listagem de Lojas');
    });

    it('Acessar tela de lojas pelo link do dashboard', () => {
        cy.get('[data-cy="dashboard-stores"]').click();

        cy.contains('Listagem de Lojas');
    });

    it('Acessar os detalhes de uma loja', () => {
        cy.visit('http://localhost:3000/lojas');

        cy.wait(3000);

        cy.get('.MuiCardActionArea-root').first().click();

        cy.contains('Voltar');
    });
});