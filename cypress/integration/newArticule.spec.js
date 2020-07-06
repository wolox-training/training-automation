import { VAR, URL } from '../const/constants';
import { IDs } from '../page-objects/newArticule';
import{ HAVETEXT, LOGIN } from '../const/helpers';

context('New articule', () => {
  beforeEach(() => {
    cy.visit(URL.index);
    LOGIN ();
    cy.get(IDs.newArticule).click();
  });

   it('validate error', () => { 
     cy.get(IDs.btnPublish).contains('Publish Article').click();
     
     cy.get(`.${IDs.error}`).contains(VAR.articuleTitleInvlid)
     cy.get(`.${IDs.error}`).contains(VAR.articuleBodyInvalid)
     cy.get(`.${IDs.error}`).contains(VAR.articuleDescripInvalid);
    });

    it('Public new articule', () => { 

      HAVETEXT(IDs.title,VAR.title);
      HAVETEXT(IDs.descripcion,VAR.descripcion);
      HAVETEXT(IDs.body,VAR.body)

      cy.get(IDs.btnPublish).contains('Publish Article').click();
      cy.wait(500);
      cy.get(`.${IDs.nameArticulo}`).contains(VAR.title);
    });
}); 
