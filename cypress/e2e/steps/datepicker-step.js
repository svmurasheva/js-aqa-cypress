import { DatepickerPage } from "../pages/datepicker-page";
import "cypress-if"

export class DatepickerStep {

    openSite() {
        DatepickerPage.visit();
    }

    select(date) {

        DatepickerPage.getBody.click();
        DatepickerPage.getCalendarIcon.should('be.visible').click();
        DatepickerPage.getSwitchVisible.should('be.visible').click();
        DatepickerPage.getSwitchVisible.should('be.visible').click();

        const targetYear = date.getFullYear();
        const monthShortName = date.toLocaleString('default', { month: 'short' });
        const day = date.getDate();

        this.selectYear(targetYear);

        DatepickerPage.getCellVisible(monthShortName).should('be.visible').click();
        DatepickerPage.getCellVisible(day).should('be.visible').click();
    }

    selectYear(targetYear) {
        DatepickerPage.getCellVisible(targetYear)
            //if the target year is visible select it
            .if().then(targetYear => cy.wrap(targetYear).should('be.visible').click())
            //if not visible than need to scroll years
            .else().then(() => {
                //get the min year currently displayed
                DatepickerPage.getOldYear.invoke('text').then(oldYearText => {
                    let oldYear = Number(oldYearText);
                    //get the max year currently displayed
                    DatepickerPage.getNewYear.invoke('text').then(newYearText => {
                        let newYear = Number(newYearText);
                        //scrol left if target less
                        if (targetYear < oldYear) {
                            DatepickerPage.getPrevButton.should('be.visible').click();
                            this.selectYear(targetYear);
                        //scroll right if target higer    
                        } else if (targetYear > newYear) {
                            DatepickerPage.getNextButton.should('be.visible').click();
                            this.selectYear(targetYear);
                        } else {
                            //should never happen the target is not in the dom
                            throw new Error("Fail, year can't be found!");
                        }
                    });
                });
            })
    }
}