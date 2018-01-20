var express = require("express");
var router = express.Router();
var path = require("path");

// Trailmix model
var db = require("../models");

// WORK IN PROGRESS
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/test.html"), {
    isLoggedIn: !!req.userinfo,
    userinfo: req.userinfo
  });
});

router.get("/admin", function(req, res) {
  //simplified logic - will need more
  if (authenticated) {
    res.sendFile(path.join(__dirname, "../public/login.html"));  //this may be wrong, need login with okta
  }
  else {
    res.sendFile(path.join(__dirname, "../public/admin.html"));
  }
});

router.get("/admin/", function(req, res) {
  db.Adventures.findAll({
    order: "name ASC"
  })
  .then(function(data) {

  })
});

module.exports = router;
