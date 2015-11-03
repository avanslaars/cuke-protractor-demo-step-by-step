//TODO: Start selenium - webdriver-manager start
//TODO: Run app in basic http server - http-server
//TODO: Run protractor tests - protractor protractor-conf.js
module.exports = function(){
  this.Given(/^I am on the home page with an empty input$/, function (done) {
    //TODO: Navigate to the app's home Page
    done();
  });

  this.Given(/^I have typed my name into the input$/, function (done) {
    //TODO: Type some input into the input field
    done();
  });

  this.When(/^I click on the button$/, function (done) {
    //TODO: Click the button
    done();
  });

  this.Then(/^The message should include my name$/, function (done) {
    //TODO: Make assertions about the content of the page
    done();
  });
}
