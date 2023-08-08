///<reference types="Cypress"/>

import { RadioButtonStep } from "./steps/radio-button-step";

const radioButtonStep = new RadioButtonStep();

describe('Radio Button(s)', () => {

    it('Select Radio Button(s)', () => {
        radioButtonStep.visit();
        radioButtonStep.verifyAllRadioButton();
        radioButtonStep.verifyYellowRadioButtonIsNotChecked();
    })

})
