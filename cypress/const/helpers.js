export function HAVETEXT (elemnt, text) {
  cy.get(elemnt).type(text).should('have.value', text);
}

export function RANDOM (){
  Math.floor(Math.random() * 100) + 1;
}
