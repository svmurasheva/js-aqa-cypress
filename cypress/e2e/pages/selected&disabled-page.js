export class SelectedAndDisabledPage {
    
    static get getDropdownFruitMenu() {
        return cy.xpath('//div[@class="thumbnail"]/*[contains(text(), "Selected & Disabled")]/..//select[@id="fruit-selects"]');
    }

    static get getAppleOption() {
        return cy.get('option[value="apple"]');

    }

    static get getOrangeOption() {
        return cy.get('option[value="orange"]');

    }

    static get getPearOption() {
        return cy.get('option[value="pear"]');

    }

    static get getGrapeOption() {
        return cy.get('option[value="grape"]');

    }

    static get getRadioButtonsForm() {
        return cy.xpath('//form[@id="radio-buttons-selected-disabled"]//input[@type="radio"]');
    }

    static get getLettuceRadioButton() {
        return cy.get('input[value="lettuce"]');
    } 

    static get getCabbageRadioButton() {
        return cy.get('input[value="cabbage"]');
    } 

    static get getPumpkinRadioButton() {
        return cy.get('input[value="pumpkin"]');
    } 

}