export class HiddenElementsPage {

 visit() {
    cy.visit('http://www.webdriveruniversity.com/Hidden-Elements/index.html');
}

static get getNotDisplayedButton() {
    return cy.get('#button1');
}

static get getVisabilityButton() {
    return cy.get('#button2');
}

static get getZeroOpacityButton() {
    return cy.get('#button3');
}
static get getModalClick() {
    return cy.get('#myModalClick');
}

static get getModaJSlClick() {
    return cy.get('#myModalJSClick');
}

static get getModalMoveClick() {
    return cy.get('#myModalMoveClick');
}

}