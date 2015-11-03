var expect = require('chai').expect
var writeScreenShot = require('../utils').writeScreenShot

module.exports = function(){

  this.After(function (scenario, done) {
    if (scenario.isFailed()) {
      browser.takeScreenshot().then(function (png) {
        writeScreenShot(png,'sample.png')
        done()
      });
    }else{
      done()
    }
  });

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
    element(by.className('message')).getText().then(function(text){
      expect(text).to.match(/Smith/)
      done();
    });
  });

  this.Then(/^The message should prompt me for input$/, function (done) {
    element(by.className('message')).getText().then(function(text){
      expect(text).to.equal("Please supply a name")
      done();
    })
  });
}
