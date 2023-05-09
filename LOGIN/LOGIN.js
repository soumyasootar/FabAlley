// document.querySelector(".contBtn").addEventListener("click",openwindow)

function sendemail() {
  event.preventDefault();
  let username = document.querySelector("#username").value;
  console.log("username: ", username);
  var email = document.querySelector("#useremail").value;
  var userpassword = document.querySelector("#userpassword").value;
  console.log("email: ", email);
  if (username.length != 0 && email.length != 0) {
    document.querySelector(".wrongcred").innerHTML = "";
    // var otpmath = Math.floor(Math.random() * 599999) + 100000;
    // localStorage.setItem("otp-fab", JSON.stringify(otpmath));
    localStorage.setItem("usernamefab", JSON.stringify(username));
    localStorage.setItem("useremailfab", JSON.stringify(email));
    let obj = {
      name: username,
      email: email,
      password: userpassword,
    };
    console.log("obj: ", obj);

    fetch("https://backend-faballey.vercel.app/faballey/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(res=>window.open("./REGISTER.html", "_self"))
    .catch(err=>console.log(err))

  } else {
    document.querySelector(".wrongcred").innerHTML = "⚠️ FILL ALL INPUTS";
  }
}
