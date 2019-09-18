describe('Protected Alert Steps', () => {

    it('Open Calculator Website', () => {
        // When you want to work on a website that is Non-Angular
        browser.waitForAngularEnabled(false)
        browser.get('http://www.qaclickacademy.com/practice.php');
        browser.switchTo().frame("courses-iframe");
        element(by.css("a[href*='sign_in']")).getText().then((text) => {
            console.log(text)
        })
        
    })


});