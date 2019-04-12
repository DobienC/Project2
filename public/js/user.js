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

