describe('alura busca cursos', () => {

    beforeEach(() => {

        cy.visit('https://www.alura.com.br')

    })

    it('buscar curso de java', () => {

     cy.get('#header-barraBusca-form-campoBusca').type('java');

     cy.get('.header-barraBusca-form-submit').click();

     cy.get('h4.busca-resultado-nome')
       .should('contain','Formação Java e Orientação a Objetos');

    })

    it('buscar curso de javascript', () => {

        cy.get('#header-barraBusca-form-campoBusca').type('javascript');
   
        cy.get('.header-barraBusca-form-submit').click();
   
        cy.get('h4.busca-resultado-nome')
          .should('contain','Curso JavaScript: programando na linguagem da web');
       })

    

})