import { DataTablesAndButtonStatesPage } from "../pages/data-tables-button_states-page";
import { GeneralStep } from "./general-step";
import { headings } from "../pages/test-data/data-table-data";
import { table1, table2, table3 } from "../pages/test-data/data-table-data";
import { generateRandomInputValueAllowedChars } from "../utils/utils";
import { primeButtonNames, traversalButtonStates, traversalOtherButtonStates } from "../pages/test-data/data-table-data";
import { foodListNameItems, jobListNameItems, drinkListNameItems } from "../pages/test-data/data-table-data";

export class DataTablesAndButtonStatesStep extends GeneralStep {

    openPage() {
        DataTablesAndButtonStatesPage.visit();
    }

    verifyAllHeadings() {
        DataTablesAndButtonStatesPage.getMainHeading.should('be.visible').should('have.text', 'Data, Tables & Button States');
        this.processVerifyListItemNames(headings, DataTablesAndButtonStatesPage.getHeadings);
    }

    verifyTable(tableIndex) {
        let tableData;
        if (tableIndex == 1) {
            tableData = table1;
        } else if (tableIndex == 2) {
            tableData = table2;
        } else if (tableIndex == 3) {
            tableData = table3;
        }
        for (const [rowIndex, row] of tableData.entries()) {
            for (const [collumnIndex, cellValue] of row.entries()) {
                DataTablesAndButtonStatesPage.getTableCell(tableIndex, rowIndex, collumnIndex, cellValue).should('exist');
            }
        }
    }

    fillTextArreaForm() {
        DataTablesAndButtonStatesPage.getInputFormFields.each(field => {
            let randomInput = generateRandomInputValueAllowedChars(20);
            cy.wrap(field)
                .type(randomInput)
                .should('exist')
                .should('be.visible')
                .should('contain.value', randomInput);
        })
    }

    verifyBreadcrumbItems() {
        DataTablesAndButtonStatesPage.getBreadcrumbHomeLink.should('be.visible').click();
        DataTablesAndButtonStatesPage.getBreadcrumbAboutUsLink.should('be.visible').click();
        DataTablesAndButtonStatesPage.getBreadcrumbContactUs.should('be.visible');
    }

    verifyBadgesItems() {
        DataTablesAndButtonStatesPage.getBadgesTodaysDeals.contains('5');
        DataTablesAndButtonStatesPage.getBadgesAllProducts.contains('20');
    }

    verifyPaginationItems() {
        DataTablesAndButtonStatesPage.getPaginationElements.find('li').find('a').should('have.length', 7)
            .each((a, index, arr) => {
                cy.wrap(a).should('be.visible').then(a => {
                    //skip first '<<' and last '>>'
                    if (index > 0 && index < arr.length - 1) {
                        //verify text order
                        cy.wrap(a.text()).should("equal", index.toString());
                    }
                });
            });
    }

    verifyAllPrimaryButtons() {
        primeButtonNames.forEach(buttonText => {
            const button = DataTablesAndButtonStatesPage.getPrimaryButton(buttonText);
            button.should('be.visible').should('not.be.disabled').focus().click();
            cy.url().should('include', 'http://www.webdriveruniversity.com/Data-Table/index.html#');
        });
    }

    verifyTraversalButtonStates() {
        traversalButtonStates.forEach(buttonText => {
            const button = DataTablesAndButtonStatesPage.getTraversalButtonStates(buttonText);
            button.should('be.visible').should('not.be.disabled').click();
        });
    }

    verifyTraversalOtherButtonStates() {
        traversalOtherButtonStates.forEach(buttonText => {
            const button = DataTablesAndButtonStatesPage.getTraversalOtherButtonStates(buttonText);
            button.should('be.visible').should('not.be.disabled').focus().click();
        })
    }

    verifyTraversalRandomeText() {
        DataTablesAndButtonStatesPage.getTraversalMarkedText.should('contain.text', 'sed do eiusmod tempor incididunt ut labore')
        DataTablesAndButtonStatesPage.getTraversalCiteText
            .should('have.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit');
        DataTablesAndButtonStatesPage.getTraversalFooterText
            .should('contain.text', 'volutpat consequat');
    }

    verifyListItemNames() {
        this.processVerifyListItemNames(foodListNameItems, DataTablesAndButtonStatesPage.getTraversalFoodList);
        this.processVerifyListItemNames(drinkListNameItems, DataTablesAndButtonStatesPage.getTraversalDrinksList);
        this.processVerifyListItemNames(jobListNameItems, DataTablesAndButtonStatesPage.getTraversalJobList);
    }

    processVerifyListItemNames(expectedListItemValuesArray, listItemGetter) {
        expectedListItemValuesArray.forEach((expectedValue, index) => {
            listItemGetter(index + 1)
                .should('be.visible')
                .should('have.text', expectedValue);
        });
    }
}

