describe('QA Click Academy Form Website', () => {

    var selectItems = (products) => {
        element.all(by.tagName("app-card")).each((item) => {
            item.element(by.css("h4 a")).getText().then((text) => {
                if(text=="Samsung Note 8"){
                    item.element(by.css("button[class*='btn-info']")).click();
                }
            })
        })
    }

    it('Practice Excersise', () => {
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        // element(by.name("name")).sendKeys("Jane Doe");
        // element(by.css("input[name='email']")).sendKeys("johnDoe123@gmail.com");
        // element(by.id("exampleInputPassword1")).sendKeys("passw0rd!23");
        // element(by.css("input[type='checkbox']")).click();
        // element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Male")).click();
        // element.all(by.name("inlineRadioOptions")).get(2).click();
        // // Manually entering a date option
        // element(by.css("input[type='date']")).click().sendKeys("01/01/1989");
        // element(by.buttonText("Submit")).click().then(() => {
        //     element(by.css("div[class*='success']")).getText().then((text) => {
        //         console.log(text);
        //     })
        // })
        // element(by.name("name")).clear();
        // element(by.name("name")).sendKeys("E").then(() => {
        //     element(by.css("[class='alert alert-danger']")).getText().then((text) => {
        //         console.log(text);
        //     })
        // }).then(() => {
        //     browser.sleep(3000);
        // })
       
        element(by.linkText("Shop")).click();
        selectItems("Samsung Note 8")
        selectItems("iphone X")
        selectItems("Nokia Edge")
        selectItems("Blackberry")
        element(by.partialLinkText("Checkout")).getText().then((text) => {
            // var result = text.split("(");
            // var x = Number(result[1].trim().charAt(0))
            // var y = x + 1;
            // console.log(y);
            // expect(result[1].trim().charAt(0)).toBe(y);
            // console.log(text)
        })
    })
});