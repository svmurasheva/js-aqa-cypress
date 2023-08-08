export class GeneralStepDropdownAndOthers {
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.url().should('include', 'Dropdown-Checkboxes-RadioButtons');
    }
}