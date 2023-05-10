let cartarray = JSON.parse(localStorage.getItem("mycart")) || [];

document.querySelector("#navbar-cart-count").innerText = cartarray.length;

// let viewProduct=JSON.parse(localStorage.getItem("View_detail"));
// console.log(viewProduct)

//username
// var user1name=JSON.parse(localStorage.getItem("usernamefab"))||"User"

// if(user1name!="User"){
//     document.getElementById("custname").innerText=user1name
//     document.getElementById("hi-name").style.display="block"
//     document.getElementById("login-signup").style.display="none"

// }

fetchtops();
var data = [];
async function fetchtops() {
  let res = await fetch("https://backend-faballey.vercel.app/faballey/tops");
  let json = await res.json();
  console.log(json);
  data = [...json];
  display(data);
}

// localStorage.setItem("FabAlleyProduct", JSON.stringify(Product));
// let data = JSON.parse(localStorage.getItem("FabAlleyProduct"));
function display(data) {
  let productEl = (document.querySelector("#product_tops").innerHTML = "");
  data.map(function (ele, ind) {
    // if(ele.category=="dress"){

    document.querySelector("#product_tops").innerHTML += `
            <div id="product_single_item_container" >
            <div id="image_hover" onclick="viewpage(${ind})">
                <img src="${ele.img1}"  onmouseover="hover(${ind})" onmouseout="hoverout(${ind})"
                id="product_single_item_container_image" class="change_image${ind}">
                <div id="product_size">
                <span >Sizes XS,S,L,XL</span>
                </div>
                <span id="product_offer">${ele.discount}%<br>OFF</span>
                
              </div>
                <div id="product_name_div"><p>${ele.title}</p></div>
                <div id="product_price_div">
                <span id="selling_price"><i class="fa-solid fa-indian-rupee-sign"></i> ${ele.price1}</span>
                <h3 id="printed_price"><i class="fa-solid fa-indian-rupee-sign"></i> ${ele.price2}</h3>
                </div>
                <div id="product_express_div">
                <i class="fa-solid fa-truck-fast" id="express_icon"></i>
                <h4>EXPRESS</h4>
                <h5>3 Day Delivery</h5>
                </div>
                <div id="product_cartWishlist_div">
                <i class="fa-regular fa-heart" id="wishlist${ind}" onclick="wishlist(${ind})"></i>
                <button id="add_to_bag" class="add_to_bag${ind}" onclick="cart(${ind})">ADD TO BAG</button>
                </div>
            </div>
            `;
    // }
  });
}

// ----------------------wishlist----------------------

// let userId="643d4353527c87a4cb619139";
var user1name = localStorage.getItem("usernamefab") || "User";

if (user1name != "User") {
  document.getElementById("custname").innerText = user1name;
  document.getElementById("hi-name").style.display = "block";
  document.getElementById("login-signup").style.display = "none";
}

var userId = localStorage.getItem("user-id");

async function wishlist(e) {
  let t = document.querySelector("#wishlist" + e);
  let fil = await fetch(`https://backend-faballey.vercel.app/faballey/wishlist/${userId}`);
  let json = await fil.json();

  let filpro = json.wishlistsCart.filter(function (y) {
    return y._id == data[e]._id;
  });
  if (filpro.length == 1) {
    for (let i = 0; i < json.wishlistsCart.length; i++) {
      if (json.wishlistsCart[i]._id == filpro[0]._id) {
        let doc = {
          userId: userId,
          productId: filpro[0]._id,
        };
        let res = await fetch("https://backend-faballey.vercel.app/faballey/wishlist", {
          method: "DELETE",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(doc),
        });
        t.classList.remove("fa-solid");
        t.style.color = "#1d2322";
      }
    }
  } else {
    let doc = {
      userId: userId,
      productId: data[e]._id,
      quantity: 1,
    };
    let res = await fetch("https://backend-faballey.vercel.app/faballey/wishlist", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(doc),
    });
    t.classList.add("fa-solid");
    t.style.color = "#fc6486";
  }
}
// --------------------------add to bag-----------------------
// let cart_product = JSON.parse(localStorage.getItem("mycart")) || [];

async function cart(e) {
  let t = document.querySelector(".add_to_bag" + e);

  // let filprox=cart_product.filter(function (d){
  //   return d.id==Product[e].id;
  // });
  // if(filprox.length==1){
  //  for(let i=0; i<cart_product.length; i++){
  //   if(cart_product[i].id==Product[e].id){
  //     window.open("../Carts/components/carts.html","_self")
  //     console.log(cart_product[i])
  //   }
  //  }
  // }else{

  let doc = {
    userId: userId,
    productId: data[e]._id,
    quantity: 1,
  };
  let res = await fetch("https://backend-faballey.vercel.app/faballey/cart", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(doc),
  });
  // cart_product.push(Product[e])
  t.style.background = "#03bb5c";
  let fil = await fetch(`https://backend-faballey.vercel.app/faballey/cart/${userId}`);
  let json = await fil.json();
  document.querySelector("#navbar-cart-count").innerText =
    json.productsCart.length;
  // location.reload()
  // }
  // console.log(cart_product)
}

lengthProduct();
async function lengthProduct() {
  let fil = await fetch(`https://backend-faballey.vercel.app/faballey/cart/${userId}`);
  let json = await fil.json();
  document.querySelector("#navbar-cart-count").innerText =
    json.productsCart.length;
}
// ----------------------------------------------------
function hover(ind) {
  let product = data[ind].img2;
  document.querySelector(".change_image" + ind).src = product;
}
function hoverout(ind) {
  let product = data[ind].img1;
  document.querySelector(".change_image" + ind).src = product;
}

// --------------------View Product Detail---------------------
let viewProduct = JSON.parse(localStorage.getItem("View_detail"));
function viewpage(ind) {
  let viewThis = data[ind];
  console.log(viewThis);
  localStorage.setItem("View_detail", JSON.stringify(viewThis));
  window.open("singleProduct.html", "_self");
}

// ----------------drop downs--------------------
document.querySelector("#drop_down").innerHTML = `
<span class="menu-heading">TOPS</span>
    <ul class="category-list">
      <li class="category-item">
        <button class="category-btn" id="this_page">TOPS <i class="fa-solid fa-angle-right"></i></button>
        <ul class="sub-category-list" id="the_page">
          <li class="sub-category-item">CROP TOPS</li>
          <li class="sub-category-item">TANK TOPS</li>
          <li class="sub-category-item">T-SHIRTS</li>
          <li class="sub-category-item">SHIRTS</li>
          <li class="sub-category-item">BLOUSES</li>
          <li class="sub-category-item">MAXI TOPS</li>
          <li class="sub-category-item">PEPLUM TOPS</li>
          <li class="sub-category-item">CAPE TOPS</li>
          <li class="sub-category-item">WRAP TOPS</li>
          <li class="sub-category-item">HALTER TOP</li>
          <li class="sub-category-item">LACE TOPS</li>
          <li class="sub-category-item">COLD SHOULDER TOPS</li>
          <li class="sub-category-item">OFF SHOULDER TOPS</li>
          <li class="sub-category-item">BELL SLEEVES TOPS</li>
        </ul>
      </li>
      <li class="category-item">
        <button class="category-btn">LOUNGEWEAR <i class="fa-solid fa-angle-right"></i></button>
        <ul class="sub-category-list">
          <li class="sub-category-item">COORDINATES</li>
          <li class="sub-category-item">TOPS</li>
          <li class="sub-category-item">DRESSES</li>
          <li class="sub-category-item">BOTTOMS</li>
        </ul>
      </li>
      <button class="category-btn1">PARTY WEAR</button>
      <button class="category-btn1">WORK FROM HOME COLLECTION</button>
      <li class="category-item">
        <button class="category-btn">DRESSES <i class="fa-solid fa-angle-right"></i></button>
        <ul class="sub-category-list">
          <li class="sub-category-item">BODYCON DRESSES</li>
          <li class="sub-category-item">SKATER DRESSES</li>
          <li class="sub-category-item">A-LINE DRESSES</li>
          <li class="sub-category-item">SHIRT DRESSES</li>
          <li class="sub-category-item">SHIFT DRESSES</li>
          <li class="sub-category-item">MAXI DRESSES</li>
          <li class="sub-category-item">JUMPSUITS</li>
          <li class="sub-category-item">WRAP DRESSES</li>
          <li class="sub-category-item">HALTER DRESS</li>
          <li class="sub-category-item">OFF SHOULDER DRESSES</li>
          <li class="sub-category-item">COLD SHOULDER DRESSES</li>
          <li class="sub-category-item">RUFFLE DRESSES</li>
          <li class="sub-category-item">LITTLE BLACK DRESSES</li>
          <li class="sub-category-item">LACE DRESSES</li>
          <li class="sub-category-item">MIDI DRESSES</li>
          <li class="sub-category-item">MINI DRESSES</li>
        </ul>
      </li>
      <li class="category-item">
        <button class="category-btn">SKIRTS <i class="fa-solid fa-angle-right"></i></button>
        <ul class="sub-category-list">
          <li class="sub-category-item">MINI SKIRTS</li>
          <li class="sub-category-item">MAXI SKIRTS</li>
          <li class="sub-category-item">MIDI SKIRTS</li>
        </ul>
      </li>
      <li class="category-item">
        <button class="category-btn">BOTTOMS <i class="fa-solid fa-angle-right"></i></button>
        <ul class="sub-category-list">
          <li class="sub-category-item">FORMAL TROUSERS</li>
          <li class="sub-category-item">LEGGINGS & JEGGINGS</li>
          <li class="sub-category-item">WIDE LEGGED PANTS</li>
        </ul>
      </li>
      <li class="category-item">
        <button class="category-btn">WINTER WEAR <i class="fa-solid fa-angle-right"></i></button>
        <ul class="sub-category-list">
          <li class="sub-category-item">JACKETS</li>
          <li class="sub-category-item">COATS</li>
          <li class="sub-category-item">SHRUGS</li>
          <li class="sub-category-item">SWEATERS & CARDIGANS</li>
          <li class="sub-category-item">HOODIES & SWEATSHIRTS</li>
        </ul>
      </li>
      <button class="category-btn1">SHORTS</button>
      <button class="category-btn1">SHRUGS</button>
      <button class="category-btn1">UNDER 699</button>
      <button class="category-btn1">UNDER 799</button>
      <button class="category-btn1">UNDER 999</button>
    </ul>
`;

const categoryBtns = document.querySelectorAll(".category-btn");
console.log(categoryBtns);
categoryBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const subCategoryList = btn.nextElementSibling;
    const right = btn.lastChild;
    console.log(right);
    // console.log(subCategoryList)
    if (subCategoryList.style.display === "block") {
      right.classList.remove("fa-angle-down");
      subCategoryList.style.display = "none";
    } else {
      subCategoryList.style.display = "block";
      right.classList.add("fa-angle-down");
    }
  });
});
var right = document.querySelector(".fa-angle-right");

document
  .querySelector(".sub-category-list")
  .addEventListener("click", function (x) {
    // console.log(x.target.innerText)
  });

let bala = false;
document.querySelector(".sort_by_relevence").addEventListener("click", () => {
  const disthis = document.querySelector(".shorted_by");
  if (bala === true) {
    disthis.classList.remove("display_sorted");
    bala = false;
  } else {
    disthis.classList.add("display_sorted");
    bala = true;
  }
});

// -------------------sorting---------------------------

document.querySelector(".shorted_by").addEventListener("click", function (e) {
  let getValue = e.target.attributes.value.nodeValue;
  // console.log(getValue)
  if (getValue === "LOW") {
    data.sort(function (a, b) {
      return a.price1 - b.price1;
    });
    display(data);
    // colour:"pink",display(data);
    document.querySelector(".shorted_by").classList.remove("display_sorted");
  }
  if (getValue === "HIGH") {
    data.sort(function (a, b) {
      return b.price1 - a.price1;
    });
    display(data);
    document.querySelector(".shorted_by").classList.remove("display_sorted");
  }
});

// ------------filtering button part------------------
document.querySelector("#filtering_part").innerHTML = `
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Size
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#"><i class="fa-regular fa-square-full"></i> XS (extra samll)</a></li>
    <li><a class="dropdown-item" href="#"><i class="fa-regular fa-square-full"></i> S (small)</a></li>
    <li><a class="dropdown-item" href="#"><i class="fa-regular fa-square-full"></i> M (medium)</a></li>
    <li><a class="dropdown-item" href="#"><i class="fa-regular fa-square-full"></i> L (large)</a></li>
    <li><a class="dropdown-item" href="#"><i class="fa-regular fa-square-full"></i> XL (extra large)</a></li>
  </ul>
</div>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Colour
  </a>

  <ul class="dropdown-menu" id="chooseColor">
    <li value="pink" class="dropdown-item"><i class="fa-regular fa-square-full"></i> Pink</li>
    <li value="black" class="dropdown-item"><i class="fa-regular fa-square-full"></i> Black</li>
    <li value="grey" class="dropdown-item"><i class="fa-regular fa-square-full"></i> Grey</li>
    <li value="white" class="dropdown-item"><i class="fa-regular fa-square-full"></i> White</li>
    <li value="lilac" class="dropdown-item"><i class="fa-regular fa-square-full"></i> Lilac</li>
    <li value="dusty" class="dropdown-item"><i class="fa-regular fa-square-full"></i> Dusty</li>
    <li value="rust" class="dropdown-item"><i class="fa-regular fa-square-full"></i> Rust</li>
    <li value="wine" class="dropdown-item"><i class="fa-regular fa-square-full"></i> Wine</li>
  </ul>
</div>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Occasion
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Fabric
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Pattern
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sleeves
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Length
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Discount
  </a>

  <ul class="dropdown-menu" id="chooseDis">
    <li value="10" class="dropdown-item"><i class="fa-regular fa-square-full"></i> 10 % and above</li>
    <li value="20" class="dropdown-item"><i class="fa-regular fa-square-full"></i> 20 % and above</li>
    <li value="30" class="dropdown-item"><i class="fa-regular fa-square-full"></i> 30 % and above</li>
    <li value="40" class="dropdown-item"><i class="fa-regular fa-square-full"></i> 40 % and above</li>
    <li value="50" class="dropdown-item"><i class="fa-regular fa-square-full"></i> 50 % and above</li>
    <li value="60" class="dropdown-item"><i class="fa-regular fa-square-full"></i> 60 % and above</li>
    <li value="70" class="dropdown-item"><i class="fa-regular fa-square-full"></i> 70 % and above</li>
  </ul>
</div>
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Price
  </a>

  <ul class="dropdown-menu" id="filPrice">
    <li value="500" class="dropdown-item" ><i class="fa-regular fa-square-full"></i> Less Than-₹ 500</li>
    <li value="1000" class="dropdown-item"><i class="fa-regular fa-square-full"></i> Less Than-₹ 1000</li>
    <li value="2000" class="dropdown-item"><i class="fa-regular fa-square-full"></i> Less Than-₹ 2000</li>
    <li value="2500" class="dropdown-item"><i class="fa-regular fa-square-full"></i> Less Than-₹ 2500</li>
  </ul>
</div>

`;

// --------------------filtering-------------------------
let cv = "";
let filcolor = document.querySelector("#chooseColor");
filcolor.addEventListener("click", (event) => {
  for (let i = 0; i < filcolor.children.length; i++) {
    if (filcolor.children[i] === event.target) {
      cv = filcolor.children[i].attributes.value.nodeValue;
      console.log(cv);
      break;
    }
  }
  if (cv === "") {
    display(data);
  } else {
    var filtered = data.filter(function (elem) {
      return elem.colour == cv;
    });
    console.log(filtered);
    display(filtered);
  }
});

let dv = "";
let fildis = document.querySelector("#chooseDis");
fildis.addEventListener("click", (event) => {
  for (let i = 0; i < fildis.children.length; i++) {
    if (fildis.children[i] === event.target) {
      dv = fildis.children[i].attributes.value.nodeValue;
      console.log(dv);
      break;
    }
  }
  if (dv === "") {
    display(data);
  } else {
    var filtered = data.filter(function (elem) {
      return elem.discount >= dv;
    });
    display(filtered);
  }
});

let pv = "";
let filPri = document.querySelector("#filPrice");
filPri.addEventListener("click", (event) => {
  for (let i = 0; i < filPri.children.length; i++) {
    if (filPri.children[i] === event.target) {
      pv = filPri.children[i].attributes.value.nodeValue;
      // console.log(pv);
      break;
    }
  }
  // console.log(pv)
  if (pv == "") {
    display(data);
  } else {
    var filtered = data.filter(function (elem) {
      // console.log(elem.price1)
      console.log(pv);
      return elem.price1 <= Number(pv);
    });
    console.log(filtered);
    display(filtered);
  }
});


//search with mic
document.querySelector(".search-text").addEventListener("input", searchyoo);
document.querySelector(".search-form").addEventListener("submit", searchyoo);

function searchyoo() {
  event.preventDefault();
  setTimeout(function () {
    searchhhhh();
  }, 2000);
}


function searchhhhh() {
  let serch = document.querySelector(".search-text").value;
  console.log("serch: ", serch);
  serch.toLowerCase();
  console.log("serch: ", serch);
  if (serch.includes("top")) {
    window.open("ProductPage.html", "_self");
  } else if (serch.includes("dress")) {
    window.open("dress.html", "_self");
  } else {
    window.open("dress.html", "_self");
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
    window.open("ProductPage.html", "_self");
  } else if (serch.includes("dress")) {
    window.open("dress.html", "_self");
  } else {
    window.open("dress.html", "_self");
  }
}

// Search Ends 


// console.log(filcolor.children.length)
// console.log(filcolor.children)
// console.log(filcolor.children[0].attributes.value.nodeValue)
// console.log(filcolor)

// ----------------jump to dress Page-----------------

// document.querySelector("#open_dress_page").addEventListener("click",()=>{
//   window.open("dress.html","_self")
// })
// document.querySelector("#jumpcart").addEventListener("click",()=>{
//   location.href="./fabAlleyProfile/myorder/myorder.html"
// })

// ------------nested filter-------------------
// localStorage.setItem("products", JSON.stringify(products));

// Retrieve the products from local storage
// const storedProducts = JSON.parse(localStorage.getItem("products"));

// Filter the products based on discount and color
// const filteredProducts = storedProducts
//   .filter((product) => product.discount >= 10)
//   .filter((product) => product.color === "blue");

// Display the filtered products
// const displayProducts = () => {
//   const productsList = document.querySelector("#products-list");
//   filteredProducts.forEach((product) => {
//     productsList.innerHTML += `
//       <div class="product">
//         <p>Name: ${product.name}</p>
//         <p>Discount: ${product.discount}%</p>
//         <p>Color: ${product.color}</p>
//       </div>
//     `;
//   });
// };

// displayProducts();
