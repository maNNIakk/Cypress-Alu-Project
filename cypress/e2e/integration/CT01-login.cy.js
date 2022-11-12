describe('Alura Pic Login', () =>{

  beforeEach(() => {
    cy.visit('/');

  })

  it('Fazer login de usuário válido', () => {
    cy.login(Cypress.env('userName'),Cypress.env('password'));
    cy.contains('a','(Logout').should('be.visible');

  })

  it('Fazer login de usuário inválido', () =>{
    cy.login(Cypress.env('wrongUserName'),Cypress.env('wrongPassword'));
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('Invalid user name or password');
    })
  })

})