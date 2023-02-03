let CARTSarray = [
  {
    id: "1",
    category: "tops",
    title: "Pink White Floral Ruffle Sleeve Peplum Top",
    discount: "56",
    price2: "1450",
    price1: "638",
    site: "https://www.faballey.com/pink-white-floral-ruffle-sleeve-peplum-top-78/prdt",
    img1: "https://img.faballey.com/images/Product/TOP05210Z/1.jpg",
    img2: "https://img.faballey.com/images/Product/TOP05210Z/d4.jpg",
    img3: "https://img.faballey.com/images/Product/TOP05210Z/d5.jpg",
  },
  {
    id: "2",
    category: "tops",
    title: "Pink Floral Smocked Peplum Top",
    discount: "56",
    price2: "1650",
    price1: "726",
    site: "https://www.faballey.com/floral-pink-smoking-top-78/prdt",
    img1: "https://img.faballey.com/images/Product/TOP04999Z/1.jpg",
    img2: "https://img.faballey.com/images/Product/TOP04999Z/d5.jpg",
    img3: "https://img.faballey.com/images/Product/TOP04999Z/d8.jpg",
    img4: "https://img.faballey.com/images/Product/TOP04999Z/d4.jpg",
  },
  {
    id: "3",
    category: "tops",
    title: "Black Organza Ruffled  Shoulder Crop Top",
    discount: "56",
    price2: "1600",
    price1: "704",
    site: "https://www.faballey.com/black-organza-ruffled--shoulder-crop-top-78/prdt",
    img1: "https://img.faballey.com/images/Product/TOP06263Z/1.jpg",
    img2: "https://img.faballey.com/images/Product/TOP06263Z/d4.jpg",
    img3: "https://img.faballey.com/images/Product/TOP06263Z/d5.jpg",
    img4: "https://img.faballey.com/images/Product/TOP06263Z/d8.jpg",
  },
  {
    id: "4",
    category: "tops",
    title: "Powder Blue Lace Trim Detail Top",
    discount: "56",
    price2: "1600",
    price1: "704",
    site: "https://www.faballey.com/powder-blue-lace-trim-detail-top-78/prdt",
    img1: "https://img.faballey.com/images/Product/TOP05720Z/1.jpg",
    img2: "https://img.faballey.com/images/Product/TOP05720Z/d4.jpg",
    img3: "https://img.faballey.com/images/Product/TOP05720Z/d5.jpg",
    img4: "https://img.faballey.com/images/Product/TOP05720Z/d8.jpg",
  },
  {
    id: "4",
    category: "tops",
    title: "Powder Blue Lace Trim Detail Top",
    discount: "56",
    price2: "1600",
    price1: "704",
    site: "https://www.faballey.com/powder-blue-lace-trim-detail-top-78/prdt",
    img1: "https://img.faballey.com/images/Product/TOP05720Z/1.jpg",
    img2: "https://img.faballey.com/images/Product/TOP05720Z/d4.jpg",
    img3: "https://img.faballey.com/images/Product/TOP05720Z/d5.jpg",
    img4: "https://img.faballey.com/images/Product/TOP05720Z/d8.jpg",
  },
  {
    id: "4",
    category: "tops",
    title: "Powder Blue Lace Trim Detail Top",
    discount: "56",
    price2: "1600",
    price1: "704",
    site: "https://www.faballey.com/powder-blue-lace-trim-detail-top-78/prdt",
    img1: "https://img.faballey.com/images/Product/TOP05720Z/1.jpg",
    img2: "https://img.faballey.com/images/Product/TOP05720Z/d4.jpg",
    img3: "https://img.faballey.com/images/Product/TOP05720Z/d5.jpg",
    img4: "https://img.faballey.com/images/Product/TOP05720Z/d8.jpg",
  },
  {
    id: "4",
    category: "tops",
    title: "Powder Blue Lace Trim Detail Top",
    discount: "56",
    price2: "1600",
    price1: "704",
    site: "https://www.faballey.com/powder-blue-lace-trim-detail-top-78/prdt",
    img1: "https://img.faballey.com/images/Product/TOP05720Z/1.jpg",
    img2: "https://img.faballey.com/images/Product/TOP05720Z/d4.jpg",
    img3: "https://img.faballey.com/images/Product/TOP05720Z/d5.jpg",
    img4: "https://img.faballey.com/images/Product/TOP05720Z/d8.jpg",
  },
  {
    id: "4",
    category: "tops",
    title: "Powder Blue Lace Trim Detail Top",
    discount: "56",
    price2: "1600",
    price1: "704",
    site: "https://www.faballey.com/powder-blue-lace-trim-detail-top-78/prdt",
    img1: "https://img.faballey.com/images/Product/TOP05720Z/1.jpg",
    img2: "https://img.faballey.com/images/Product/TOP05720Z/d4.jpg",
    img3: "https://img.faballey.com/images/Product/TOP05720Z/d5.jpg",
    img4: "https://img.faballey.com/images/Product/TOP05720Z/d8.jpg",
  },
  {
    id: "4",
    category: "tops",
    title: "Powder Blue Lace Trim Detail Top",
    discount: "56",
    price2: "1600",
    price1: "704",
    site: "https://www.faballey.com/powder-blue-lace-trim-detail-top-78/prdt",
    img1: "https://img.faballey.com/images/Product/TOP05720Z/1.jpg",
    img2: "https://img.faballey.com/images/Product/TOP05720Z/d4.jpg",
    img3: "https://img.faballey.com/images/Product/TOP05720Z/d5.jpg",
    img4: "https://img.faballey.com/images/Product/TOP05720Z/d8.jpg",
  },
];
localStorage.setItem("mycart", JSON.stringify(CARTSarray));

let Procuctsssarray = JSON.parse(localStorage.getItem("mycart")) || [];

Procuctsssarray.forEach(function (elem) {
  elem.quantity = 1;
});

localStorage.setItem("mycart", JSON.stringify(Procuctsssarray));

displayCart(Procuctsssarray);
function displayCart(temp) {
  let product=document.getElementById("productBox")
  product.innerHTML=""
  temp.map(function(elem,i){
    let box=document.createElement("div")
    box.id="box-box"
    let box1=document.createElement("div")
    box1.id="box1"
    let box11=document.createElement("div")
    box11.id="box11"
    let box1a=document.createElement("div")
    box1a.id="box1a"
    let boxprice=document.createElement("div")
    boxprice.id="boxprice"
    let boxbottom=document.createElement("div")
    boxbottom.id="boxbottom"

    let image=document.createElement("img")
    image.src=elem.img1
    image.className="boximage"

    let name=document.createElement("p")
    name.id="boxname"
    name.innerText=elem.title

    let size=document.createElement("p")
    size.id="box-grey"
    size.innerText="Size: M";
    let SKU = document.createElement("p");
    SKU.id="box-grey"
    SKU.textContent = "SKU CODE : SWT00154C";

    let quantity= document.createElement("select")
    quantity.id= "qty"
    quantity.style.cursor="pointer"
    let option = document.createElement("option");
    option.value = "";
    option.text = "QTY";
    option.innerText="QTY"
    quantity.append(option)

    for (let i = 1; i <= 10; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.text = i;
      quantity.append(option);
    }
    let quantitytxt= document.createElement("p")
    quantitytxt.className= "qtytxt"
    quantitytxt.id= "box-grey"
    quantitytxt.textContent="QTY : "+elem.quantity

    box1a.append(name,size,SKU,quantity,quantitytxt)
    
    let price1 = document.createElement("p")
    price1.id="boxprice1"
    price1.textContent = "₹"+elem.price1;


    let price2 = document.createElement("p");
    price2.style.textDecoration = "line-through";
    price2.id="boxprice2"
    price2.textContent ="₹"+ elem.price2;

    boxprice.append(price1,price2)

    let wishlist = document.createElement("button");
    wishlist.innerText = "MOVE TO WISHLIST";
    wishlist.style.cursor="pointer"
    wishlist.addEventListener("click", function () {
      wishlistadd(elem,i);
    });

    let REMOVE = document.createElement("button");

    REMOVE.innerText = "REMOVE";
    REMOVE.addEventListener("click", function () {
            removeItem(elem, i);
    });
    quantity.addEventListener("change", function () {
            quantityitems(elem, i, box);
    });
    REMOVE.style.cursor="pointer"
    boxbottom.append(wishlist,REMOVE)
    box11.append(box1a,boxprice)
    box1.append(box11,boxbottom)
    box.append(image,box1)
    product.append(box)
  })
  totalprice();
  document.getElementById("cartcount").innerText = temp.length;
}

//reduce function
function totalprice() {
  let subtotal = Procuctsssarray.reduce(function (elem, curr) {
    return elem + Number(curr.price1 * curr.quantity);
  }, 0);
  document.getElementById("subtotalll1").innerText = `${subtotal}`;
  document.getElementById("subtotalll2").innerText = `${subtotal}`;

  localStorage.setItem("local-subtotal", subtotal);
}

function quantityitems(elem, index, div) {
  let quantity = div.querySelector("#qty").value;
  elem.quantity = Number(quantity);
  console.log(elem);
  localStorage.setItem("mycart", JSON.stringify(Procuctsssarray));

  displayCart(Procuctsssarray);
}

function removeItem(elem, index) {
  event.preventDefault();
  Procuctsssarray.splice(index, 1);
  localStorage.setItem("mycart", JSON.stringify(Procuctsssarray));
  displayCart(Procuctsssarray);
}

function wishlistadd(elem,index){
  let wishcart=JSON.parse(localStorage.getItem("mywishlistcart"))||[]
  wishcart.push(elem)
  Procuctsssarray.splice(index, 1);
  localStorage.setItem("mywishlistcart",JSON.stringify(wishcart))
  displayCart(Procuctsssarray);
}

//coupon
document.getElementById("CouponBtn").addEventListener("click",()=>{
  let x= document.getElementById("CouPonID").value
  if(x=="FAB1000"){
    document.getElementById("discount11").innerText="1000"
    let tprice=JSON.parse(localStorage.getItem("local-subtotal"))||0
    tprice-=1000
    localStorage.setItem("local-subtotal", tprice);
    document.getElementById("CouponApplied").innerText="Coupon Applied"
    document.getElementById("CouponApplied").style.color="green"
    document.getElementById("subtotalll2").innerText = tprice
  }
  else{
    document.getElementById("CouponApplied").innerText="Wrong Coupon Applied"
    document.getElementById("CouponApplied").style.color="red"
  }
})

//username 
var user1name=JSON.parse(localStorage.getItem("usernamefab"))||"User"
document.getElementById("custname").innerText=user1name
