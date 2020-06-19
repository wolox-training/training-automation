describe('Sing Up', () => {
  beforeEach( () => {
   cy.fixture('user.json').as('userData')
   cy.visit(Cypress.env('baseUrl'))
   cy.get('.nav-link').eq(2).click()
  })
  it('Format email incorrect', () => {
    cy.get('@userData').then((userData) => {
     cy.get('.form-control').eq(0).type(userData.formatEmailIncorrect.username)
     cy.get('.form-control').eq(1).type(userData.formatEmailIncorrect.email)
     cy.get('.btn').should('be.disabled')
     cy.get('input[type=password]').type(userData.formatEmailIncorrect.password)
     cy.get('button[type=submit]').click()
     cy.contains(' email is invalid ').should('be.visible')
    })
  })

  it('With out Username', () => {
    cy.get('@userData').then((userData) => { 
      cy.get('.form-control').eq(1).type(userData.withOutUsername.email)
      cy.get('input[type=password]').type(userData.withOutUsername.password)
      cy.wait(3000)
      cy.get('button[type=submit]').click()
      expect(Cypress.env('MessageOne')).to.exist
    })
  })

  it('With one character in Password', () => {
    cy.get('@userData').then((userData) => {
      cy.get('.form-control').eq(0).type(userData.withOneCharacterInPassword.username)
      cy.get('.form-control').eq(1).type(userData.withOneCharacterInPassword.email)
      cy.get('.btn').should('be.disabled')
      cy.get('input[type=password]').type(userData.withOneCharacterInPassword.pwd)
      cy.wait(3000)
      cy.get('button[type=submit]').click()
      expect(Cypress.env('MessagePwd')).to.exist
    })
  })

  it('Register an user correctly', () => {
    cy.get('@userData').then((userData) => {
      cy.get('.form-control').eq(0).type(userData.registerAnUserCorrectly.username)
      cy.get('.form-control').eq(1).type(userData.registerAnUserCorrectly.email_one)
      cy.get('.btn').should('be.disabled')
      cy.get('input[type=password]').type(userData.registerAnUserCorrectly.password)
      cy.wait(3000)
      cy.get('button[type=submit]').click()
    })
  })

  it('Register an existing username and email', () => {
    cy.get('@userData').then((userData) => {
      cy.get('.form-control').eq(0).type(userData.registerAnUserCorrectly.username)
      cy.get('.form-control').eq(1).type(userData.registerAnUserCorrectly.email)
      cy.get('.btn').should('be.disabled')
      cy.get('input[type=password]').type(userData.registerAnUserCorrectly.password)
      cy.wait(3000)
      cy.get('button[type=submit]').click()
      expect(Cypress.env('MessageUser')).to.exist
    })
  })

})