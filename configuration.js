
exports.config = {
    seleniumAddress : 'http://localhost:4444/wd/hub',
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
    }
}