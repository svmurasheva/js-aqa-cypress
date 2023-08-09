export class DatepickerPage {
 
    static visit() {
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html');
    }

    static get getDatepicker() {
        return cy.get('div#datepicker');
    }

    static get getFormControl() {
        return cy.get('input.form-control');
    }

   static get getBody() {
        return cy.get('body');
    }

    static get getCalendarIcon() {
        return cy.get('span.input-group-addon');
    }

    static get getSwitchVisible() {
        return cy.xpath('//div[not(contains(@style,"display: none"))]/table/thead/tr/th[@class="datepicker-switch"]');
    }

    static getCellVisible(value) {
        return cy.get(`div[style="display: block;"] table tbody tr td`).contains(value);
    }

    static get getPrevButton() {
        return cy.xpath('//div[not(contains(@style,"display: none"))]/table//tr/th[@class="prev"]');
    }

    static get getNextButton() {
        return cy.xpath('//div[not(contains(@style,"display: none"))]/table//tr/th[@class="next"]');
    }

    static get getOldYear() {
        return cy.xpath('//tbody//span[@class="year old"]');
    }
    static get getNewYear() {
        return cy.xpath('//tbody//span[@class="year new"]');
    }



}