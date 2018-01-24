// *** Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");
const fileUpload = require('express-fileupload');
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;
const oidc = new ExpressOIDC({
    issuer: 'https://dev-851045-admin.oktapreview.com/oauth2/default',
    client_id: '0oadr0d9mxDyWPDCt0h7',
    client_secret: 'qgvteql3tVXdUYwWi4aDCnYy1qwDNTTqPs-L3F5_',
    redirect_uri:  'https://shrouded-beach-16284.herokuapp.com/authorization-code/callback' /*|| 'http://localhost:8080/authorization-code/callback'*/,
    scope: 'openid profile email',
    routes: {
        login: {
            viewHandler: (req, res) => {
                // Render your custom login page, you must create this view for your application and use the Okta Sign-In Widget
                res.render('custom-login', {
                    csrfToken: req.csrfToken(),
                    myClientId: '0oadr0d9mxDyWPDCt0h7',
                    baseUrl: 'https://dev-851045-admin.oktapreview.com/oauth2/default'
                });
            }
        }
    }
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
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// session support is required to use ExpressOIDC
app.use(session({
    secret: 'this should be secure',
    resave: true,
    saveUninitialized: false
}));

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);

// Routes
var routes = require("./controllers/trail-mix_controller.js");

app.use("/", routes);

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

//Set express to use fileUpload
app.use(fileUpload());

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

 oidc;
