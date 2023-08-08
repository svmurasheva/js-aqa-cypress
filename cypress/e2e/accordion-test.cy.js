///<reference types="Cypress"/>

import { AccordionStep } from "./steps/accordion-step";

const accordionStep = new AccordionStep();

describe('Accordion items', () => {

    it('Open each accordion item and check containt of elements', () => {
        accordionStep.visit();
        accordionStep.accordionHeaderIsVisible();
        accordionStep.verifyManualTestingButton();
        accordionStep.verifyCucumberBDDButton();
        accordionStep.verifyAutomationTestingButton();
        accordionStep.veifyKeepClickingButton();
        accordionStep.verifyLoadingText();



    })
})

