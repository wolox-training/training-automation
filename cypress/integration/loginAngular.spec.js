import { VAR, URL } from '../const/constants';
import { SELECTORS } from '../page-objects/loginAngular';
import{ haveText, login } from '../const/helpers';

context('Register', () => {
  beforeEach(() => {
    cy.visit(URL.index);
    cy.get(SELECTORS.idSignIn).click();
  });

  it('Sign up validate null', () => { 
    cy.get(SELECTORS.btnSignIn).should('not.have.class', 'disabled');
   });

  it('Sign up data incorrect', () => { 
    haveText(SELECTORS.email, VAR.textSmall);
    haveText(SELECTORS.password, VAR.textSmall);

    cy.get(SELECTORS.btnSignIn).click();
    cy.get(SELECTORS.registerError).contains(VAR.error);
  });

  it('Sign in', () => { 
    login();
  });
 });
