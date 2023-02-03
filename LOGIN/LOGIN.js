// document.querySelector(".contBtn").addEventListener("click",openwindow)

function sendemail() {
  event.preventDefault();
  let username = document.querySelector("#username").value;
  console.log("username: ", username);
  var email = document.querySelector("#useremail").value;
  console.log("email: ", email);
  if (username.length != 0 && email.length != 0) {
    document.querySelector(".wrongcred").innerHTML = "";
    var otpmath = Math.floor(Math.random() * 599999) + 100000;
    localStorage.setItem("otp-fab", JSON.stringify(otpmath));
    localStorage.setItem("usernamefab", JSON.stringify(username));
    localStorage.setItem("useremailfab", JSON.stringify(email));
    // setTimeout(() => {
    // oppppener()
    // }, 6000);
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "faballey.india1@gmail.com",
      Password: "31762D74A7E1E57A7DC33FD99AA517638508",
      To: email,
      From: "faballey.india1@gmail.com",
      Subject: "OTP for FABALLEY INDIA LOGIN",
      Body:"Hello ! " +username +" ! You are receiving this email because we received a otp request for your account. Your OTP Is:  " +otpmath,
    }).then((message) => {
      alert("OTP SENT TO YOUR REGISTER EMAIL,Redirecting....")
      window.open("./OTP.html", "_self")
    })
    
    email.value = "";
  } else {
    document.querySelector(".wrongcred").innerHTML = "⚠️ FILL ALL INPUTS";
  }
}


