describe('Actions Demo', () => {
    it('Open Posse Website', () => {
        browser.get('http://posse.com/');
        element(by.className("btn btn-default dropdown-toggle")).click();
        element(by.repeater("searchTerm in searchTerms()")).click();
        element(by.className("btn btn-default btn-primary")).click().then(() => {

            element.all(by.css("div[ng-mouseover*='onSearchResultOver']"));

            element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
            element(by.css("a[ng-href*='/place/US/Washington/Founding Farmers']")).click().then(() => {
                // browser.getTitle().then((title) => {
                //     console.log("Title of Page before switching: " + title)
                // })

                browser.getAllWindowHandles().then((handle) => {
                    browser.switchTo().window(handle[1]);
                    // browser.getTitle().then((title) => {
                    //     console.log("Title of Page after switching: " + title)
                    // })
                    element(by.className("storeAddressLink makeInstrumented")).click().then(() => {
                        browser.sleep(5000)
                    });

                });
            });
            
        })

    })
});