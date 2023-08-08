
export class AccordionPage {

    static get getAccordionHeader() {
        return cy.xpath('//div[@id="main-header"]/h1');
    }

    static get getAccordionManualTestingButton() {
        return cy.get('button#manual-testing-accordion');
    }

    static get getManualTestingText() {
        return cy.contains('div#manual-testing-description > p', 'Manual testing however is on the decline');
    }

    static get getAccordionCucumberBDDButton() {
        return cy.get('button#cucumber-accordion');
    }

    static get getCucumberBDDText() {
        return cy.contains('div#cucumber-testing-description > p','Cucumber (BDD) simplifies the requirement capturing process.');
    }

    static get getAccordionAutomationTestingButton() {
        return cy.get('button#automation-accordion');
    }

    static get getAutomationTestingText() {
        return cy.contains('div#automation-testing-description > p', 'Automation test engineers are in great demand ');
    }

    static get getAccordionKeepClickingButton() {
        return cy.get('button#click-accordion');
    }

    static get getKeepClickingText() {
        // return cy.contains('div#timeout', 'This text has appeared after 5 seconds!', { timeout: 10000 });
        return cy.get('div#timeout', {timeout:10000});
    }

    static get getAccordionDivTextAppearBox() {
        return cy.get('div#text-appear-box');
    }

    static get getNotHiddenElementBeforeLoading() {
        return cy.contains('p#hidden-text','LOADING.. PLEASE WAIT..');
    }
    
    static get getHiddenElementAfterLoading() {
        // return cy.contains ('p#hidden-text', 'LOADING COMPLETE.', { timeout: 10000 } );
        return cy.get('p#hidden-text');
    }

}
