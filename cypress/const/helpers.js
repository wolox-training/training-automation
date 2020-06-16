export function HAVETEXT (elemnt, text) {
cy.get(`#${elemnt}`).type(text).should('have.value', text);
}
