const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');

// session support is required to use ExpressOIDC
app.use(session({
  secret: 'this should be secure',
  resave: true,
  saveUninitialized: false
}));

const oidc = new ExpressOIDC({
  issuer: 'https://dev-851045-admin.oktapreview.com/oauth2/default',
  client_id: '0oado5o8navAe4p630h7',
  client_secret: '2SjkVo-ZrYEN5X-yt0KkIqyOaPVwtRhrM1z9uXvV',
  redirect_uri: 'http://localhost:8080/authorization-code/callback',
  scope: 'openid profile'
});

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);

module.exports = oidc;