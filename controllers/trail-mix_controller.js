var express = require("express");
var router = express.Router();
var path = require("path");

// Trailmix model
var db = require("../models");

// WORK IN PROGRESS
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/test.html")
});

router.get("/admin", function(req, res) {
  // this needs to go to login page if not logged in
  res.sendFile(path.join(__dirname, "../public/admin.html"), {
    isLoggedIn: !!req.userinfo,
    userinfo: req.userinfo
  });
});

router.get("/admin/:id", function(req, res) {
  db.Adventures.findAll({
    where: {
      customer_id: req.params.id
    }
  })
  .then(function(data) {
      // send all adventures for that customer_id
  })
});

router.post("/admin/:id", function(req, res) {
    var newAdv = req.body;

    db.Adventures.create({
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
      // back to /admin/:id
      res.sendFile(path.join(__dirname, "../public/admin.html"));
    })
});

module.exports = router;
