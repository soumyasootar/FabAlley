import navbar from "./navbar.js"
import footer from "./footer.js"


var nav= document.getElementById("main-main-navbar")
nav.innerHTML=navbar()
var foot= document.getElementById("footer-main-main")
foot.innerHTML=footer()

let cartarray = JSON.parse(localStorage.getItem("mycart")) || [];

document.querySelector("#navbar-cart-count").innerText= cartarray.length

//username 
var user1name=JSON.parse(localStorage.getItem("usernamefab"))||"User"

if(user1name!="User"){
    document.getElementById("custname").innerText=user1name
    document.getElementById("hi-name").style.display="block"
    document.getElementById("login-signup").style.display="none"

}
