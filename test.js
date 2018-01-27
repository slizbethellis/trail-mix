var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("Trail-mix", function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages

  this.timeout(30000);
  it("should send user to the home page", function(done) {
    // ID for the login button.
    Nightmare({ show: true })
      .goto("https://shrouded-beach-16284.herokuapp.com/")
      // Click the catalog link
      .click("a[href='/']")
      // Evaluate the title
      .evaluate(function() {
        return document.title;
      })
      // Asset the title is as expected
      .then(function(title) {
        expect(title).to.equal("Trail Mix");
        done();
      });
  });

  it("should throw an error for fun", function() {
    throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
  });
});
