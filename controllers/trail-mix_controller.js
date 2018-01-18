// Trailmix model
var db = require("../models");

// WORK IN PROGRESS

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/admin", function(req, res) {
    //simplified logic - will need more
    if (authenticated) {
      res.sendFile(path.join(__dirname, "../public/login.html"));  //this may be wrong, need login with okta
    }
    else {
      res.sendFile(path.join(__dirname, "../public/admin.html"));
    }
  };

  app.get("/admin/", function(req, res) {
    db.Adventures.findAll({
      order: "name ASC"
    })
    .then(function(data) {

  }
}
