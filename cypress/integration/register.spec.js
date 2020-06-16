describe('Register a new user',()=>{
  beforeEach(()=>{
    cy.fixture('user.json').as('userData')
    cy.visit("baseUrl")
    cy.get('[class=login]').click()
  })
  
    it('Email validation incorrect', ()=>{
     cy.get('@userData').then((userData) =>{
     cy.get('#email_create').type(userData.email)
     cy.get('#SubmitCreate').click()
     cy.get('ol > li').should('be.visible')
    })
  })

  it('Register correct', ()=>{
    cy.get('@userData').then((userData) =>{
    cy.get('#email_create').type(userData.emailone)
    cy.get('#SubmitCreate').click()
    expect('Your personal information').to.exist
    cy.get('#id_gender2').check()
    cy.get('#customer_firstname').type(userData.First_name)
    cy.get('#customer_lastname').type(userData.Last_name)
    
    cy.contains('Password ').should('be.visible')
    cy.get('#passwd').type(userData.Password)

    const randomDays = Math.floor((Math.random() * 31) + 1);
    cy.wait(3000)
    cy.get('#days').eq(randomDays).click()

    const randomMonths = Math.floor((Math.random() * 12) + 1);
    cy.get('#months').eq(randomMonths).click()
   })
  })
})