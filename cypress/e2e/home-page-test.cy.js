///<reference types="Cypress"/>

import { HomeStep } from "./steps/home-step";

const homeStep = new HomeStep();

describe('Home page elements', () => {
    it('title contain heading titles', () => {
        homeStep.openManePage();
        homeStep.visit();
        homeStep.verifyHeadingTitles();
    })
    it('The carousel-button left is clicable', () => {
        homeStep.openManePage();
        homeStep.visit();
        homeStep.verifyCarouselLeftControl();
    })
    it('The carousel-button right is clicable', () => {
        homeStep.openManePage();
        homeStep.visit();
        homeStep.verifyCarouselRightControl();

    })
    it('The button "Find Out More!" is visible & clicable', () => {
        homeStep.openManePage();
        homeStep.visit();
        homeStep.verifyButtonFindOutMore();

    })
    it('"Find Out More" modal is visible', () => {
        homeStep.openManePage();
        homeStep.visit();
        homeStep.verifyButtonFindOutMore();
        homeStep.verifyFindOutMoreModalIsVisible();
    })
    it('Make sure that"Find Out More","Close","X" modal buttons is working', () => {
        homeStep.openManePage();
        homeStep.visit();
        homeStep.verifyButtonFindOutMore();

        //Close button    
        homeStep.verifyFindOutMoreModalIsVisible();
        homeStep.verifyModalButtonClose();
        homeStep.verifyFindOutMoreModalIsNotVisible();

        //Find Out More button
        homeStep.verifyButtonFindOutMore();
        homeStep.verifyModalButtonFindOutMore();
        homeStep.verifyFindOutMoreModalIsNotVisible();

        //X button
        homeStep.verifyButtonFindOutMore();
        homeStep.verifyModalButtonX();
        homeStep.verifyFindOutMoreModalIsNotVisible();
    })
})