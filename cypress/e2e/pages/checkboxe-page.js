export class CheckboxePage {

    static get getCheckboxDiv() {
        return cy.xpath('//div[@id="checkboxes"]');
    }

    static get get1Option() {
        return cy.get("input[value='option-1']");
    }

    static get get2Option() {
        return cy.get("input[value='option-2']");
    }

    static get get3Option() {
        return cy.get("input[value='option-3']");
    }

    static get get4Option() {
        return cy.get("input[value='option-4']");
    }

    static get getAllCheckboxes() {
        return cy.get('input[type="checkbox"]');
    }

}