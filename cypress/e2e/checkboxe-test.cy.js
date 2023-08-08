///<reference types="Cypress"/>

import { CheckboxStep } from "./steps/checkboxe-step";

const checkboxStep = new CheckboxStep();

describe('Checkboxe(s)', () => {

    it('Select Checkboxe(s)', () => {
        checkboxStep.visit();
        checkboxStep.verifyAllCheckBoxes();

    })

})