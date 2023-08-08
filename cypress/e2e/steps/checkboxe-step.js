import { CheckboxePage } from "../pages/checkboxe-page";
import { GeneralStepDropdownAndOthers } from "./general-for-dropdown-and-others";

export class CheckboxStep extends GeneralStepDropdownAndOthers {

    verifyAllCheckBoxes() {
        CheckboxePage.getAllCheckboxes.each($el => {
            let el = $el
            cy.wrap(el).check().should('be.checked');
        }).check().should('be.checked');
    }

}