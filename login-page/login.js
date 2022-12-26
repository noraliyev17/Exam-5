"use strict"

let baseURL = "https://task.samid.uz/v1/user";

const login =(e) =>{
    e.preventDefault();


    const userName = $("#userNameRegister").value.trim();
    const userPassword = $("#userPasswordRegister").value.trim();



    
  const params = {
    username: userName,
    password: userPassword,
  };
  if (
    userName.length === 0 ||
    userPassword.length === 0
  ) {
    alert("Iltimos ma'lumotlarni to'ldiring");
  } else {
    fetch(`${baseURL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((e) => e.json())
      .then((e) => {
    
     if(e.code===1){
        localStorage.setItem('token',  e.data.token);
        localStorage.setItem('user' , e.data.username)

        alert(` ${e.data.username} Eduviga Xush Kelibsiz`)
       setInterval(()=>{
        location.replace("../main-page/page1.html");
       },2000)
     }else{
        alert(e.message)
     }

          });
        }
};

$("#login").addEventListener("submit", (e) => {
    login(e)
  });


