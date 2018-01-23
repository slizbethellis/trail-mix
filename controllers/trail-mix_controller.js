var express = require("express");
var router = express.Router();
var path = require("path");

// Trailmix model
var db = require("../models");

// WORK IN PROGRESS
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/test.html"));
});

router.get("/admin", function(req, res) {
  // this needs to go to login page if not logged in
  var isLoggedIn;
  var userinfo;
  if (req.session.passport) {
    isLoggedIn = true;
  }
  else {
    isLoggedIn = false;
  }
  db.Customer.findOne({
    include: [db.Adventure],
    where: {
      cust_email: req.session.passport.user.email
    }
  }).then(function(dbPost) {
    // send all adventures for that customer_id
    var hbObject = {
      Customer: dbPost,
      isLoggedIn: isLoggedIn,
      userinfo: req.session.passport
    };
    res.render("admin", hbObject);
  })

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
    let adventure_image1 = req.files.adventure_image1;
    let adventure_image2 = req.files.adventure_image2;
    let adventure_image3 = req.files.adventure_image3;

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
      adventure_name: newAdv.adventure_name,
      adventure_verbiage1: newAdv.adventure_verbiage1,
      adventure_verbiage2: newAdv.adventure_verbiage2,
      adventure_verbiage3: newAdv.adventure_verbiage3,
      adventure_verbiage4: newAdv.adventure_verbiage4,
      adventure_verbiage5: newAdv.adventure_verbiage5,
      adventure_image1: custFolder + "/" + newAdv.adventure_name + "-image1.jpg",
      adventure_image2: custFolder + "/" + newAdv.adventure_name + "-image2.jpg",
      adventure_image3: custFolder + "/" + newAdv.adventure_name + "-image3.jpg",
    }).then(function () {
      // back to /admin/:id
      res.render("admin", hbObject);
    })
});

module.exports = router;
