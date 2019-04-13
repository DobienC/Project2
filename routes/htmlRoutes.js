var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.render("index", {
        msg: "Welcome!!!!",
        users: dbUsers,
        msg: "Welcome!",
        examples: dbUsers,
        msg: "Welcome!"
        // examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/user/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      res.render("user", {
        user: dbUser
      });
    });
  });

  // Signup form
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  //Sign in form
  app.get("/signin", function(req, res) {
    res.render("signin");
  });

  app.get("/blog", function(req, res) {
    res.render("posts");
  });

  app.get("/test", function(req, res) {
    res.render("posts");
  });

  app.get("/blog/:id", function(req, res) {
    db.Post.findAll({
      where: {
        // eslint-disable-next-line camelcase
        post_id: req.params.id
      }
    }).then(function(hostData) {
      db.Users_games.findAll({
        where: {
          UserUserId: req.params.id
        },
        include: [
          {
            model: db.Hosted_games
          }
        ]
      }).then(function(userData) {
        console.log(userData);
        res.render("dashboard", {
          hostData: hostData,
          userData: userData
        });
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
