import { VAR, URL } from '../const/constants';
import { IDs } from '../page-objects/newArticule';
import{ haveText, LOGIN } from '../const/helpers';

context('New articule', () => {
  beforeEach(() => {
    cy.visit(URL.index);
    LOGIN();
    cy.get(IDs.newArticule).click();
  });

   it('validate error', () => { 
     cy.get(IDs.btnPublish).contains('Publish Article').click();
     
     cy.get(`.${IDs.error}`).contains(VAR.articuleTitleInvlid)
     cy.get(`.${IDs.error}`).contains(VAR.articuleBodyInvalid)
     cy.get(`.${IDs.error}`).contains(VAR.articuleDescripInvalid);
    });

    it('Public new articule', () => { 

      haveText(IDs.title, VAR.title);
      haveText(IDs.descripcion, VAR.descripcion);
      haveText(IDs.body, VAR.body)

      cy.get(IDs.btnPublish).contains('Publish Article').click();
      cy.wait(500);
      cy.get(`.${IDs.nameArticulo}`).contains(VAR.title);
    });
}); 
