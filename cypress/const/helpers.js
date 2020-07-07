import { VAR } from '../const/constants';
import { SELECTORS } from '../page-objects/loginAngular';

export function haveText (element, text) {
  cy.get(element).type(text).should('have.value', text);
}

export function login () {
  cy.get(SELECTORS.idSignIn.click());

  haveText(SELECTORS.email, VAR.emailRegister);
  haveText(SELECTORS.password, VAR.passRegister);

  cy.get(SELECTORS.btnSignIn).click();
  cy.get(SELECTORS.profileName).should('be.visible');
}
