let CARTSarray= [
    {
      "id": "1",
      "category": "tops",
      "title": "Pink White Floral Ruffle Sleeve Peplum Top",
      "discount": "56",
      "price2": "1450",
      "price1": "638",
      "site": "https://www.faballey.com/pink-white-floral-ruffle-sleeve-peplum-top-78/prdt",
      "img1": "https://img.faballey.com/images/Product/TOP05210Z/1.jpg",
      "img2": "https://img.faballey.com/images/Product/TOP05210Z/d4.jpg",
      "img3": "https://img.faballey.com/images/Product/TOP05210Z/d5.jpg",
    }
 
     
]

let Procuctsssarray= JSON.parse(localStorage.getItem("mycart")) || [];

 displayCart();

function displayCart(){
    console.log('hello')
    CARTSarray.forEach(function(elem){
        var maindiv= document.createElement('div');
          maindiv.id='recbox';

          let imgDiv = document.createElement("div");
          imgDiv.id = 'forimage';

          let image = document.createElement("img");
          image.src = elem.img1;

          imgDiv.append(image);

          let descriptionDiv = document.createElement("div");
          descriptionDiv.id = "dressnames"

          let dressName = document.createElement("h3");
          dressName.textContent = elem.title;

          let size = document.createElement("p");
          size.textContent = "M";

          let Quantity = document.createElement("select");
          Quantity.id = "qty";

          let opt2 = document.createElement("option");
          opt2.textContent = '2';

          let opt3 = document.createElement("option");
          opt3.textContent = '3';

          let opt4 = document.createElement("option");
          opt4.textContent = '4';

          let opt5 = document.createElement("option");
          opt5.textContent = '5';

          let opt6 = document.createElement("option");
          opt6.textContent = '6';

          let opt7 = document.createElement("option");
          opt7.textContent = '7';

          Quantity.append(opt2, opt3, opt3, opt4, opt5, opt6, opt7);

          descriptionDiv.append(dressName, size, Quantity);

          maindiv.append(imgDiv, descriptionDiv);
      document.getElementById("productBox").append(maindiv);
            
    })

    

}

