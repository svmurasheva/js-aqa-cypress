export class PageObjectTestPage {

    visit() {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html');
    }

    static get getFindOutMoreButton() {
        return cy.xpath('//button[@data-target="#myModal"]/b[contains(text(), "Find Out More!")]');
    }
    static get getIfrmeByTeg() {
        return cy.get('iframe');
    }
    static get getIfrmeDocument() {
        return cy.get('iframe').its('0.contentDocument').should('exist');
    }

    static get getIfrmeBody() {
        return this.getIfrmeDocument.its('body').should('not.be.undefined').then(cy.wrap);
    }
 
    static get getIfrmeFindOutMoreButton() {
        return this.getIfrmeBody.find('button').contains('Find Out More');
    }
    static get getSecondIframe() {
        return this.getIfrmeBody.find('iframe').eq(1);
    }

    static get getSecondIframeDocument() {
        return this.getSecondIframe.its('0.contentDocument').should('exist');
    }



}
    
    
 