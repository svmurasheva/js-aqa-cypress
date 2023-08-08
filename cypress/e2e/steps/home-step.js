import { HomePage } from "../pages/home-page.cy"
import { GeneralStep } from "./general-step";


const homePage = new HomePage();


export class HomeStep extends GeneralStep {

    visit() {
        cy.visit(`http://www.webdriveruniversity.com/Page-Object-Model/index.html`);
        cy.url().should('include', 'Page-Object-Model');
    }

    verifyHeadingTitles() {
        const expectedHeadings = ['Who Are We?', 'GREAT SERVICE!', 'Why Choose Us?', 'Excellent Customer Service!'];
        for (let heading of expectedHeadings) {
            cy.contains('p.sub-heading', heading).should('have.length', 1);
        }
    }

    verifyCarouselLeftControl() {
        HomePage.getCarouselLeftControl
            .should('be.visible')
            .click();
    }

    verifyCarouselRightControl() {
        HomePage.getCarouselRightControl
            .should('be.visible')
            .click();
    }

    verifyButtonFindOutMore() {
        HomePage.getButtonFindOutMore
            .should('be.visible')
            .click();
    }

    verifyFindOutMoreModalIsVisible() {
        HomePage.getFindOutMoreModal.should('be.visible');
    }

    verifyFindOutMoreModalIsNotVisible() {
        HomePage.getFindOutMoreModal.should('not.be.visible');
    }

    verifyModalButtonClose() {
        HomePage.getModalButtonClose
            .should('be.visible')
            .click();
    }

    verifyModalButtonFindOutMore() {
        HomePage.getModalButtonFindOutMore
            .should('be.visible')
            .click();
    }

    verifyModalButtonX() {
        HomePage.getModalButtonX
            .should('be.visible')
            .click();

    }


}