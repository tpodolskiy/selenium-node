class HomePage {
    constructor(driver) {
        this.driver = driver;
    }
    open() {
        this.driver.get(process.env.URL); // will be pasting a link when calling node from terminal
    }
}

module.exports = HomePage;