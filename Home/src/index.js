import navbar from "./navbar.js";
import footer from "./footer.js";

var nav = document.getElementById("main-main-navbar");
nav.innerHTML = navbar();
var foot = document.getElementById("footer-main-main");
foot.innerHTML = footer();

let cartarray = JSON.parse(localStorage.getItem("mycart")) || [];

document.querySelector("#navbar-cart-count").innerText = cartarray.length;

//username
var user1name = JSON.parse(localStorage.getItem("usernamefab")) || "User";

if (user1name != "User") {
  document.getElementById("custname").innerText = user1name;
  document.getElementById("hi-name").style.display = "block";
  document.getElementById("login-signup").style.display = "none";
}

document.querySelector(".search-text").addEventListener("input", searchyoo);

function searchyoo() {
  event.preventDefault();
  setTimeout(function () {
    searchhhhh();
  }, 2000);
}

function searchhhhh() {
  // console.log("yoooooooooo");
  let serch = document.querySelector(".search-text").value;
  serch.toLowerCase();
  console.log("serch: ", serch);
  if (serch.includes("top")) {
    window.open("./ProductPage/ProductPage.html", "_self");
  } else if (serch.includes("dress")) {
    window.open("./ProductPage/dress.html", "_self");
  } else {
    window.open("./ProductPage/dress.html", "_self");
  }
}

// microphone
const button = document.querySelector("#mic");
var textInput = document.querySelector(".search-text");

button.addEventListener("click", () => {
  const recognition = new webkitSpeechRecognition();
  recognition.onresult = (event) => {
    textInput.value = event.results[0][0].transcript;
    let serch = document.querySelector(".search-text").value;
    micsearch(serch);
  };
  recognition.start();
});

function micsearch(serch) {
  if (serch.includes("top")) {
    window.open("./ProductPage/ProductPage.html", "_self");
  } else if (serch.includes("dress")) {
    window.open("./ProductPage/dress.html", "_self");
  } else {
    window.open("./ProductPage/dress.html", "_self");
  }
}
