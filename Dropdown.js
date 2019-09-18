describe('Chain Locatorsd Demo', () => {

    let calc = (a, b, c) => {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);

        element.all(by.tagName("option")).each((item) => {
            item.getAttribute("value").then((values) => {
                if(values == c){
                    item.click();
                }
            })
        })

        element(by.id("gobutton")).click();
    }

    // Another way to click on the option dropdown menu is:
    // element(by.model("option")).element(by.css("option:ntn-child("4")).click();

    it('Open Calculator Website', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');
        // Whenever you see ng-repeat - always use repeater locator
        // element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then((text) => {
        //     console.log(text)
        // })
        calc(2,3,"MULTIPLICATION");
        calc(4,3,"SUBTRACTION");
        calc(10,30,"MODULO");
        calc(15,3,"DIVISION");
        calc(15,15,"ADDITION");


        // Used to count the number of times or rows the element returns
        // element.all(by.repeater("result in memory")).count().then((text) => {
        //     console.log(text);
        // })

        // Used to grab multiple rows 
        element.all(by.repeater("result in memory")).each((item) => {
            item.element(by.css("td:nth-child(3)")).getText().then((text) => {
                console.log(text)
             });
        })
    })


});