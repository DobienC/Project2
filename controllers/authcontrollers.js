var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render("signup", { message: req.flash("message") });
};

exports.signin = function(req, res) {
  res.render("signin", { message: req.flash("message") });
};

exports.blog = function(req, res) {
  res.render("blog", { username: req.user.username, signedin: true });
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
