describe('Protected Alert Steps', () => {

    it('Open Calculator Website', () => {
        // When you want to work on a website that is Non-Angular
        browser.waitForAngularEnabled(false)
        browser.get('http://www.qaclickacademy.com/practice.php');
        element(by.id("confirmbtn")).click();
        browser.switchTo().alert().accept().then(() => {
            browser.sleep(5000);
        })
        
    })


});