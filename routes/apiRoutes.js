var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get user by ID
  app.get("/api/users/:id", function(req, res) {
    db.Users.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Delete a user by id
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get all Posts
  app.get("/api/posts", function(req, res) {
    db.Posts.findAll({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Get all Posts from specified author with ID
  app.get("/api/posts/:id", function(req, res) {
    db.Posts.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Create a new post
  app.post("/api/posts", function(req, res) {
    db.Posts.create(req.body).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Delete a post by id
  app.delete("/api/posts/:id", function(req, res) {
    db.Posts.destroy({ where: { id: req.params.id } }).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });
};
