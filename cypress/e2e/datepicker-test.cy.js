///<reference types="Cypress"/>

import momentRandom from "moment-random"
import moment from "moment/moment";
import { DatepickerStep } from "./steps/datepicker-step";

const datepickerStep = new DatepickerStep();

describe('Datepicker', () => {
    it('Select current date ', () => {
        const today = moment().toDate();
        datepickerStep.openSite();
        datepickerStep.select(today);
    })

    it('Select the next day date after current date', () => {
        const tomorrow = moment().add(1, 'days').toDate();
        datepickerStep.openSite();
        datepickerStep.select(tomorrow);
    })

    it('Select the next month after current date', () => {
        const nextMonth = moment().add(1, 'month').toDate();
        datepickerStep.openSite();
        datepickerStep.select(nextMonth);
    })

    it('Select the next year after current date', () => {
        const nextYear = moment().add(1, 'year').toDate();
        datepickerStep.openSite();
        datepickerStep.select(nextYear);
    })
    
    for (let i = 0; i < 3; i++) {
        const randomDate = momentRandom();
        it(`Select random date (${i + 1}) (${randomDate.format('YYYY-MM-DD')})`, () => {
            datepickerStep.openSite();
            datepickerStep.select(randomDate.toDate());
        })
    }
})
