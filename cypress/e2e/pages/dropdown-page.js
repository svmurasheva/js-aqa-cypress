
export class DropdownPage {
    
    static getDivByTitle(title) {
        return cy.xpath(`//div[@class="thumbnail"]/*[contains(text(), "${title}")]`);
    }

    static getDropdownById(id) {
        return cy.xpath(`//div[@class="thumbnail"]/*[contains(text(), "Dropdown Menu(s)")]/..//select[@id="dropdowm-menu-${id}"]`);
    }

    

    

    

    

}