import { ProductPage } from "../pages/our_products-page.cy"
import { GeneralStep } from "./general-step";

export class ProductStep extends GeneralStep {
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html');
        cy.url().should('include', 'products');
    }

    allProductItemsIsVisible() {
        ProductPage.getProductItems
            .should('have.length', 8)
            .each(element => cy.wrap(element).should('be.visible'));
    }

    allProductHeadersIsVisible() {
        ProductPage.getProductHeadings
            .should('have.length', 8)
            .each(heding => cy.wrap(heding).should('be.visible'));
    }

    allProductImagesIsVisible() {
        ProductPage.getProductImages
            .should('have.length', 8)
            .each(heding => cy.wrap(heding).should('be.visible'));
    }

    verifyProductItems() {
        ProductPage.getProductItems.each(item => {
            cy.wrap(item).click();
            ProductPage.getSpecialOfferModalContent
                .should('be.visible')
                .should('include.text', 'SPECIAL OFFER!');
            ProductPage.getSpecialOfferModalFadeIn.should('be.visible');
            ProductPage.getSpecialOfferModalFadeIn.click();
        })
    }

    verifyProductModalButtons() {
        ProductPage.getProductItems.each(item => {
            cy.wrap(item).click();
            ProductPage.getSpecialOfferModalContent.should('be.visible');
            ProductPage.getSpecialOfferModalDismissButtons.should('have.length', 3).first().click();
        });
    }




}