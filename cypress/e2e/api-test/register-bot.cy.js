const { exists } = require("chai")

describe('Cria Lead', () => {

    beforeEach(() => {
        cy.visit('https://b24-4li1ae.bitrix24.site/crm_form79/');
    })

    it.only('Cria Novo Formulário Loja', () =>{

        cy.get('input[type="number"]').eq(0).type('167132');
        cy.get('input[type="number"]').eq(1).type('50');
        cy.get('input[readonly="readonly"]').eq(0).click();
        cy.get('[class="b24-form-control-list-selector-item-title"').contains('span','RJ').click();
        cy.get('input[name="phone"]').type('21992535332');
        cy.get('input[readonly="readonly"]').contains('Cidades - Rj').click().contains('span','Rio de Janeiro - Barra da Tijuca').click();
        ;
    })

})