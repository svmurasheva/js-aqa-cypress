///<reference types="Cypress"/>
import { DataTablesAndButtonStatesStep } from "./steps/data-tables-button_states";

const dataTablesAndButtonStatesStep = new DataTablesAndButtonStatesStep();

describe('Data, Tables & Button States', () => {

    it('Verify all headings on the page', () => {
        dataTablesAndButtonStatesStep.openManePage();
        dataTablesAndButtonStatesStep.openPage();
        dataTablesAndButtonStatesStep.verifyAllHeadings();
    })

    it('Verify tables data', () => {
        dataTablesAndButtonStatesStep.openPage();
        dataTablesAndButtonStatesStep.verifyTable(1);
        dataTablesAndButtonStatesStep.verifyTable(2);
        dataTablesAndButtonStatesStep.verifyTable(3);

    })

    it('Verify text-fields form by rendom value', () => {
        dataTablesAndButtonStatesStep.openPage();
        dataTablesAndButtonStatesStep.fillTextArreaForm();
    })

    it('Verify Breadcrum elements', () => {
        dataTablesAndButtonStatesStep.openPage();
        dataTablesAndButtonStatesStep.verifyBreadcrumbItems();
    })

    it('Verify Badges elements', () => {
        dataTablesAndButtonStatesStep.openPage();
        dataTablesAndButtonStatesStep.verifyBadgesItems();
    })

    it('Verify Pagination elements', () => {
        dataTablesAndButtonStatesStep.openPage();
        dataTablesAndButtonStatesStep.verifyPaginationItems();
    })
    
    it('Verify Buttons and check button states', () => {
        dataTablesAndButtonStatesStep.openPage();
        dataTablesAndButtonStatesStep.verifyAllPrimaryButtons();
        dataTablesAndButtonStatesStep.verifyTraversalButtonStates();
        dataTablesAndButtonStatesStep.verifyTraversalOtherButtonStates();
    })

    it('Verify Randome Text', () => {
        dataTablesAndButtonStatesStep.openPage();
        dataTablesAndButtonStatesStep.verifyTraversalRandomeText();
    })

    it('Verify Lists', () => {
        dataTablesAndButtonStatesStep.openPage();
        dataTablesAndButtonStatesStep.verifyListItemNames();
    })

})

