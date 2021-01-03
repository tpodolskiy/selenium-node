const selenium = require("selenium-webdriver"); // init the selenium
const By = selenium.By; // importing By. module

// importing home.js for POM
const HomePage = require('./pages/home');




const driver = new selenium.Builder() // building the selenium
    .forBrowser("chrome") // selecting the browser
    .build(); // building


const HomePage = new HomePage(driver);



const invitees = [
    'Gonzalo Torres del Fierro',
    'Shadd Anderson',
    'George Aparece',
    'Shadab Khan',
    'Joseph Michael Casey',
    'Jennifer Nordell',
    'Faisal Albinali',
    'Taron Foxworth',
    'David Riesz',
    'Maicej Torbus',
    'Martin Luckett',
    'Joel Bardsley',
    'Reuben Varzea',
    'Ken Alger',
    'Amrit Pandey',
    'Rafal Rudzinski',
    'Brian Lynch',
    'Lupe Camacho',
    'Luke Fiji',
    'Sean Christensen',
    'Philip Graf',
    'Mike Norman',
    'Michael Hulet',
    'Brent Suggs'
];

// locators object
const locators = {
    inviteeForm: By.id("registrar"),
    inviteeNameField: By.css("#registrar input[name='name'"),
    toggleNonRespondersVisibility: By.css(".main > div input"),
    removeButtonForInvitee: invitee => By.xpath(`//span[text() = "${invitee}"]/../button[last()]`)
};

// locate and add invitee function
function addInvitee(name) {
    driver.findElement(locators.inviteeNameField)
        .sendKeys(name);

    driver.findElement(locators.inviteeForm)
        .submit();
}


// remove invitee function
function removeInvitee(invitee) {
    driver.findElement(locators.removeButtonForInvitee(invitee))
        .click();
}
// clicking the checkbox to hide/show invitee's
function toggleNonRespondersVisibility() {
    driver.findElement(locators.toggleNonRespondersVisibility)
        .click();
}

// looping through the array of invitees and calling the addInvitee() function
invitees.forEach(addInvitee);
toggleNonRespondersVisibility();
removeInvitee("Shadd Anderson");
