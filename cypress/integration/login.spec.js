describe('Login Validation',()=>{
  beforeEach(()=>{
    cy.fixture('user.json').as('userData')
    cy.visit(Cypress.env('page'))
    cy.get('[class=login]').click()
})
it('click in Sing In', ()=>{
  cy.get('#SubmitLogin').click()
  expect('An email address required.').to.exist
  
})
it('without password', ()=>{
  cy.get('@userData').then((userData) =>{
    cy.loginUser(userData.email)
    cy.get('#SubmitLogin').click()
    expect('Password is required.').to.exist
  })
  
})


})
