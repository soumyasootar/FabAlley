// let Product = [{
//   id: "1",
//   category: "tops",
//   title: "Pink White Floral Ruffle Sleeve Peplum Top",
//   discount: "56",
//   price2: "1450",
//   price1: "638",
//   colour:"pink",
//   site: "https://www.faballey.com/pink-white-floral-ruffle-sleeve-peplum-top-78/prdt",
//   img1: "https://img.faballey.com/images/Product/TOP05210Z/1.jpg",
//   img2: "https://img.faballey.com/images/Product/TOP05210Z/d4.jpg",
//   img3: "https://img.faballey.com/images/Product/TOP05210Z/d5.jpg",
//   img4: "https://img.faballey.com/images/Product/TOP05210Z/d8.jpg",
// },
// {
//   id: "2",
//   category: "tops",
//   title: "Pink Floral Smocked Peplum Top",
//   discount: "56",
//   price2: "1650",
//   price1: "726",
//   colour:"pink",
//   site: "https://www.faballey.com/floral-pink-smoking-top-78/prdt",
//   img1: "https://img.faballey.com/images/Product/TOP04999Z/1.jpg",
//   img2: "https://img.faballey.com/images/Product/TOP04999Z/d5.jpg",
//   img3: "https://img.faballey.com/images/Product/TOP04999Z/d8.jpg",
//   img4: "https://img.faballey.com/images/Product/TOP04999Z/d4.jpg",
// },]

let Product= JSON.parse(localStorage.getItem("mywishlistcart")) || [];

display(Product)
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
              <button class="add_to_bag${ind}">ADD TO BAG</button>
            </div>
            <div id="crs_btn">
              <button>X</button>
            </div>
          </div>
        </div>
    `
  })
}

let cart_product = JSON.parse(localStorage.getItem("mycart")) || [];

function cart(e) {

  let t=document.querySelector(".add_to_bag"+e)

  let filprox=cart_product.filter(function (d){
    return d.id==Product[e].id;
  });
  if(filprox.length==1){
   for(let i=0; i<cart_product.length; i++){
    if(cart_product[i].id==Product[e].id){
      console.log(cart_product[i])
    }
   }
  }else{
    cart_product.push(Product[e])
    t.style.background="#03bb5c"
        localStorage.setItem("mycart",JSON.stringify(cart_product))
  }
  console.log(cart_product)
}