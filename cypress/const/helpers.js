import { VAR } from '../const/constants';
import { IDs } from '../page-objects/loginAngular';

export function haveText (elemnt, text) {
  cy.get(elemnt).type(text).should('have.value', text);
}

export function RANDOM (){
  Math.floor(Math.random() * 100) + 1;
}

export function LOGIN (){
  cy.get(IDs.idSingIn).click();

  haveText(IDs.email, VAR.emailRegister);
  haveText(IDs.password, VAR.passRegister);

  cy.get(IDs.btnSingIn).click();
  cy.get(IDs.nameProfile).should('be.visible');
}
