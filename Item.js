var Trousersrc = JSON.parse(localStorage.getItem('Trousersrc')) || [];
var Trouserprice = JSON.parse(localStorage.getItem('Trouserprice')) || [];

var all_Carts = document.getElementsByClassName("all-Carts")[0];

function displayCarts(images, prices) {
    all_Carts.innerHTML = "";
    for (let i = 0; i < prices.length; i++) {
           createCartItem(i, images[i], prices[i]);
    }
}

function  createCartItem(index,images, prices) {
    let div = document.createElement("div");
    div.className = "Item";

    var img = document.createElement("img");
    img.src = images;
    div.appendChild(img);
    var pricediv = document.createElement("div");
    pricediv.className = "price";
    let quantity = 1; 
    let priceValue = parseFloat(prices.replace('$', ''));

    let p = document.createElement("p");
    let plus=document.createElement("i")
    plus.className="fa-solid fa-plus"
  
    let minus=document.createElement("i")
    minus.className="fa-solid fa-minus mm"
    minus.style.fontSize="20px"
   
   
    plus.addEventListener("click", function () {
        quantity++;
        updatePrice();
    });

    minus.addEventListener("click", function () {
        if (quantity > 1) {
            quantity--;
            updatePrice();
        }
    });

    function updatePrice() {
        var totalPrice = priceValue * quantity;
        p.textContent = '$' + totalPrice.toFixed(2);
    }

     
    updatePrice();
    pricediv.appendChild(plus);
    pricediv.appendChild(minus);
    pricediv.appendChild(p);
    div.appendChild(pricediv);

    var button = document.createElement("button");
    var buttonval=document.createTextNode("Remove")
    button.appendChild(buttonval);


    button.addEventListener("click", function() {
      div.remove();
   });
  

    div.appendChild(button);

    all_Carts.appendChild(div);

}

displayCarts(Trousersrc,Trouserprice);
