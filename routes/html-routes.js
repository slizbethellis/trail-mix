var express = require("express");
var oidc = require("../okta.js")

app.get('/', (req, res) => {
    if (req.userinfo) {
      res.send(`Hi ${req.userinfo.name}!`);
    } else {
      res.send('Hi!');
    }
});