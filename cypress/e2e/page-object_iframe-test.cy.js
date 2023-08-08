///<reference types="Cypress"/>

import { PageObjectTestStep } from "./steps/page-object_iframe-step";

const pageObjectTestStep = new PageObjectTestStep();

describe('Page Object Test', () => {

    it('Click on the Find Out More button', () => {
        pageObjectTestStep.visit();
        // pageObjectTestStep.clickIframe();
        // pageObjectTestStep.clickFindOutMoreButton();
        pageObjectTestStep.clickSecondIframeButton();





    })
})

