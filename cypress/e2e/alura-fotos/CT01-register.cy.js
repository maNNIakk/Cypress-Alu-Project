describe('Alura Pic Register', () => {

    beforeEach(() => {

        cy.visit('https://alura-fotos.herokuapp.com/#/home');

    })

    it('Verifica mensagens de validação', () =>{

      cy.contains('a','Register now').click();
      cy.contains('button','Register').click();
      cy.contains('ap-vmessage','Email is required!')
      .should('be.visible');
      cy.contains('button','Register').click();
      cy.contains('ap-vmessage','Full name is required!')
      .should('be.visible');
      cy.contains('ap-vmessage','User name is required!')
      .should('be.visible');
      cy.contains('ap-vmessage','Password is required!')
        .should('be.visible');
    })

    it('Verifica mensagens de email inválido', () =>{

      cy.contains('a','Register now').click();
      cy.contains('button','Register').click();
      cy.contains('ap-vmessage','Email is required!').should('be.visible');
      cy.get('input[formcontrolname="email"]').type('renato');
      cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');
    })

    it('Verifica mensagens de senha menor que 8 dígitos', () =>{

      cy.contains('a','Register now').click();
      cy.contains('button','Register').click();
      cy.contains('button','Register').click();
      cy.contains('ap-vmessage','Password is required!').should('be.visible');
      cy.get('input[formcontrolname="password"]').type('1234567');
      cy.contains('button','Register').click();
      cy.contains('ap-vmessage','Mininum length is 8').should('be.visible');
    })

    it('Verifica mensagens de Fullname menor que 2 dígitos', () =>{

      cy.contains('a','Register now').click();
      cy.contains('button','Register').click();
      cy.contains('button','Register').click();
      cy.contains('ap-vmessage','Full name is required!').should('be.visible');
      cy.get('input[formcontrolname="fullName"]').type('a');
      cy.contains('button','Register').click();
      cy.contains('ap-vmessage','Mininum length is 2').should('be.visible');
    })

    it('Register Valid User',() =>{
      cy.register('correctemail@email.com','testFullName','testUsername','testPassword');
    })



  })