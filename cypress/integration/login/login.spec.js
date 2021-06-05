describe('Testando página de login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
    });

    it('Teste de Login ', () => {
        cy.contains('Login'); //testar se na página existe a expressão "Login"

        cy.get('[data-cy="email"]').type('alessandro@email.com'); //preenchendo o input de id 'email'
        cy.get('[data-cy="senha"]').type('12345678'); //preenchendo o input de id 'senha'

        cy.get('[data-cy="submit"]').click();
    });

    it('Teste de Logout ', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-cy="menu"]').click();

        cy.contains('Sair');

        cy.get('[data-cy="logout"]').click();

        cy.contains('Login');
    });
});