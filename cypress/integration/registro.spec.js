import { VAR, URL } from '../const/constants';
import { IDs } from '../page-objects/registro';
import {HAVETEXT} from '../const/helpers';

context('Register', () => {
  beforeEach(() => {
    cy.visit(URL.index);
    cy.get(`.${IDs.idSingIn}`).click();
  });

  it('Sign in', () => {
    
    cy.get(`#${IDs.emailCreate}`)
      .type(VAR.textSmall)
      .should('have.value', VAR.textSmall)
      .blur()
      .parent()
      .should('have.class', 'form-error');

    cy.get(`#${IDs.SubmitCreate}`).click();

    cy.get(`#${IDs.createAccountError}`).should('be.visible').contains('li', VAR.emailError);
  });

  it('Register ok', () => {
    cy.get(`#${IDs.emailCreate}`)
      .type(VAR.email)
      .should('have.value', VAR.email)
      .blur()
      .parent()
      .should('have.class', 'form-ok');

    cy.get(`#${IDs.SubmitCreate}`).click();

    HAVETEXT(IDs.customerFirstNamee,VAR.textSmall);

    cy.get('#id_state').select('Alabama');

    cy.get(`#${IDs.mrs}`).check();

    HAVETEXT(IDs.customerLastName,VAR.textSmall);
    HAVETEXT(IDs.password,VAR.textSmall);
    HAVETEXT(IDs.address,VAR.textSmall);
    HAVETEXT(IDs.city,VAR.textSmall);

    cy.get("[name=company]").type("Wolox");
    cy.wait(10000);
    cy.get(".page-subheading").contains("Your personal information");
  });
});
