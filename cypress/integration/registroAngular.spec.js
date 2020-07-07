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
    haveText(IDs.name, VAR.nulo);
    haveText(IDs.email, VAR.textSmall);
    haveText(IDs.password, VAR.textSmall);
    cy.get(IDs.btnSingUp).click();

    cy.get(`.${IDs.errorRegister}`).contains(VAR.emailInvalid);
    cy.get(`.${IDs.errorRegister}`).contains(VAR.passInvalid);
    cy.get(`.${IDs.errorRegister}`).contains(VAR.userInvalid);
  });

  it('Sign up', () => { 
    haveText(IDs.name, VAR.name);
    haveText(IDs.email, VAR.email);
    haveText(IDs.password, VAR.password);

    cy.get(IDs.btnSingUp).click();
    cy.get(IDs.nameProfile).should('be.visible');
  });

 });
