// First Parameter is the Test Suite Name
// Second Parameter is the Function - The Function will house all of the "it" blocks

describe('Protractor Baby Steps', function(){
	it('Open AngularJS Website', function() {
		browser.get('https://angularjs.org');
		browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
			browser.sleep(9000),
			console.log('I am the last step to execute!')
		});
	});
	
	it('Close the browser', function() {
		
	});
});