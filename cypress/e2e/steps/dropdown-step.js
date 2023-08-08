import { DropdownPage } from "../pages/dropdown-page";
import { GeneralStepDropdownAndOthers } from "./general-for-dropdown-and-others";

const dropdown = new DropdownPage();

export class DropdownStep extends GeneralStepDropdownAndOthers {

    verifyAllDropdownOptions(arrayOfDropdownValues, dropdownID) {
        arrayOfDropdownValues.forEach(value => {
            let el = value.toLowerCase().trim();
            DropdownPage.getDropdownById(dropdownID).should('exist').select(el).invoke('val').should('eq', el);
        })
    }

    verifyAllDivTitle(allTitles) {
        allTitles.forEach(title => {
            DropdownPage.getDivByTitle(title).should('exist');
        })
    }
}