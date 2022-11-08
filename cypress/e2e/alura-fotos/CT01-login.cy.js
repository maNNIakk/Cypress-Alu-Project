describe('Correct Register Try',() => {

    beforeEach(() => {

        cy.visit('https://alura-fotos.herokuapp.com/#/home')

    })

    it('Invalid userName Register', () => {
        
        cy.get('ng-component > p > a').click();
        cy.get('[formcontrolname="email"').type('test-email@test.com');
        cy.get('[formcontrolname="fullName"').type('name test');
        cy.get('[formcontrolname="userName"').type('usernametest');
        cy.get('[formcontrolname="password"').type('testpassword');
        cy.get('.text-danger')
          .should('contain','Username already taken')
        cy.contains('button','Register').click();
        

    });

})