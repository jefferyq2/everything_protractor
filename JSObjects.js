function protractorElements() {
    this.firstInput = element(by.model("first"));
    this.secondInput = element(by.model("second"));
    this.gobutton = element(by.id("gobutton"));
    this.result = element(by.css("h2[class='ng-binding']"));
    
    this.getURL = () => {
        browser.get('http://juliemr.github.io/protractor-demo/');
    }

    this.browserSleep = () => {
        browser.sleep(1000);
    }
};

module.exports = new protractorElements();
