
export class RadioButtonPage {
    
    static get radioButtonsForm() {
        return cy.get('form[id=radio-buttons');
    }

    static get getAllRadioButtons() {
        return cy.xpath('//form[@id="radio-buttons"]//input[@type="radio"]');
    }

    static get getYellowCheckbox() {
        return cy.get('input[value="yellow"]');
    }

    static get getOrangeCheckbox() {
        return cy.get('input[value="orange"]');
    }
}