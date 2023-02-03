import navbar from "./navbar.js"
import footer from "./footer.js"


var nav= document.getElementById("main-main-navbar")
nav.innerHTML=navbar()
var foot= document.getElementById("footer-main-main")
foot.innerHTML=footer()

let cartarray = JSON.parse(localStorage.getItem("mycart")) || [];

document.querySelector("#navbar-cart-count").innerText= cartarray.length