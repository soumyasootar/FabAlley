let cartarray = JSON.parse(localStorage.getItem("mycart")) || [];

document.querySelector("#navbar-cart-count").innerText= cartarray.length


let viewProduct=JSON.parse(localStorage.getItem("View_detail"));
console.log(viewProduct)

//username 
var user1name=(localStorage.getItem("usernamefab"))||"User"

if(user1name!="User"){
    document.getElementById("custname").innerText=user1name
    document.getElementById("hi-name").style.display="block"
    document.getElementById("login-signup").style.display="none"

}

displayThis(viewProduct);

function displayThis(ele){
    // console.log(ele)
    document.querySelector("#Single_Page_container").innerHTML=
    `
    <div id="head_single_page">
          <span>HOME</span> |
          <span id="product_type">${ele.category}</span> |
          <span>PEPLUM TOPS</span> |
          <span>TRENDS</span> |
          <span id="product_name">${ele.title}</span>
        </div>
        <div id="all_detail_container">

          <div id="for_image">
            <div id="firstImg"><img src="${ele.img1}" alt=""></div>
            <div><img src="${ele.img2}" alt=""></div>
            <div><img src="${ele.img3}" alt=""></div>
            <div><img src="${ele.img4}" alt=""></div>
          </div>
          <div id="forother_detail">
            <div id="name_div"><span id="product_name">${ele.title}</span></div>
            <div id="price_div">
              <span id="rupee">₹</span><span id="product_sellp">${ele.price1}</span>
              <span id="rupee1">₹</span><span id="product_printp">${ele.price2}</span>
              <span id="product_discount">(${ele.discount}% OFF)</span>
            </div>
            <div id="intax">
              <p>inclusive of all taxes</p>
            </div>
            <div id="pro_code"><span>SKU:</span><span>TOP060782</span></div>
            <div id="product_express_div">
              <i class="fa-solid fa-truck-fast" id="express_icon"></i>
              <h4>EXPRESS</h4>
              <h5>3 Day Delivery on order placed before 2pm</h5>
            </div>
            <div id="size_guide"><span id="size_guide">SIZE:</span><span>SIZE GUIDE</span></div>
            <div id="pro_size">
              <ul id="choose_size">
                <li id="x_small">XS</li>
                <li id="small">S</li>
                <li id="midium">M</li>
                <li id="large">L</li>
                <li id="x_large">XL</li>
              </ul>
            </div>
            <div id="buttons">
              <button id="add_to_bag" onclick="cart()">ADD TO BAG</button>
              <button id="wishllist" onclick="wishlist()"><i class="fa-regular fa-heart"></i> ADD TO WISHLIST</button>
            </div>
            <div id="check_heading"><span>Check Delivery Time</span></div>
            <div id="check_pin">
              <input type="text" id="inter_pin" placeholder="Enter Pincode">
              <button id="check_btn">CHECK</button>
            </div>
            <div id="delivery_type">
              <div id="cod"><span><i class="fa-solid fa-people-carry-box"></i></i> COD Available</span></div>
              <div id="online"><span><i class="fa-solid fa-shield"></i>Secure Payment</span></div>
              <div id="free_ship"><span><i class="fa-solid fa-truck"></i> Free Shipping</span></div>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Description
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Add a pop of color to your wardrobe with this red top. It comes with a neck tie-up detail and a ruched
                    front.<br>
                    <br>Style Tip: Complete your look with silver hoops.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Details
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Color: Red<br>
                    Material: Crepe<br>
                    Neck:Square<br>
                    Self Design<br>
                    Sleeves: Short<br>
                    Closure: Slip On<br>
                    <br>
                    Size Length Width<br>
                    XS 58.42 CM 86.36 CM<br>
                    S 58.42 CM 86.36 CM<br>
                    M 58.42 CM 86.36 CM<br>
                    L 58.42 CM 86.36 CM<br>
                    XL 58.42 CM 86.36 CM<br>
                    <br>
                    <br>
                    Please note that the above measurements are garment measurements and not to-fit, body measurements.
                    Refer to our <code>Size Guide</code>  for more details<br>
                    <br>
                    <br>
                    Quantity - 1N<br>
                    <br>
                    Country of Origin : India<br>
                    <br>
                    <br>
                    Manufactured and Packed by<br>
                    High Street Essentials Private Limited<br>
                    C-11, Sector 7, District Gautam Budh Nagar, Noida 201301, Uttar Pradesh, India<br>
                    <br>
                    <br>
                    For Customer Queries<br>
                    Grievance Redressal Officer<br>
                    C-11, Sector 7, District Gautam Budh Nagar, Noida 201 301, Uttar Pradesh, India<br>
                    Phone : +91-8929987349 / 0120-6850262<br>
                    Email : customercare@faballey.com<br>
                    <br>
                    <br>
                    NOTE: There might be a slight variation in the shade of the actual product and the image shown on
                    the<br>
                    screen, due to the screen resolution and photography effects.<br>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Shipping & Returns
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Dispatch: Within 24 Hours<br>
                    Delivery time within India - 1-3* business days<br>
                    International delivery time - 7-10* business days<br>
                    Return/Exchange: If you are not completely satisfied with your purchase, simply select the option of<br>
                    return/exchange within 10 days of receiving your order from your order details page and we will process<br>
                    your return, no questions asked.<br>
                  </div>
                </div>
              </div>
            </div>
            <div id="social-media-logo">
              <div class="whatsapp"><i class="fa-brands fa-whatsapp"></i></div>
              <div class="insta"><i class="fa-brands fa-instagram"></i></div>
              <div class="facebook"><i class="fa-brands fa-facebook-f"></i></div>
              <div class="pintrest"><i class="fa-brands fa-pinterest-p"></i></div>
            </div>
          </div>
    `

}

// -------------------adding to wishlist---------------------------
// let userId="643d4353527c87a4cb619139";
var userId=localStorage.getItem("user-id")

async function wishlist(e) {
  // console.log(e.target)
  let t=document.querySelector("#wishllist")
  let fil=await fetch(`https://backend-faballey.vercel.app/faballey/wishlist/${userId}`)
  let json = await fil.json();
  
  let filpro=json.wishlistsCart.filter(function(y){
    return y._id==viewProduct._id;
  });
  if(filpro.length==1){
   for(let i=0; i<json.wishlistsCart.length; i++){
    if(json.wishlistsCart[i]._id==filpro[0]._id){
      let doc={
        userId: userId,
        productId:filpro[0]._id
      }
      let res=await fetch('https://backend-faballey.vercel.app/faballey/wishlist',{
        method: 'DELETE',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(doc)
      })
      t.children[0].classList.remove("fa-solid")
      t.style.color="#1d2322"
    }
   }
  }else{
   let doc={
    userId: userId,
    productId:viewProduct._id,
    quantity:1
  }
  let res=await fetch('https://backend-faballey.vercel.app/faballey/wishlist',{
    method: 'POST',
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(doc)
  })
  t.children[0].classList.add("fa-solid")
    t.style.color="#fc6486"
  }

}

// -------------------------add to cart-----------------
var user1name = localStorage.getItem("usernamefab") || "User";

if (user1name != "User") {
  document.getElementById("custname").innerText = user1name;
  document.getElementById("hi-name").style.display = "block";
  document.getElementById("login-signup").style.display = "none";
}

let cart_product = JSON.parse(localStorage.getItem("mycart")) || [];

async function cart(e) {

  let t=document.querySelector("#add_to_bag")

  
  let doc={
    userId: userId,
    productId:viewProduct._id,
    quantity:1
  }
  let res=await fetch('https://backend-faballey.vercel.app/faballey/cart',{
    method: 'POST',
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(doc)
  })
  // cart_product.push(Product[e])
  t.style.background="#03bb5c"
  let fil=await fetch(`https://backend-faballey.vercel.app/faballey/cart/${userId}`)
  let json = await fil.json();
      document.querySelector("#navbar-cart-count").innerText= json.productsCart.length

}

lengthProduct();
async function lengthProduct(){
  let fil=await fetch(`https://backend-faballey.vercel.app/faballey/cart/${userId}`)
  let json = await fil.json();
      document.querySelector("#navbar-cart-count").innerText= json.productsCart.length
}



// ----------------------selecting the size-------------------------
let size=document.querySelector("#choose_size");
let choose_SizeX=size.children
// console.log(size.children)
// console.log(choose_SizeX.length)
for (let i = 0; i < choose_SizeX.length; i++) {
  // console.log(choose_SizeX[i]);
  choose_SizeX[i].addEventListener("click", (x) => {
    // console.log(x.target);
    // console.log(x.target.innerHTML);
    for (let j = 0; j < choose_SizeX.length; j++) {
      choose_SizeX[j].style.background = "white";
      choose_SizeX[j].style.color = "#39373b";
    }
    x.target.style.background = "black";
    x.target.style.color="white"
    this_size=x.target.innerText;
  });
}


// choose_SizeX.forEach(function(sizeX){
//   console.log(sizeX)
//   console.log(sizeX)
//   btn.addEventListener('click', function() {
//     const subCategoryList = btn.nextElementSibling;
//     const right=btn.lastChild;
//     console.log(right)
//     if (subCategoryList.style.display === 'block') {
//       right.classList.remove("fa-angle-down")
//       subCategoryList.style.display = 'none';
//     } else {
//       subCategoryList.style.display = 'block';
//       right.classList.add("fa-angle-down")
//     }
//   });
// });

// -----------------nested filter-------------------
// const products = [
//   { name: "Product 1", discount: 10, color: "red" },
//   { name: "Product 2", discount: 20, color: "blue" },
//   { name: "Product 3", discount: 15, color: "green" },
//   { name: "Product 4", discount: 5, color: "red" },
//   { name: "Product 5", discount: 25, color: "blue" },
//   { name: "Product 6", discount: 10, color: "green" },
// ];

// const filteredProducts = products
//   .filter((product) => product.discount >= 10)
//   .filter((product) => product.color === "blue");

// console.log(filteredProducts);


// -------------------jump to page-------------------
// document.querySelector("#open_dress_page").addEventListener("click",()=>{
//   window.open("dress.html","_self")
// })
// document.querySelector("#tops_page_open").addEventListener("click",()=>{
//   window.open("ProductPage.html","_self");
// })