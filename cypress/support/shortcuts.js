Cypress.Commands.add('login',(nome,password) =>{
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(password);
    cy.get('button[type="submit"]').click();

})