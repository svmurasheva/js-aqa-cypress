import { SelectedAndDisabledPage } from "../pages/selected&disabled-page";
import { GeneralStepDropdownAndOthers } from "./general-for-dropdown-and-others";

export class SelectedAndDisabledStep extends GeneralStepDropdownAndOthers {
    
    verifyAppleOption() {
        SelectedAndDisabledPage.getDropdownFruitMenu.should('be.visible').select('apple');
        SelectedAndDisabledPage.getAppleOption.should('be.visible').should('be.selected');
    }

    verifyGrapeOption() {
        SelectedAndDisabledPage.getGrapeOption.should('be.visible').should('be.selected');
    } 
    
    verifyPearOption() {
        SelectedAndDisabledPage.getDropdownFruitMenu.should('be.visible').select('pear');
        SelectedAndDisabledPage.getPearOption.should('be.visible').should('be.selected');
    }

    verifyOrangeOption() {
        SelectedAndDisabledPage.getOrangeOption.should('be.disabled').should('not.be.selected'); 
    }

    verifyAllRadioButtonsInForm() {
        SelectedAndDisabledPage.getRadioButtonsForm.check('lettuce').should('be.checked');
        SelectedAndDisabledPage.getCabbageRadioButton.should('be.disabled');
        SelectedAndDisabledPage.getRadioButtonsForm.check('pumpkin').should('be.checked');
    }
}