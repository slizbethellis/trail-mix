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

router.get("/game", function(req, res) {
  var hbObject = {
    // note: this is temporary, until some logic gets set up that can relay the correct ID
    word: "McBurger"
  }
  res.render("game", hbObject);
});

router.post("/admin", function(req, res) {
  var newAdv = req.body;

  var customer = db.Customers.findall({
    where: {
      customer_id: req.params.id
    }
  });
  var custName = customer.cust_name;
  var custFolder = "../customer-images/" + custName;

  var cust_logo = req.files.cust_logo;
  var adventure_image1 = req.files.adventure_image1;
  var adventure_image2 = req.files.adventure_image2;
  var adventure_image3 = req.files.adventure_image3;

  // move and rename
  cust_logo.mv(custFolder + "/" + custName + "Logo.jpg", function(err) {
  if (err)
    return res.status(500).send(err);
  });
  adventure_image1.mv(custFolder + "/" + newAdv.adventure_name + "-image1.jpg", function(err) {
  if (err)
    return res.status(500).send(err);
  });
  adventure_image2.mv(custFolder + "/" + newAdv.adventure_name + "-image2.jpg", function(err) {
  if (err)
    return res.status(500).send(err);
  });
  adventure_image3.mv(custFolder + "/" + newAdv.adventure_name + "-image3.jpg", function(err) {
  if (err)
    return res.status(500).send(err);
  });

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
      // isLoggedIn: loggedIn(req),
      userinfo: 1 //req.session.passport
    };
    res.render("admin", hbObject);
  })

});

module.exports = router;
