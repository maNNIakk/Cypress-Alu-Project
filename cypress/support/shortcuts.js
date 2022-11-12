Cypress.Commands.add('login',(nome,password) =>{
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(password,{log:false});
    cy.get('button[type="submit"]').click();

})

Cypress.Commands.add('register',(email,fullName,userName,password) => {
    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="fullName"]').type(fullName);
    cy.get('input[formcontrolname="userName"]').type(userName);
    cy.get('input[formcontrolname="password"]').type(password);
})

Cypress.Commands.add('fillForm', (vendorId,clientName,clientPhone,clientEmail,bikeModel) => {

    //Get and fill vendor id number
    cy.get('input[type="number"]').eq(0).type(vendorId);
    //Open State Dropdown menu
    cy.get('input[readonly="readonly"]').eq(0).click();
    //Select Rj in Dropdown menu
    cy.get('[class="b24-form-control-list-selector-item-title"').contains('span','RJ').click();
    //Get and fill phone field
    cy.get('input[name="phone"]').type(clientPhone);
    //Open City Dropdown menu
    cy.get('input[readonly="readonly"]').eq(23).click();
    //Select the city/area in City Dropdown menu
    cy.contains('span','Rio de Janeiro - Barra da Tijuca').click();
    //Get and fill client name
    cy.get('input[name="name"]').type(clientName);
    //Get and fill client email
    cy.get('input[name="email"]').type(clientEmail);
    //Open 
    cy.get('input[readonly="readonly"').eq(28).click();
    cy.get('.b24-form-control-list-selector-item-title > span').eq(2).click();
    cy.get('input[readonly="readonly"').eq(29).click();
    //bikeModel 1 = EV1 Sport / bikeModel 2 = EVS
    cy.get('.b24-form-control-list-selector-item-title > span').eq(bikeModel).click();
    cy.get('input[type="number"]').eq(1).type('50');
    cy.get('input[value="82403"').click();
    //Se descomentar abaixo envia o formulario para o ambiente de produção - NÃO DESCOMENTAR
    //cy.get('form').submit();



})
