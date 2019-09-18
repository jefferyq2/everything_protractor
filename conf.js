// Configuration file
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    // seleniumAddress : 'http://localhost:4444/wd/hub',
    specs: ['ElementBasics.js'],
    // Direct Connect prevents us from having to start the 
    // webdriver server in another terminal
    directConnect: true,
    // You can tell Protractor to use a certain browser
    // capabilities: {
    //     'browserName': 'firefox'
    // }
    onPrepare: () => {
        browser.driver.manage().window().maximize();

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'target/screenshots'
            })
          );
    },
    jasmineNodeOpts: {
        showColors: true
    },
    suites: {
        Smoke: ['Alerts.js', 'Dropdown.js'],
        Regression: 'ElementBasics.js'
    }
}