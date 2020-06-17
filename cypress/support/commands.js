Cypress.Commands.add('loginUser',(username, password)=>{
  cy.get('[class=login]').click()
  cy.get('#email').type(username)
  cy.get('#passwd').type(password)
  cy.get('#SubmitLogin').click()
})