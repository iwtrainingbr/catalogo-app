describe('Testando página de login do Dona Help', () => {
    beforeEach(() => {
        cy.visit('https://admin.donahelp.me/login');
    });

    it('Teste de Login ', () => {
        cy.contains('Login'); //testar se na página existe a expressão "Login"

        cy.get('#inputEmail').type('chiquim@email.com'); //preenchendo o input de id 'email'
        cy.get('#pwd').type('12345678'); //preenchendo o input de id 'senha'

        cy.get('[type="submit"]').click();
    });

    it('Teste de Logout ', () => {

    });
});