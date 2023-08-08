///<reference types="Cypress"/>

import { SelectedAndDisabledStep } from "./steps/selected&disabled-step"; 



const selectedAndDisabledStep = new SelectedAndDisabledStep(); 

describe('Selected and disabled list', () => {
    it('Check dropdown menu"', () => {
        selectedAndDisabledStep.visit();
        selectedAndDisabledStep.verifyGrapeOption();
        selectedAndDisabledStep.verifyAppleOption();
        selectedAndDisabledStep.verifyOrangeOption();
        selectedAndDisabledStep.verifyPearOption();
    })

    it('Check radio-button form', () => {
        selectedAndDisabledStep.visit();
        selectedAndDisabledStep.verifyAllRadioButtonsInForm();
    })
}) 