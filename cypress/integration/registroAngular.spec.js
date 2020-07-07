import { VAR, URL } from '../const/constants';
import { IDs } from '../page-objects/registroAngular';
import{ HAVETEXT } from '../const/helpers';

context('Register', () => {
  beforeEach(() => {
    cy.visit(URL.index);
    cy.get(IDs.idSingUp).click();
  });

  it('Sign up validate null', () => { 
    cy.get(IDs.btnSingUp).should('not.have.class', 'disabled');

   });

  it('Sign up data incorrect', () => { 
    HAVETEXT(IDs.name, VAR.nulo);
    HAVETEXT(IDs.email, VAR.textSmall);
    HAVETEXT(IDs.password, VAR.textSmall);
    cy.get(IDs.btnSingUp).click();

    cy.get(`.${IDs.errorRegister}`).contains(VAR.emailInvalid);
    cy.get(`.${IDs.errorRegister}`).contains(VAR.passInvalid);
    cy.get(`.${IDs.errorRegister}`).contains(VAR.userInvalid);
  });

  it('Sign up', () => { 
   HAVETEXT(IDs.name, VAR.name);
   HAVETEXT(IDs.email, VAR.email);
   HAVETEXT(IDs.password, VAR.password);

   cy.get(IDs.btnSingUp).click();
   cy.get(IDs.nameProfile).should('be.visible');
  });

 });
