/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line linebreak-style
var nameInput = $("user-name");
var userEmail = $("e-mail");
var userPassword = $("password");
$(document).on("submit", "signIn-form", handleUserSignInSubmit);
$(document).on("submit", ".create-user", handleCreateAccountPress);

addUsers();

function handleUserSignInSubmit(event) {
  event.preventDefault();
  if (
    !nameInput
      .val()
      .trim()
      .trim()
  ) {
    return;
  }
  upsertUser({
    name: nameInput.val().trim()
  });
}

function upsertUser(userData) {
  $.post("/api/users", userData).then(getUser);
  }
