;

var userId=localStorage.getItem("user-id")
fetchtops();
let Procuctsssarray =[];
async function fetchtops(){
  let res=await fetch(`https://backend-faballey.vercel.app/faballey/cart/${userId}`)
  let json=await res.json();
  let alpha=[];
  alpha=[...json.productsCart]
  Procuctsssarray =[];
  alpha.forEach(function (elem) {
    Procuctsssarray.push(elem.product)
  });
  let qty=[]
  for(let i=0; i<json.productsCart.length; i++){
  qty.push(json.productsCart[i].quantity)
}
  console.log(qty)
  let i=0;
Procuctsssarray.forEach(function (elem) {
  elem.quantity = Number(qty[i]);
  i++;
});
  displayCart(Procuctsssarray)
  console.log(Procuctsssarray);
}



// displayCart(Procuctsssarray);
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

async function quantityitems(elem, index, div) {
  let quantity = div.querySelector("#qty").value;
  elem.quantity = Number(quantity);
  let doc={
    userId: userId,
    productId:Procuctsssarray[index]._id,
    quantity:elem.quantity
  }
  let res=await fetch('https://backend-faballey.vercel.app/faballey/cart',{
    method: 'POST',
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(doc)
  })
  console.log(elem.quantity);
  console.log(elem);

  displayCart(Procuctsssarray);
}

async function removeItem(elem, index) {
  // event.preventDefault();
  let doc={
    userId: userId,
    productId:Procuctsssarray[index]._id
  }
  let res=await fetch('https://backend-faballey.vercel.app/faballey/cart',{
    method: 'DELETE',
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(doc)
  })
  fetchtops();
}

async function wishlistadd(elem,index){
  let doc={
    userId: userId,
    productId:Procuctsssarray[index]._id,
    quantity:1
  }
  let res=await fetch('https://backend-faballey.vercel.app/faballey/wishlist',{
    method: 'POST',
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(doc)
  })
  let doc2={
    userId: userId,
    productId:Procuctsssarray[index]._id
  }
  let res2=await fetch('https://backend-faballey.vercel.app/faballey/cart',{
    method: 'DELETE',
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(doc2)
  })
  fetchtops();
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
var user1name=(localStorage.getItem("usernamefab"))||"User"
document.getElementById("custname").innerText=user1name
