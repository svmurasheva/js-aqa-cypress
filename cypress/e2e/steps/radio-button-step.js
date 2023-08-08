import { RadioButtonPage } from "../pages/radio-button-page";
import { GeneralStepDropdownAndOthers } from "./general-for-dropdown-and-others";

export class RadioButtonStep extends GeneralStepDropdownAndOthers {
    
    verifyAllRadioButton() {
        RadioButtonPage.getAllRadioButtons.check('orange').should('be.checked');

    }

    verifyYellowRadioButtonIsNotChecked() {
        RadioButtonPage.getYellowCheckbox.should('not.be.checked')
    }
}