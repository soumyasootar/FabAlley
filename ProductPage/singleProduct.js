// let Product = [{
//     "id": "1",
//     "category": "tops",
//     "title": "Pink White Floral Ruffle Sleeve Peplum Top",
//     "discount": "56",
//     "price2": "1450",
//     "price1": "638",
//     "site": "https://www.faballey.com/pink-white-floral-ruffle-sleeve-peplum-top-78/prdt",
//     "img1": "https://img.faballey.com/images/Product/TOP05210Z/1.jpg",
//     "img2": "https://img.faballey.com/images/Product/TOP05210Z/d4.jpg",
//     "img3": "https://img.faballey.com/images/Product/TOP05210Z/d5.jpg",
//     "img4": "https://img.faballey.com/images/Product/TOP05210Z/d8.jpg"
//   },]



let viewProduct=JSON.parse(localStorage.getItem("cart"));
console.log(viewProduct)

displayThis(viewProduct);

function displayThis(ele){
    console.log(ele)
    document.querySelector("#Single_Page_container").innerHTML=
    `
    <div id="head_single_page">
          <span>HOME</span>
          <span id="product_type">${ele.category}</span>
          <span>PEPLUM TOPS</span>
          <span>TRENDS</span>
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
              <button id="add_to_bag">ADD TO BAG</button>
              <button id="wishllist"><i class="fa-regular fa-heart"></i> ADD TO WISHLIST</button>
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

