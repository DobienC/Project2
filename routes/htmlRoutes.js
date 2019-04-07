var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.render("index", {
        msg: "Welcome!!!!",
        users: dbUsers,
<<<<<<< HEAD
        msg: "Welcome!",
        examples: dbUsers
=======
        msg: "Welcome!"
        // examples: dbExamples
>>>>>>> origin
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

  // app.get("/api/users", function(req, res) {
  //   db.User.findAll({}).then(function(dbUsers) {
  //     res.json(dbUsers);
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
