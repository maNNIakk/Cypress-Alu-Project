describe('alura busca cursos', () => {

    beforeEach(() => {

        cy.visit('https://alura-fotos.herokuapp.com/#/home')

    })

    it('Wrong login try',() => {

        cy.get('[formcontrolname="userName"]')
          .type('XABLAU');
        
        cy.get('[formcontrolname="password"]')
          .type('12345678');

        cy.contains('button','login').click();

        cy.contains('small', 'User name is required!');
        cy.contains('small', 'Password is required!');

    })

    it('Correct login try',() => {

      cy.get('[formcontrolname="userName"]')
        .type('usernametest');
      
      cy.get('[formcontrolname="password"]')
        .type('testpassword');

      cy.contains('button','login').click();
      cy.contains('button','Load more').should('be.visible');

  })




})