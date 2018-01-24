var express = require("express");
var router = express.Router();
var path = require("path");

// Trailmix model
var db = require("../models");

// returns if user is logged in
var loggedIn = function(req) {
  var isLoggedIn;
  if (req.session.passport) { isLoggedIn = true; }
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

router.get("/game", function(req, res) {
  var hbObject = {
    // note: this is temporary, until some logic gets set up that can relay the correct ID
    word: "McBurger"
  }
  res.render("game", hbObject);
});

router.post("/admin", function(req, res) {
  var newAdv = req.body;
  db.Adventures.create({
    // this might work with just a simple 'req.body'
    adventure_name: newAdv.adventure_name,
    adventure_verbiage1: newAdv.adventure_verbiage1,
    adventure_verbiage2: newAdv.adventure_verbiage2,
    adventure_verbiage3: newAdv.adventure_verbiage3,
    adventure_verbiage4: newAdv.adventure_verbiage4,
    adventure_verbiage5: newAdv.adventure_verbiage5,
    adventure_image1: newAdv.adventure_image1,
    adventure_image2: newAdv.adventure_image2,
    adventure_image3: newAdv.adventure_image3,
  }).then(function () {
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
