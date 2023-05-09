// var faceData = [
//   {
//     id: "1",
//     category: "tops",
//     title: "Pink White Floral Ruffle Sleeve Peplum Top",
//     discount: "56",
//     price2: "1450",
//     price1: "638",
//     colour:"pink",
//     site: "https://www.faballey.com/pink-white-floral-ruffle-sleeve-peplum-top-78/prdt",
//     img1: "https://img.faballey.com/images/Product/TOP05210Z/1.jpg",
//     img2: "https://img.faballey.com/images/Product/TOP05210Z/d4.jpg",
//     img3: "https://img.faballey.com/images/Product/TOP05210Z/d5.jpg",
//     img4: "https://img.faballey.com/images/Product/TOP05210Z/d8.jpg",
//   },
//   {
//     id: "2",
//     category: "tops",
//     title: "Pink Floral Smocked Peplum Top",
//     discount: "56",
//     price2: "1650",
//     price1: "726",
//     colour:"pink",
//     site: "https://www.faballey.com/floral-pink-smoking-top-78/prdt",
//     img1: "https://img.faballey.com/images/Product/TOP04999Z/1.jpg",
//     img2: "https://img.faballey.com/images/Product/TOP04999Z/d5.jpg",
//     img3: "https://img.faballey.com/images/Product/TOP04999Z/d8.jpg",
//     img4: "https://img.faballey.com/images/Product/TOP04999Z/d4.jpg",
//   },
//   ];
// var email=JSON.parse(localStorage.getItem("useremailfab"))||"abc@mail.com"
// // var faceData = JSON.parse(localStorage.getItem("ordercart-fab")) || [];

// // document.querySelector(".emailname-span-otp").innerHTML=email
// // document.querySelector("#custname").innerHTML=email
// // document.querySelector("#profile_letter>h1").innerHTML=email.charAt(0)

var user1name = localStorage.getItem("usernamefab") || "User";
var email = JSON.parse(localStorage.getItem("useremailfab")) || "abc@mail.com";
document.querySelector(".emailname-span-otp").innerHTML = email;
document.querySelector("#profile_letter>h1").innerHTML = email
  .charAt(0)
  .toUpperCase();

if (user1name != "User") {
  document.getElementById("custname").innerText = user1name;
  document.getElementById("hi-name").style.display = "block";
  document.getElementById("login-signup").style.display = "none";
}

var userId = localStorage.getItem("user-id");
fetchtops();
var Product = [];
async function fetchtops() {
  let res = await fetch(
    `https://backend-faballey.vercel.app/faballey/order/${userId}`
  );
  let json = await res.json();
  console.log(json.ordersCart);
  Product = [...json.ordersCart];
  if(Product.length>0)
  displayProduct(Product);
}
// displayProduct(faceData);
function displayProduct(doc) {
  document.querySelector(".orderdiv").innerHTML = " ";
  doc.map(function (x, ind) {
    let cart = document.querySelector(".orderdiv");
    let item = document.createElement("div");
    item.setAttribute("class", "order");
    let content = ` 
      <div class="items">
      <div class="imgdiv">
          <img src="${x.img1}" alt="">
      </div>
      <div class="namediv">
          <p class="titlename">${x.title}</p>
          
          <p class="titlename">₹ ${x.price1}</p>
      </div>
      <div class="status">
          <p class="font-product-item-MRP">Status</p>
          <h3 class="transist">Your Order is Processing...</h3>
      </div>
      <div class="deliverydiv">
          <p class="featuredtxt">Delivery Expected by</p>
          <h3 class="datee">xxxx</h3>
      </div> 
  </div>`;
    item.innerHTML += content;
    cart.appendChild(item);
    var d = item.querySelector(".datee");
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = ((Number(dd) + 5) % 30) + "/" + mm + "/" + yyyy;
    console.log(today);
    d.innerHTML = today;
  });
}

document.querySelector("#cancelAll").addEventListener("click", change);
function change() {
  let a = document.querySelector("#cancelAll").textContent;
  console.log(a);
  if (a == "Cancel Order") {
    document.querySelector("#tracking").innerText = "Order Cancelled";
    document.querySelector("#tracking").style.background = "red";
    document.querySelector("#cancelAll").textContent = "Order Again";
  } else {
    document.querySelector("#tracking").innerText = "Track Status";
    document.querySelector("#tracking").style.background = "rgb(241,165,24";
    document.querySelector("#cancelAll").textContent = "Cancel Order";
  }
}

// print pdf
function printPdf() {
  const pdfFrame = document.querySelector("#pdf-frame");
  const pdfUrl = pdfFrame.src;
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = "../Asset/invoice.pdf";
  a.download = "invoice.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  console.log("worked");
}
//username
var logout = document.querySelector(".logout");
logout.addEventListener("click", logoooout);

function logoooout() {
  localStorage.setItem("usernamefab", "User");
  localStorage.setItem("user-id", "00000");
  localStorage.setItem("useremailfab", "abc@gmail.com");
  window.open("../../../index.html", "_self");
}
