import { VAR, URL } from '../const/constants';
import { IDs } from '../page-objects/loginAngular';
import{ HAVETEXT } from '../const/helpers';

context('Register', () => {
  beforeEach(() => {
    cy.visit(URL.index);
    cy.get(IDs.idSingIn).click();
  });

  it('Sign up validate null', () => { 
    cy.get(IDs.btnSingIn).should('not.have.class', 'disabled');

   });

  it('Sign up data incorrect', () => { 
    
    HAVETEXT(IDs.email,VAR.textSmall);
    HAVETEXT(IDs.password,VAR.textSmall);
    cy.get(IDs.btnSingIn).click();

    cy.get(`.${IDs.errorRegister}`).contains(VAR.error);
   
  });

  it('Sign in', () => { 
   HAVETEXT(IDs.email,VAR.emailRegister);
   HAVETEXT(IDs.password,VAR.passRegister);

   cy.get(IDs.btnSingIn).click();
   cy.get(IDs.nameProfile).should('be.visible');
  });

 });
