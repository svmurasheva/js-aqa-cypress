///<reference types="Cypress"/>

import { users } from "./pages/test-data/users-test-data";
import { ContactUsStep } from "./steps/contact-us-step";

const contactUsStep = new ContactUsStep();
const userWithValidData = users[0];
const userEmptyEmail = users[1];
const userEmptyFirstName = users[2];
const userEmptyLastName = users[3];
const userEmptyComments = users[4];

describe('Contact US form', () => {

  it(`Open and fill in the contact US form - with test case name ${userWithValidData.testName}`, () => {
    contactUsStep.openManePage();
    contactUsStep.fillAndVerifyContactUsForm(userWithValidData);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyThatSuccessMessageIsDisplayed();
    

  })

  it(`Open and fill in the contact US form - with test case name ${userEmptyEmail.testName}`, () => {
    contactUsStep.openManePage();
    contactUsStep.fillAndVerifyContactUsForm(userEmptyEmail);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyAllFieldsAreRequaredErrorExists();
    contactUsStep.veriryInvalidEmailErrorExists();
  })
  it(`Open and fill in the contact US form - with test case name ${userEmptyFirstName.testName}`, () => {
    contactUsStep.openManePage();
    contactUsStep.fillAndVerifyContactUsForm(userEmptyFirstName);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyAllFieldsAreRequaredErrorExists();
    contactUsStep.veriryInvalidEmailErrorNotExists();


  })
  it(`Open and fill in the contact US form - with test case name ${userEmptyLastName.testName}`, () => {
    contactUsStep.openManePage();
    contactUsStep.fillAndVerifyContactUsForm(userEmptyLastName);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyAllFieldsAreRequaredErrorExists();
    contactUsStep.veriryInvalidEmailErrorNotExists();


  })
  it(`Open and fill in the contact US form - with test case name ${userEmptyComments.testName}`, () => {
    contactUsStep.openManePage();
    contactUsStep.fillAndVerifyContactUsForm(userEmptyComments);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyAllFieldsAreRequaredErrorExists();
    contactUsStep.veriryInvalidEmailErrorNotExists();

  })

})



