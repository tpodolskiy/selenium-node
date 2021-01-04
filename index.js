const selenium = require("selenium-webdriver"); // init the selenium
const By = selenium.By; // importing By. module

// importing home.js for POM
const HomePage = require('pages/home.js').default;




const driver = new selenium.Builder() // building the selenium
    .forBrowser("chrome") // selecting the browser
    .build(); // building


const homePage = new HomePage(driver);
homePage.open();




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

// locate and add invitee function

// looping through the array of invitees and calling the addInvitee() function
invitees.forEach(homePage.addInvitee, homePage);
homePage.removeInvitee("Shadd Anderson");
homePage.toggleNonRespondersVisibility();
