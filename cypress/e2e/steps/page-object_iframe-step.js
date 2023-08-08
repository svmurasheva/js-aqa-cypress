import { PageObjectTestPage } from "../pages/page-object_iframe";

export class PageObjectTestStep {

    visit(){
        PageObjectTestPage.visit;
    }

    clickFindOutMoreButton() {
        // PageObjectTestPage.getFindOutMoreButton.click();
        PageObjectTestPage.getIfrmeBody.click();
    }
    clickIframe() {
        // PageObjectTestPage.getIfrmeByTeg.should('exist').click();
        // PageObjectTestPage.getIfrmeDocument.find('button').contains('Find Out More').click();
        PageObjectTestPage.getIfrmeBody;
    }

    clickSecondIframeButton() {
        PageObjectTestPage.getSecondIframeDocument.document().then(() => {
            const iframe = doc.querySelector('iframe');
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            // const findOutMoreButton = iframeDoc.querySelector('#button-find-out-more');
            cy.wrap(iframeDoc).find('botton').contains('Find Out More').click({force: true});
        })
    }
    
    
}