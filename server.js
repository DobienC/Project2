require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");
var app = express();

//Extras
var bodyParser = require("body-parser");
var flash = require("connect-flash");
var session = require("express-session");
var passport = require("passport");

//Localhost Port
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

// For Passport
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // added for error messages.
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//Models
var models = require("./models");
//Sync Database
models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

// Routes
require("./routes/auth")(app, passport);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//load passport strategies
require("./config/passport/passport")(passport, models.User);

var syncOptions = { force: false };



// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
<<<<<<< HEAD
db.sequelize.sync({ force: true }).then(function() {
=======
db.sequelize.sync(syncOptions).then(function() {
>>>>>>> master
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
