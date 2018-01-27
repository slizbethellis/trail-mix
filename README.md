# trail-mix
A choose-your-own adventure game about a journey to a restaurant, which rewards the user with a coupon if they choose the correct path through the game.

[Link to app's Heroku page](https://shrouded-beach-16284.herokuapp.com/)

Created by Jenn Bono, Sarah Ellis, and Mark Verbeck

#### Home Page
This page displays available promotions, and when the user clicks on an icon, it takes them to a customized version of the adventure game based on their choice.

![Home Page](/screencaps/home.png?raw=true)

#### Game Page
The game is a choose-your-own adventure game, and if the user follows the correct path, they win a coupon. Certain words are customized (à la Mad Libs) to match the client's promotion.

![Game Page](/screencaps/game.png?raw=true)

#### Login Page
Logins are handled via okta's hosted login page (a.k.a. a hosted OAuth2 service), and new client registrations are handled via CLI requests, for security.

#### Admin Page
This page allows logged in clients to submit and view their customized wording for the promotional content.

![Admin Page](/screencaps/admin.png?raw=true)
