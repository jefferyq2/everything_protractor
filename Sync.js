describe('Protractor Sync steps',() => {  

    it('Open NonAngular js website Alerts',() => {
        browser.waitForAngularEnabled(false)
        browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
        element(by.css("a[href*='loadAjax']")).click();
        var EC = protractor.ExpectedConditions;

        browser.wait(EC.invisibilityOf(element(by.css("loader"))), 8000);
        element(by.id("results")).getText().then((text) => {
            console.log(text)
        })
        
    })
    
})