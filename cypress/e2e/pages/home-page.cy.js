
class HomePage {

  static get getCarouselLeftControl() {
    return cy.get('a.left.carousel-control');
  }

  static get getCarouselRightControl() {
    return cy.get('a.right.carousel-control');
  }

  static get getImages() {
    return cy.get('img.slide-image');
  }

  static get getButtonFindOutMore() {
    return cy.get('button#button-find-out-more');
  }

  static get getFindOutMoreModal() {
    return cy.get('div.modal-content');
  }

  static get getModalButtonClose() {
    return cy.xpath('//button[contains(text(), "Close")]');
  }

  static get getModalButtonFindOutMore() {
    return cy.xpath('//button[contains(text(), "Find Out More")]');
  }

  static get getModalButtonX() {
    return cy.xpath('//button[@class="close"]');
  }
}

export {HomePage}



