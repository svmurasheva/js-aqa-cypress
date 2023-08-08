export class DataTablesAndButtonStatesPage {

    static visit() {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html#');
        cy.url().should('include', 'Data-Table');
    }

    static get getMainHeading() {
        return cy.xpath('//div[@id="main-header"]/h1');
    }

    static getHeadings(itemIndex) {
        return cy.xpath(`(//div[@class="thumbnail"]/h2)[${itemIndex}]`);
    }

    static getTableCell(tableIndex, rowIndex, columnIndex, cellValue) {
        if (tableIndex === 3) {
            return cy.xpath(`
            (//table[@class="table table-light traversal-table"]//tr)[${rowIndex + 1}]/th[${columnIndex + 1}][contains(text(), "${cellValue}")] |
            (//table[@class="table table-light traversal-table"]//tr)[${rowIndex + 1}]/*[${columnIndex + 1}][contains(text(), "${cellValue}")]`)
        } else {
            return cy.xpath(`
            //table[@id="t0${tableIndex}"]//tr[${rowIndex + 1}]//th[${columnIndex + 1}][contains(text(), "${cellValue}")] |
            //table[@id="t0${tableIndex}"]//tr[${rowIndex + 1}]//td[${columnIndex + 1}][contains(text(), "${cellValue}")]`);
        }
    }

    static get getInputFormFields() {
        return cy.xpath('//form[@id="form-textfield"]//input| //form[@id="form-textfield"]//textarea');
    }

    static get getFirstNameTextArrea() {
        return cy.xpath('//input[@name="firstname"]');
    }

    static get getLastNameTextArrea() {
        return cy.xpath('//input[@name="lastname"]');
    }

    static get getInputTextArrea() {
        return cy.xpath('//textarea[@rows="10"]');
    }

    static get getBreadcrumbHomeLink() {
        return cy.xpath('//li[@class="breadcrumb-item"]/a[contains(text(), "Home")]');
    }

    static get getBreadcrumbAboutUsLink() {
        return cy.xpath('//li[@class="breadcrumb-item"]/a[contains(text(), "About Us")]');
    }

    static get getBreadcrumbContactUs() {
        return cy.xpath('//li[@class="breadcrumb-item active"][contains(text(), "Contact Us")]');
    }

    static get getBadgesTodaysDeals() {
        return cy.xpath(`//li[@class="list-group-item badge-text"][contains(text(), "Today's Deals")]`);
    }

    static get getBadgesAllProducts() {
        return cy.xpath(`//li[@class="list-group-item badge-text"][contains(text(), "All Products")]`);
    }

    static get getPaginationElements() {
        return cy.xpath('//ul[@class="pagination traversal-pagination"]');
    }

    static getPrimaryButton(buttonName) {
        return cy.xpath(`
            //div[@class="traversal-buttons"]/*[contains(text(), "${buttonName}")] |
            //div[@class="traversal-buttons"]/*[@value="${buttonName}"]`);
    }

    static getTraversalButtonStates(buttonName) {
        return cy.xpath(`//div[@class="traversal-button-states"]/*[contains(text(), "${buttonName}")]`);
    }

    static getTraversalOtherButtonStates(buttonName) {
        return cy.xpath(`//div[@class="btn-group btn-group-toggle"]/*[contains(text(), "${buttonName}")]`);
    }

    static get getTraversalMarkedText() {
        return cy.xpath('//div[@class="traversal-marked-text"]/p/mark[@class="traversal-mark"]');
    }

    static get getTraversalCiteText() {
        return cy.xpath('//div[@class="traversal-cite-text"]/blockquote/p');
    }

    static get getTraversalFooterText() {
        return cy.xpath('//div[@class="traversal-cite-text"]/blockquote/footer');
    }

    static getTraversalDrinksList(itemIndex) {
        return cy.xpath(`//ul[@class="traversal-drinks-list"]//*[${itemIndex}]`);
    }

    static getTraversalFoodList(itemIndex) {
        return cy.xpath(`//ul[@class="traversal-food-list"]//*[${itemIndex}]`);
    }

    static getTraversalJobList(itemIndex) {
        return cy.xpath(`(//ul[@class="traversal-job-list"]//li)[${itemIndex}]`);
    }
}