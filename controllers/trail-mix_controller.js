var express = require("express");
var router = express.Router();
var path = require("path");

// Trailmix model
var db = require("../models");

// returns if user is logged in
var loggedIn = function(req) {
  var isLoggedIn;
  if (req.userinfo) { isLoggedIn = true; }
  else { isLoggedIn = false; }

  return isLoggedIn;
};

// WORK IN PROGRESS
router.get("/", function(req, res) {
  res.render("index", {isLoggedIn: loggedIn(req)});
});

router.get("/admin", function(req, res) {
  db.Customer.findOne({
    include: [db.Adventure],
    where: {
      cust_email: req.session.passport.user.email
    }
  }).then(function(dbPost) {
    // send all adventures for that customer_id
    var hbObject = {
      Customer: dbPost,
      isLoggedIn: loggedIn(req),
      userinfo: req.session.passport
    };
    res.render("admin", hbObject);
  })

});

router.get("/game/:rest", function(req, res) {
  db.Adventure.findOne({
    where: {
      adventure_name: req.params.rest
    }
  }).then(function(dbPost) {
    var hbObject = {
      Adventure: dbPost,
      Customer: req.params.rest
    };
    res.render("game", hbObject);
  })
});

router.post("/api/admin", function(req, res) {
  db.Adventure.create({
    adventure_name: req.body.adventure_name,
    adventure_verbiage1: req.body.adventure_verbiage1,
    adventure_verbiage2: req.body.adventure_verbiage2,
    adventure_verbiage3: req.body.adventure_verbiage3,
    adventure_verbiage4: req.body.adventure_verbiage4,
    adventure_verbiage5: req.body.adventure_verbiage5
  }).then(function (dbPost) {
    // back to /admin/
    var hbObject = {
      Adventure: dbPost,
      isLoggedIn: loggedIn(req),
      userinfo: req.session.passport
    };
    res.render("admin", hbObject);
  })

});

module.exports = router;
