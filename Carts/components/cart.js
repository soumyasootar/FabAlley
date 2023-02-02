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
];
localStorage.setItem("mycart", JSON.stringify(CARTSarray));

let Procuctsssarray = JSON.parse(localStorage.getItem("mycart")) || [];

Procuctsssarray.forEach(function (elem) {
  elem.quantity = 1;
});

localStorage.setItem("mycart", JSON.stringify(Procuctsssarray));

displayCart(Procuctsssarray);

function displayCart(temp) {
  document.getElementById("productBox").textContent="";
  temp.map(function (elem,index) {
   var maindiv = document.createElement("div");
    maindiv.id = "recbox";

    let imgDiv = document.createElement("div");
    imgDiv.id = "forimage";

    let image = document.createElement("img");
    image.src = elem.img1;

    imgDiv.append(image);

    let descriptionDiv = document.createElement("div");
    descriptionDiv.id = "dressnames";

    let dressName = document.createElement("h3");
    dressName.textContent = elem.title;

    let size = document.createElement("p");
    size.textContent = "Size: M";

    let price1 = document.createElement("p");
    price1.textContent = elem.price1;

    let price2 = document.createElement("p");
    price2.style.textDecoration = "line-through";
    price2.textContent = elem.price2;

    let Quantity = document.createElement("select");

    Quantity.id = "qty";

    let opt0 = document.createElement("option");
    opt0.setAttribute('value','')
    opt0.textContent = "select quantity";
    let opt1 = document.createElement("option");
    opt1.setAttribute('value','1')
    opt1.textContent = "1";


    let opt2 = document.createElement("option");
    opt2.setAttribute('value','2')
    opt2.textContent = "2";

    let opt3 = document.createElement("option");
    opt3.setAttribute('value','3')
    opt3.textContent = "3";

    let opt4 = document.createElement("option");
    opt4.setAttribute('value','4')
    opt4.textContent = "4";

    let opt5 = document.createElement("option");
    opt5.setAttribute('value',"5")
    opt5.textContent = "5";

    let opt6 = document.createElement("option");
    opt6.setAttribute('value',"6")
    opt6.textContent = "6";

    let opt7 = document.createElement("option");
    opt7.setAttribute('value',"7")
    opt7.textContent = "7";

    let removebtn= document.createElement("button")
    removebtn.textContent="Remove";
    removebtn.addEventListener('click',function(){
      removeItem(elem,index)
    })


    Quantity.append(opt0,opt1, opt2, opt3, opt3, opt4, opt5, opt6, opt7);
    
    descriptionDiv.append(dressName, size, Quantity, price1, price2,removebtn);
    
    Quantity.addEventListener('change',function(){
      quantity(elem,index,maindiv)
    })
    maindiv.append(imgDiv, descriptionDiv);
    document.getElementById("productBox").append(maindiv);
  });
  totalprice();


}

//reduce function


  function totalprice (){
    let subtotal = Procuctsssarray.reduce(function(elem,curr){
        return elem + Number(curr.price1*curr.quantity);
    },0)
    document.getElementById("subtotalll1").innerText = `${subtotal}`;
    document.getElementById("subtotalll2").innerText = `${subtotal}`;

    localStorage.setItem("local-subtotal",subtotal)
}

function quantity(elem,index,div){
  let quantity = div.querySelector("#qty").value;
  elem.quantity = Number(quantity);
  console.log(elem)
  localStorage.setItem("mycart", JSON.stringify(Procuctsssarray));
  
  displayCart(Procuctsssarray);
}
 
function removeItem(elem,index){
  event.preventDefault();
  Procuctsssarray.splice(index,1);   
  localStorage.setItem("mycart", JSON.stringify(Procuctsssarray));
  displayCart(Procuctsssarray);
 

}