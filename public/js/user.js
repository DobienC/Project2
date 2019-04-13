
$(document).ready(function() {
  //function to change navbar's buttons (there has to be a key of "signedin" to attach to the navbar.handlebar)
  $(document).on("click", "#sign-in-btn" || "#sign-up-btn", function() {});

});

/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line linebreak-style
var nameInput = $("user-name");
var userEmail = $("e-mail");
var userPassword = $("password");
$(document).on("submit", "signIn-form", handleUserSignInSubmit);
$(document).on("click", ".create-user", handleCreateAccountPress);

addUsers();

