export class GeneralDataTablesAndButtonStates {
    
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html#');
        cy.url().should('include', 'Data-Table');
    }

}

