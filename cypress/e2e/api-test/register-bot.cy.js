const { exists } = require("chai")

describe('Cria Lead', () => {

    beforeEach(() => {
        cy.viewport(1200,1200);
        cy.visit('https://b24-4li1ae.bitrix24.site/crm_form79/');
        
    })

    it.only('Cria Novo Formulário Loja', () =>{

        cy.get('input[type="number"]').eq(0).type('167132');
        cy.get('input[type="number"]').eq(1).type('50');
        cy.get('input[readonly="readonly"]').eq(0).click();
        cy.get('[class="b24-form-control-list-selector-item-title"').contains('span','RJ').click();
        cy.get('input[name="phone"]').type('21964851522');
        //cy.get('[style=""] > :nth-child(1) > :nth-child(1) > .b24-form-control-container > .b24-form-control').click();
        cy.get('input[readonly="readonly"]').eq(23).click();
        cy.contains('span','Rio de Janeiro - Barra da Tijuca').click();
        cy.get('input[name="name"]').type('TESTE');
        cy.get('input[name="email"]').type('teste@teste.com.br');
        cy.get('input[readonly="readonly"').eq(28).click();
        cy.get('.b24-form-control-list-selector-item-title > span').eq(2).click();
        cy.get('input[readonly="readonly"').eq(29).click();
        cy.get('.b24-form-control-list-selector-item-title > span').eq(2).click();
        cy.get('input[value="82403"').click();
        //Se descomentar abaixo envia o formulario para o ambiente de produção - NÃO DESCOMENTAR
        //cy.get('form').submit();

    })

})