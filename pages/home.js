import { Module } from "module";
import { By } from "selenium-webdriver";

class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            inviteeForm: By.id("registrar"),
            inviteeNameField: By.css("#registrar input[name='name'"),
            toggleNonRespondersVisibility: By.css(".main > div input"),
            removeButtonForInvitee: invitee => By.xpath(`//span[text() = "${invitee}"]/../button[last()]`)
        };

    }
    open() {
        this.driver.get(process.env.URL); // will be pasting a link when calling node from terminal
    }

    addInvitee(name) {
        this.driver.findElement(this.locators.inviteeNameField)
            .sendKeys(name);

        this.driver.findElement(this.locators.inviteeForm)
            .submit();
    }


    // remove invitee function
    removeInvitee(invitee) {
        this.driver.findElement(this.locators.removeButtonForInvitee(invitee))
            .click();
    }
    // clicking the checkbox to hide/show invitee's
    toggleNonRespondersVisibility() {
        this.driver.findElement(this.locators.toggleNonRespondersVisibility)
            .click();
    }

}

module.exports = HomePage;