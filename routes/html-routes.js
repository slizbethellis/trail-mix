module.exports = function(app) {
  app.get('/', function(req, res) {
    res.send("Hello World");
     // isLoggedIn: !!req.userinfo,
     // userinfo: req.userinfo
    //});
  });
};
