import { VAR, URL } from '../const/constants';
import { SELECTORS } from '../page-objects/newArticleAngular';
import{ haveText, login } from '../const/helpers';

context('New articule', () => {
  beforeEach(() => {
    cy.visit(URL.index);
    login();
    cy.get(SELECTORS.newArticule).click();
  });

   it('validate error', () => { 
     cy.get(SELECTORS.btnPublish).contains('Publish Article').click();
     
     cy.get(SELECTORS.error).contains(VAR.articuleTitleInvlid);
     cy.get(SELECTORS.error).contains(VAR.articuleBodyInvalid);
     cy.get(SELECTORS.error).contains(VAR.articuleDescripInvalid);
    });

    it('Public new articule', () => { 
      haveText(SELECTORS.title, VAR.title);
      haveText(SELECTORS.descripcion, VAR.descripcion);
      haveText(SELECTORS.body, VAR.body);

      cy.get(SELECTORS.btnPublish).contains('Publish Article').click();
      cy.wait(500);
      cy.get(SELECTORS.nameArticulo).contains(VAR.title);
    });
}); 
