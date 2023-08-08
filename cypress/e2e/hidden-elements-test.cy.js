///<reference types="Cypress"/>

import { HiddenElementsStep } from "./steps/hidden-elements-step";

const hiddenElementsStep = new HiddenElementsStep();

describe('Hidden elements', () => {
    it('Click on the not Displayed Button', () => {
        hiddenElementsStep.visit();
        cy.once('uncaught:exception', () => false);
        hiddenElementsStep.clickNotDisplayedButton();
        
    })

    it('Click on the not Visability Button', () => {
        hiddenElementsStep.visit();
        cy.once('uncaught:exception', () => false);
        hiddenElementsStep.clickVisabilityButton();
    })

    it('Click on the Zero Opacity Button', () => {
        hiddenElementsStep.visit();
        cy.once('uncaught:exception', () => false);
        hiddenElementsStep.clickZeroOpacityButton();
    })
    
})










//  hiddenElementsStep.clickNotDisplayedButtonByHTML();
        // cy.get('div.thumbnail').eq(2).click(40, 140);

