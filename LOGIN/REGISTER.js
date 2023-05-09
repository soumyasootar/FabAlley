// document.querySelector(".contBtn").addEventListener("click",openwindow)

async function sendemail() {
  event.preventDefault();
  var email = document.querySelector("#useremail").value;
  let userpassword = document.querySelector("#userpassword").value;
  if (userpassword.length != 0 && email.length != 0) {
    document.querySelector(".wrongcred").innerHTML = "";
    var otpmath = Math.floor(Math.random() * 599999) + 100000;
    localStorage.setItem("otp-fab", JSON.stringify(otpmath));
    localStorage.setItem("useremailfab", JSON.stringify(email));

    let obj = {
      email: email,
      password: userpassword,
    };

    try {
      const fetchdata = await fetch(
        "https://backend-faballey.vercel.app/faballey/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      const res = await fetchdata.json();
      localStorage.setItem("usernamefab", res.name);
      localStorage.setItem("user-token", res.token);
      localStorage.setItem("user-id", res._id);

      try {
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "faballey.india1@gmail.com",
          Password: "31762D74A7E1E57A7DC33FD99AA517638508",
          To: email,
          From: "faballey.india1@gmail.com",
          Subject: "OTP for FABALLEY INDIA LOGIN",
          Body:
            "Hello ! " +
            email +
            " ! You are receiving this email because we received a otp request for your account. Your OTP Is:  " +
            otpmath,
        })
          .then((message) => {
            alert("OTP SENT TO YOUR REGISTER EMAIL,Redirecting....");
            window.open("./OTP.html", "_self");
          })
          .catch((e) => {
            console.log("e: ", e);
            alert("server down in sending otp");
          });

        email.value = "";
      } catch (error) {
        console.log("error: ", error);
      }
    } catch (error) {
      console.log(error);
      alert("User Not Found in DataBase");
    }
  } else {
    document.querySelector(".wrongcred").innerHTML = "⚠️ FILL ALL INPUTS";
  }
}
