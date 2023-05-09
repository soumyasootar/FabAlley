let cartarray = JSON.parse(localStorage.getItem("mycart")) || [];

// let viewProduct=JSON.parse(localStorage.getItem("View_detail"));
// console.log(viewProduct)

//username
var user1name = localStorage.getItem("usernamefab") || "User";

if (user1name != "User") {
  document.getElementById("custname").innerText = user1name;
  document.getElementById("hi-name").style.display = "block";
  document.getElementById("login-signup").style.display = "none";
}

// let userId="643d4353527c87a4cb619139";
var userId = localStorage.getItem("user-id");
var email = JSON.parse(localStorage.getItem("useremailfab")) || "abc@mail.com";
document.querySelector(".emailname-span-otp").innerHTML = email;
document.querySelector("#profile_letter>h1").innerHTML = email
  .charAt(0)
  .toUpperCase();

fetchtops();
var Product = [];
async function fetchtops() {
  let res = await fetch(
    `https://backend-faballey.vercel.app/faballey/wishlist/${userId}`
  );
  let json = await res.json();
  console.log(json.wishlistsCart);
  Product = [...json.wishlistsCart];
  if (Product.length > 0) display(Product);
}

// display(Product)
function display(data) {
  document.querySelector(".whishlistbox").innerHTML = "";
  data.map(function (ele, ind) {
    document.querySelector(".whishlistbox").innerHTML += `
    <div id="wis_box" style="margin-bottom:5px; background-color: #FFE9E5;">
          <div id="img_tit">
            <div id="img_wish">
              <img src="${ele.img1}" alt="" style="width:100px">
            </div>
            <div id="wis_title">
              <span>${ele.title}</span>
            </div>
          </div>

          <div id="pric_btn_crs">
            <div id="wish_price">
              <span>₹ ${ele.price1}</span>
            </div>
            <div id="addt_cartw">
              <button onclick="add_to_bag(${ind})" style="cursor: pointer;">ADD TO BAG</button>
            </div>
            <div id="crs_btn">
              <button onclick="remove(${ind})" style="cursor: pointer;">Remove</button>
            </div>
          </div>
        </div>
    `;
  });
}

async function add_to_bag(e) {
  let doc = {
    userId: userId,
    productId: Product[e]._id,
    quantity: 1,
  };
  let res = await fetch("https://backend-faballey.vercel.app/faballey/cart", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(doc),
  });

  let doc2 = {
    userId: userId,
    productId: Product[e]._id,
  };
  let res2 = await fetch(
    "https://backend-faballey.vercel.app/faballey/wishlist",
    {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(doc2),
    }
  );
  fetchtops();
  lengthProduct();
  async function lengthProduct() {
    let fil = await fetch(
      `https://backend-faballey.vercel.app/faballey/cart/${userId}`
    );
    let json = await fil.json();
    document.querySelector("#navbar-cart-count").innerText =
      json.productsCart.length;
  }
}

async function remove(ind) {
  let doc = {
    userId: userId,
    productId: Product[ind]._id,
  };
  let res = await fetch(
    "https://backend-faballey.vercel.app/faballey/wishlist",
    {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(doc),
    }
  );
  fetchtops();
}

lengthProduct();
async function lengthProduct() {
  let fil = await fetch(
    `https://backend-faballey.vercel.app/faballey/cart/${userId}`
  );
  let json = await fil.json();
  document.querySelector("#navbar-cart-count").innerText =
    json.productsCart.length;
}
