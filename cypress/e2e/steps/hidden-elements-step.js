import { HiddenElementsPage } from "../pages/hidden-elements-page";

const hiddenElementsPage = new HiddenElementsPage();

export class HiddenElementsStep {

    visit() {
        hiddenElementsPage.visit();   
    }

    clickNotDisplayedButton() {
        HiddenElementsPage.getNotDisplayedButton.should('not.be.visible');
        HiddenElementsPage.getNotDisplayedButton.click({ force: true }).should('not.be.visible'); 
    }

    clickNotDisplayedButtonByHTML() {
        HiddenElementsPage.getNotDisplayedButton.should('not.be.visible');
        cy.get('div#zero-opacity.section-title').invoke('css', 'display', 'block');
        // HiddenElementsPage.getNotDisplayedButton.invoke('html', '<p>CLICK ME!</p>');
        HiddenElementsPage.getNotDisplayedButton.find('p').should('have.text', 'CLICK ME!').click({force: true}); 
    }

    changeDisableStatusByHTML() {
        HiddenElementsPage.getNotDisplayedButton.should('not.be.visible');
        HiddenElementsPage.getNotDisplayedButton.invoke('attr', 'style', 'display block !important');
        HiddenElementsPage.getNotDisplayedButton.click({force: true});
    }

    clickVisabilityButton() {
        HiddenElementsPage.getVisabilityButton.should('not.be.visible');
        HiddenElementsPage.getVisabilityButton.invoke('css','visibility', 'visible').click().should('be.visible');
        // HiddenElementsPage.getVisabilityButton.click({force: true}).should('be.visible');
    }

    clickZeroOpacityButton() {
        HiddenElementsPage.getZeroOpacityButton.should('exist');
        cy.get('div#zero-opacity.section-title').invoke('css', 'opacity', '1').should('be.visible');
        HiddenElementsPage.getZeroOpacityButton.invoke('css', 'opacity', '1').click().should('be.visible');
        // HiddenElementsPage.getZeroOpacityButton.click();
    }

}