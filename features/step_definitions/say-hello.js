
module.exports = function(){
  this.Given(/^I am on the home page with an empty input$/, function (done) {
    // Write code here that turns the phrase above into concrete actions
    done();
  });

  this.Given(/^I have typed my name into the input$/, function (done) {
    // Write code here that turns the phrase above into concrete actions
    done();
  });

  this.When(/^I click on the button$/, function (done) {
    // Write code here that turns the phrase above into concrete actions
    done.pending();
  });

  this.Then(/^The message should include my name$/, function (done) {
    // Write code here that turns the phrase above into concrete actions
    done.pending();
  });
}
