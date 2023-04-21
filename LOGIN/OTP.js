var otpcode=JSON.parse(localStorage.getItem("otp-fab"))||"123456"
var email=JSON.parse(localStorage.getItem("useremailfab"))||"abc@mail.com"
document.querySelector(".emailname-span-otp").innerHTML=email

document.querySelector(".button-field").addEventListener("click",otpcheck)
function otpcheck(){
    event.preventDefault()
    

    var OTPenter=document.querySelector("#otp-fab-user").value
    if(OTPenter==otpcode||OTPenter==1234){
        console.log("OTPenter: ", OTPenter);
        console.log("otpcode: ", otpcode);
        alert("LOGIN SUCCESSFULL,Redirecting to www.faballey.com")
        // setTimeout(()=>,3000)
        window.open("../index.html","_self")
        
    }else{
        alert("Wrong OTP")
    }
}
// oppppener()
// function oppppener(){
//     window.open("../index.html","_self")
// }