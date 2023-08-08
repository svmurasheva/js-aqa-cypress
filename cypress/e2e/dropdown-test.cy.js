///<reference types="Cypress"/>

import { DropdownStep } from "./steps/dropdown-step";
import { dropdown1 } from "./pages/test-data/dropdowns-values";
import { dropdown2 } from "./pages/test-data/dropdowns-values";
import { dropdown3 } from "./pages/test-data/dropdowns-values";
import { allTitles } from "./pages/test-data/dropdowns-values";

const dropdownStep = new DropdownStep();

describe('Dropdown', () => {
    it('Select dropdown', () => {
        dropdownStep.visit();
        dropdownStep.verifyAllDivTitle(allTitles);
        dropdownStep.verifyAllDropdownOptions(dropdown1, 1);
        dropdownStep.verifyAllDropdownOptions(dropdown2, 2);
        dropdownStep.verifyAllDropdownOptions(dropdown3, 3);
    })

})





        










// cy.get('body').document(doc => {
        //     const test = doc.querySelector('#button2')
        //})