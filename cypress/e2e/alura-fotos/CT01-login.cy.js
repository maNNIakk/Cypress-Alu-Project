describe('Alura Pic Login', () =>{

  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com/#/home');

  })

  it('Fazer login de usuário válido', () => {
    cy.login('flavio','123');
    cy.contains('a','(Logout').should('be.visible');

  })

  it('Fazer login de usuário inválido', () =>{
    cy.login('jacqueline','1234');
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('Invalid user name or password');
    })
  })

})