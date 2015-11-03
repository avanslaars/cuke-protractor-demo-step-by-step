
module.exports = function(){
  this.Given(/^I am on the home page with an empty input$/, function (done) {
    browser.get('/')
    done();
  });

  this.Given(/^I have typed my name into the input$/, function (done) {
    element(by.model('suppliedName')).sendKeys("John Smith");
    done();
  });

  this.When(/^I click on the button$/, function (done) {
    element(by.buttonText("submit")).click()
    done();
  });

  this.Then(/^The message should include my name$/, function (done) {
    //TODO: Make assertions about the content of the page
    done();
  });
}
