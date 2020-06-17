describe('Sing Up',()=>{
  beforeEach(()=>{
    cy.fixture('user.json').as('userData')
    cy.visit(Cypress.env('Page'))
   cy.get('.nav-link').eq(2).click()
  })
  it('Format email incorrect', ()=>{
    cy.get('@userData').then((userData) =>{
      cy.get('.form-control').eq(0).type(userData.username)
      cy.get('.form-control').eq(1).type(userData.email_i)
     cy.get('.btn').should('be.disabled')
     cy.get('input[type=password]').type(userData.password)
     cy.get('button[type=submit]').click()
     cy.contains(' email is invalid ').should('be.visible')

    })
  })

  it('With out Username', ()=>{
    cy.get('@userData').then((userData) =>{
      cy.get('.form-control').eq(1).type(userData.email_two)
      cy.get('input[type=password]').type(userData.password)
      cy.get('button[type=submit]').click({force: true})
      expect(Cypress.env('MessageOne')).to.exist
    })
  })

  it('With one character in Password', ()=>{
    cy.get('@userData').then((userData) =>{
      cy.get('.form-control').eq(0).type(userData.username)
      cy.get('.form-control').eq(1).type(userData.email_two)
      cy.get('.btn').should('be.disabled')
      cy.get('input[type=password]').type(userData.pwd)
      cy.get('button[type=submit]').click({force: true})
      expect(Cypress.env('MessagePwd')).to.exist
    })
  })

  it('Register an user correctly', ()=>{
    cy.get('@userData').then((userData) =>{
      cy.get('.form-control').eq(0).type(userData.username)
      cy.get('.form-control').eq(1).type(userData.email_one)
      cy.get('.btn').should('be.disabled')
      cy.get('input[type=password]').type(userData.Password)
      cy.get('button[type=submit]').click({force: true})
    })
  })

  it('Register an existing username and email', ()=>{
    cy.get('@userData').then((userData) =>{
      cy.get('.form-control').eq(0).type(userData.username)
      cy.get('.form-control').eq(1).type(userData.email_one)
      cy.get('.btn').should('be.disabled')
      cy.get('input[type=password]').type(userData.Password)
      cy.get('button[type=submit]').click({force: true})
      expect(Cypress.env('MessageUser')).to.exist
    })
  })
})