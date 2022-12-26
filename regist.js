"use strict";

let baseURL = "https://task.samid.uz/v1/user";

const registration = (e) => {
  e.preventDefault();
  const userName = $("#userNameRegister").value.trim();
  const userEmile = $("#userEmailRegister").value.trim();
  const userPassword = $("#userPasswordRegister").value.trim();

  const params = {
    username: userName,
    email: userEmile,
    password: userPassword,
  };
  if (
    userName.length === 0 ||
    userEmile.length === 0 ||
    userPassword.length === 0
  ) {
    alert("Iltimos ma'lumotlarni to'ldiring");
  } else {
    fetch(`${baseURL}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((e) => e.json())
      .then((e) => {
        if (e.code === 1) {
          alert(e.message);
          setTimeout(() => {
            window.location.replace("../login-page/login.html");
          }, 2000);
        } else {
          console.log(e);
          alert(e.errors.username);
        }
      });
  }
};

$("#registration").addEventListener("submit", (e) => {
  registration(e);
});


