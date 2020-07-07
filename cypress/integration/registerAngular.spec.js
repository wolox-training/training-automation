import { VAR, URL } from '../const/constants';
import { SELECTORS } from '../page-objects/registerAngular';
import{ haveText } from '../const/helpers';

context('Register', () => {
  beforeEach(() => {
    cy.visit(URL.index);
    cy.get(SELECTORS.idSingUp).click();
  });

  it('Sign up validate null', () => { 
    cy.get(SELECTORS.btnSingUp).should('not.have.class', 'disabled');
   });

  it('Sign up data incorrect', () => { 
    haveText(SELECTORS.name, VAR.nulo);
    haveText(SELECTORS.email, VAR.textSmall);
    haveText(SELECTORS.password, VAR.textSmall);
    cy.get(SELECTORS.btnSingUp).click();

    cy.get(SELECTORS.errorRegister).contains(VAR.emailInvalid);
    cy.get(SELECTORS.errorRegister).contains(VAR.passInvalid);
    cy.get(SELECTORS.errorRegister).contains(VAR.userInvalid);
  });

  it('Sign up', () => { 
    haveText(SELECTORS.name, VAR.name);
    haveText(SELECTORS.email, VAR.email);
    haveText(SELECTORS.password, VAR.password);

    cy.get(SELECTORS.btnSingUp).click();
    cy.get(SELECTORS.nameProfile).should('be.visible');
  });
 });
