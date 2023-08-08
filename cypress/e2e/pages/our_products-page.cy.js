
class ProductPage {

    static get getSpecialOffers() {
        cy.get('div#container-special-offers');
    }

    static get getCameras() {
        return cy.get('div#cameras');
    }

    static get getNewLaptops() {
        return cy.get('div#new-laptops');
    }

    static get getUsedLaptops() {
        return cy.get('div#used-laptops');
    }

    static get getGameConsoles() {
        return cy.get('div#game-consoles');
    }

    static get getComponents() {
        return cy.get('div#components');
    }

    static get getDesktopSystems() {
        return cy.get('div#desktop-systems');
    }

    static get getAudio() {
        return cy.get('div#audio');
    }

    static get getProductItems() {
        return cy.xpath('//div[@data-target="#myModal"]');
    }

    static get getProductHeadings() {
        return cy.xpath('//p[@class="sub-heading"]');
    }

    static get getProductImages() {
        return cy.xpath('//div[@class="caption"]/img');
    }

    static get getSpecialOfferModalContent() {
        return cy.xpath('//div[@class="modal-content"]');
    }

    static get getSpecialOfferModalFadeIn() {
        return cy.get('div#myModal');
    }

    static get getSpecialOfferModalDismissButtons() {
        return cy.xpath('//button[@data-dismiss="modal"]');
    }
}

export { ProductPage }