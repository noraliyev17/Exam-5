"use strict"

(function(){
    let userName=localStorage.getItem('user')
    let token=localStorage.getItem("token")
    $('#accName').innerHTML=`${userName}`
    if (!token){
      location.replace('../main-page/page1.html')
    }
    }())
    




$("#menu-gam").addEventListener("click", ()=>{
    $(".modalka").style.display="block";
})
$(".close").addEventListener("click", ()=>{
    $(".modalka").style.display="none"
})