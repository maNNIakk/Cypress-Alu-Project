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

Cypress.Commands.add('focusOut',() => {
    cy.get('textarea[class="b24-form-control').click();
})


Cypress.Commands.add('validateForm', () => {

    //Check if vendorID is empty, check error message if its empty and if error message is visible
    cy.get('input[type="number"]')
       .eq(0)
        .click()
         .should('have.value','')
          .focusOut();
    cy.get('.b24-form-control-alert-message')
      .eq(0)
       .should('contain','O campo é obrigatório')
        .should('be.visible');

    //Check if State field is empty, check error message if its empty and if error message is visible
    cy.get('input[readonly="readonly"]')
       .eq(0)
        .click()
         .should('have.value','')
          .focusOut();
    cy.get('.b24-form-control-alert-message')
     .eq(1)
      .should('contain','O campo é obrigatório')
       .should('be.visible');

    //Fill State field to enable City field, check empty value for City field, check error message if its empty
    //and if error message is visible
    cy.get('input[readonly="readonly"]')
       .eq(0)
        .click();

    cy.get('[class="b24-form-control-list-selector-item-title"')
       .contains('span','RJ')
        .click();

    cy.get('input[readonly="readonly"]')
       .eq(23)
        .click()
         .should('have.value','')
          .focusOut();

    cy.get('.b24-form-control-alert-message')
       .eq(24)
        .should('contain','O campo é obrigatório')
         .should('be.visible');

    //Clear State Input
    cy.get('.b24-form-icon-after')
       .click();

    //Check if Name field is empty, check error message if its empty and if error message is visible
    cy.get('input[name="name"]')
       .click()
        .should('have.value','')
         .focusOut();

    cy.get('.b24-form-control-alert-message')
       .eq(29)
        .should('contain','O campo é obrigatório')
         .should('be.visible');
    
    //Check if Phone field has default value, check error message if it has default value after interaction
    //and check if it has a empty field and its
    cy.get('input[name="phone"]')
       .click()
        .should('have.value','+55')
         .focusOut();

    cy.get('.b24-form-control-alert-message')
       .eq(30)
        .should('contain','O valor do campo está incorreto')
         .should('be.visible');

    cy.get('input[name="phone"]')
       .clear()
        .should('have.value','')
         .focusOut();

    cy.get('.b24-form-control-alert-message')
     .eq(30)
      .should('contain','O campo é obrigatório')
       .should('be.visible');

    
    
    //Validate empty Email AND Invalid Typing (without @ and dotcom)
    cy.get('input[name="email"]')
       .click()
        .focusOut();
    cy.get('.b24-form-control-alert-message')
     .eq(31)
      .should('contain','O campo é obrigatório')
       .should('be.visible');



})

Cypress.Commands.add('fillForm', (vendorId,clientName,clientPhone,clientEmail,bikeModel) => {

    //Get and fill vendor id number
    cy.get('input[type="number"]').eq(0).type(vendorId);
    //Open State Dropdown menu
    cy.get('input[readonly="readonly"]').eq(0).click();
    //Select Rj in Dropdown menu
    cy.get('[class="b24-form-control-list-selector-item-title"').contains('span','RJ').click();
    //Open City Dropdown menu
    cy.get('input[readonly="readonly"]').eq(23).click();
    //Select the city/area in City Dropdown menu
    cy.contains('span','Rio de Janeiro - Barra da Tijuca').click();
    //Get and fill client name
    cy.get('input[name="name"]').type(clientName);
    //Get and fill phone field
    cy.get('input[name="phone"]').type(clientPhone);
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
