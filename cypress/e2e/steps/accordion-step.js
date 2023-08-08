
import { AccordionPage } from "../pages/accordion-page";

export class AccordionStep {

visit() {
    cy.visit('http://www.webdriveruniversity.com/Accordion/index.html');
    cy.url().should('include', 'Accordion');
}

accordionHeaderIsVisible() {
    AccordionPage.getAccordionHeader
    .should('be.visible')
    .should('have.text', 'Click on One of the Accordian Items Below!');
}

verifyManualTestingButton() {
    AccordionPage.getAccordionManualTestingButton.should('be.visible').click();
    AccordionPage.getManualTestingText.should('exist').should('be.visible');
}

verifyCucumberBDDButton() {
    AccordionPage.getAccordionCucumberBDDButton.should('be.visible').click();
    AccordionPage.getCucumberBDDText.should('exist').should('be.visible');
}

verifyAutomationTestingButton() {
    AccordionPage.getAccordionAutomationTestingButton.should('be.visible').click();
    AccordionPage.getAutomationTestingText.should('exist').should('be.visible');
}

veifyKeepClickingButton() {
    AccordionPage.getNotHiddenElementBeforeLoading.should('be.visible');
    AccordionPage.getKeepClickingText.should('exist').should('be.visible');
    AccordionPage.getAccordionKeepClickingButton.should('be.visible').click();
    AccordionPage.getKeepClickingText.should('exist').should('be.visible');

}
verifyLoadingText() {
    
    AccordionPage.getHiddenElementAfterLoading.should('exist').should('be.visible');
}



}
