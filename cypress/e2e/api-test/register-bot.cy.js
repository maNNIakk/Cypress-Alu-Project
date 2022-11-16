
describe('Cria Lead', () => {

    beforeEach(() => {
        cy.viewport(1200,1200);
        cy.visit('https://b24-4li1ae.bitrix24.site/crm_form79/');
        
    })

    it.only('Cria Novo Formulário Loja', () =>{

        cy.validateForm();
        cy.fillForm(Cypress.env('renato'),'xablau','21992535332','xablau@xablau.com',Cypress.env('ev1'));

    })
})