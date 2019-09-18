// First Parameter is the Test Suite Name
// Second Parameter is the Function - The Function will house all of the "it" blocks

describe('Protractor Element Demo', () => {

    var obj = require("./JSObjects.js");
    var using = require('jasmine-data-provider');
    var d = require("./data.js");
    

    beforeEach(() => {
        obj.getURL();
    });

    using(d.DataDriveAll, (data, description) => {

        it('Testing Calculator Functionaility ' + description, () => {
            // This identifies the first edit box form field on the calc
            // SendKeys inserts a value into that form field
            obj.firstInput.sendKeys(data.firstInput);
            obj.secondInput.sendKeys(data.secondInput);
            obj.gobutton.click();
            expect(obj.result.getText()).toBe(data.result)
            obj.result.getText().then((text) => {
            console.log("Output: " + text); 
            })
            obj.browserSleep();
        });
	
        // it('Close the browser', () => {
            
        // });
    });

    afterEach(() => {
        console.log("Test is complete!")
    });
});