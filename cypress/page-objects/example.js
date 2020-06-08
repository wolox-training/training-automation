export default class Example {
  // constructor() {}

  navigate(url) {
    cy.visit(url);
    console.log('hola Yes');
  }
}
