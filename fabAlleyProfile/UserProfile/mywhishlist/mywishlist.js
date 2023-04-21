


let cartarray = JSON.parse(localStorage.getItem("mycart")) || [];



// let viewProduct=JSON.parse(localStorage.getItem("View_detail"));
// console.log(viewProduct)

//username 
var user1name = JSON.parse(localStorage.getItem("usernamefab")) || "User"

if (user1name != "User") {
  document.getElementById("custname").innerText = user1name
  document.getElementById("hi-name").style.display = "block"
  document.getElementById("login-signup").style.display = "none"

}

let userId="643d4353527c87a4cb619139";

fetchtops();
var Product=[];
async function fetchtops(){
  let res=await fetch(`http://localhost:3002/faballey/wishlist/643d4353527c87a4cb619139`)
  let json=await res.json();
  console.log(json.wishlistsCart);
  Product=[...json.wishlistsCart]
  display(Product)
}

// display(Product)
function display(data){
  document.querySelector(".whishlistbox").innerHTML=""
  data.map(function(ele,ind){
    document.querySelector(".whishlistbox").innerHTML+=
    `
    <div id="wis_box">
          <div id="img_tit">
            <div id="img_wish">
              <img src="${ele.img1}" alt="">
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
              <button onclick="add_to_bag(${ind})">ADD TO BAG</button>
            </div>
            <div id="crs_btn">
              <button onclick="remove(${ind})">Remove</button>
            </div>
          </div>
        </div>
    `
  })
}


async function add_to_bag(e) {


  let doc={
    userId: userId,
    productId:Product[e]._id,
    quantity:1
  }
  let res=await fetch('http://localhost:3002/faballey/cart',{
    method: 'POST',
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(doc)
  })

  let doc2={
    userId: userId,
    productId:Product[e]._id
  }
  let res2=await fetch('http://localhost:3002/faballey/wishlist',{
    method: 'DELETE',
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(doc2)
  })
  fetchtops()
  lengthProduct();
  async function lengthProduct(){
    let fil=await fetch(`http://localhost:3002/faballey/cart/643d4353527c87a4cb619139`)
    let json = await fil.json();
        document.querySelector("#navbar-cart-count").innerText= json.productsCart.length
  }
}



async function remove(ind){
  let doc={
    userId: userId,
    productId:Product[ind]._id
  }
  let res=await fetch('http://localhost:3002/faballey/wishlist',{
    method: 'DELETE',
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(doc)
  })
  fetchtops()
}

lengthProduct();
async function lengthProduct(){
  let fil=await fetch(`http://localhost:3002/faballey/cart/643d4353527c87a4cb619139`)
  let json = await fil.json();
      document.querySelector("#navbar-cart-count").innerText= json.productsCart.length
}
