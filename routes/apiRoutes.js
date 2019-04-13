var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({
      include: [db.Post]
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get user by ID
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Delete a user by id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // app.post("/api/sign-up", function(req, res) {
  //   db.User.creat(req.body).then(function(dbUsers) {
  //     res.json(dbUsers);
  //   })
  // });

  // app.post("/api/sign-in", function(req, res){
  //   db.User.findOne({
  //     where: {
  //       name: req.body.name
  //       password
  //     } }).then(function(dbUsers) {
  //     res.json(dbUsers);
  //   });
  // });

  // Get all Posts
  app.get("/api/posts", function(req, res) {
    db.Post.findAll({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Get all Posts from specified author with ID
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Create a new post
  app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  // Delete a post by id
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({ where: { id: req.params.id } }).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });
};
