// *** Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;
const oidc = new ExpressOIDC({
    issuer: 'https://dev-851045-admin.oktapreview.com/oauth2/default',
    client_id: '0oado5o8navAe4p630h7',
    client_secret: '2SjkVo-ZrYEN5X-yt0KkIqyOaPVwtRhrM1z9uXvV',
    redirect_uri:  'https://shrouded-beach-16284.herokuapp.com/authorization-code/callback' /*|| 'http://localhost:8080/authorization-code/callback'*/,
    scope: 'openid profile email'
});

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static(path.join(__dirname + '/public')));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// session support is required to use ExpressOIDC
app.use(session({
    secret: 'this should be secure',
    resave: true,
    saveUninitialized: false
}));

// Routes
var routes = require("./controllers/trail-mix_controller.js");

app.use("/", routes);
//require("./routes/html-routes.js")(app);

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Syncing our sequelize models and then starting our Express app
oidc.on('ready', () => {
    db.sequelize.sync({ force: false }).then(function() {
        app.listen(PORT, function() {
            console.log("App listening on PORT " + PORT);
        });
    });
});
oidc.on('error', err => {
    console.log('Unable to configure ExpressOIDC', err);
});

module.exports = oidc;
