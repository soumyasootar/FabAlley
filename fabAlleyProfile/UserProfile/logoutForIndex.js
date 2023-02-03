document.querySelector("#logoutPopback").addEventListener("click", popback);
let logoutBtn = document.querySelector("#forPopup");
logoutBtn.addEventListener("click", popup);
var a = document.querySelector(".logoutPopup");
function popup() {
  if (logoutBtn.textContent.includes(" Log out"))
    a.classList.add("logoutPopback");
  else {
  }
}
function popback() {
  a.classList.remove("logoutPopback");
}
document.querySelector("#logout1").addEventListener("click", logout);
document.querySelector("#logout2").addEventListener("click", logout);
function logout(){
  console.log("abc0")
  localStorage.setItem("loggedin", "false");
    window.location.href = "/index.html";
    a.classList.remove("logoutPopback");
    console.log("abc")
}



