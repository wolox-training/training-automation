describe('Register a user account',()=>{
  beforeEach(()=>{
    cy.fixture('user.json').as('userData')
    cy.visit("baseUrl")
    cy.get('[class=login]').click()
  })
  
  
    it('Register incorrect', ()=>{
     cy.get('@userData').then((userData) =>{
     cy.get('#email_create').type('email')
     cy.get('#SubmitCreate').click()
     cy.get('ol > li').should('be.visible')
    })
  })

    it('Register correct', ()=>{
      cy.get('@userData').then((userData) =>{
      cy.get('#email_create').type('emailone')
      cy.get('#SubmitCreate').click()
      expect('Your personal information').to.exist
     })
    })

    after(()=>{
      cy.visit("baseUrl")
    })
})
 
  
  
