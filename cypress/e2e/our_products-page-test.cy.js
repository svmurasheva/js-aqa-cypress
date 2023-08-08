///<reference types="Cypress"/>

import { ProductStep } from "./steps/our_products-step";

const productStep = new ProductStep();

describe('Our Products page elements', () => {
    it('All product items are visible', () => {
        productStep.openManePage();
        productStep.visit();
        productStep.allProductItemsIsVisible();
    })
    it('All items contain headings', () => {
        productStep.openManePage();
        productStep.visit();
        productStep.allProductHeadersIsVisible();
    })
    it('All items contain images', () => {
        productStep.openManePage();
        productStep.visit();
        productStep.allProductImagesIsVisible();
    })
    it('All product modals are visible ', () => {
        productStep.openManePage();
        productStep.visit();
        productStep.verifyProductItems();

    })
    it('Verify product modal buttons ', () => {
        productStep.openManePage();
        productStep.visit();
        productStep.verifyProductModalButtons();
    })
})
