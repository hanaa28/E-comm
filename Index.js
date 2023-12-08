var sliderImg=document.getElementById("sliderImg")
var Imgs=["./Images/0.jpg","./Images/1.jpg","./Images/2.jpg","./Images/3.jpg"]
var imgIndex=0

setInterval(function(){
    imgIndex=(imgIndex + 1) % Imgs.length ;
sliderImg.src=Imgs[imgIndex]
},1500)
var lefticon=document.getElementById("leftIcon")
var righticon=document.getElementById("rightIcon")
lefticon.onclick=next;
righticon.onclick=pervious;
function next(){
    imgIndex=(imgIndex + 1) % Imgs.length
     sliderImg.src =Imgs[imgIndex];
     
  }
  function pervious(){
     imgIndex = (imgIndex - 1 + Imgs.length) % Imgs.length
     sliderImg.src =Imgs[imgIndex]; 
  }

  let srollrop = document.querySelector(".rightt");

window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 400) {
    srollrop.classList.add("show");
  } else {
    srollrop.classList.remove("show");
  }
//   this.scrollY >= 400 ? srollrop.classList.add("show") : srollrop.classList.remove("show");
};

// span.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

//   selection Item 
var Trousersrc=["./Images/bt.jpg","./Images/bt1.jpg","./Images/bt2.jpg","./Images/b3.jpg","./Images/b4.jpg","./Images/b5.jpg","./Images/b6.jpg","./Images/b7.jpg","./Images/bt.jpg","./Images/b6.jpg"]
var Trouserprice=["56$","52$","74$","80$","100$","200$","300$","400$","500$"]
var trouser=document.getElementById("Trousers")

var Topsrc=["./Images/t0.jpg","./Images/t1.jpg","./Images/t2.jpg","./Images/t3.jpg","./Images/t4.jpg","./Images/t5.jpg","./Images/t6.jpg","./Images/t7.jpg","./Images/t8.jpg","./Images/t9.jpg"]
var Topprice=["56$","52$","74$","80$","100$","200$","300$","400$","500$"]
var Top=document.getElementById("Top")

var allsrc=["./Images/t0.jpg","./Images/t1.jpg","./Images/s1.jpg","./Images/t3.jpg","./Images/b4.jpg","./Images/s2.jpg","./Images/t6.jpg","./Images/s3.jpg","./Images/t8.jpg","./Images/s9.jpg"]
var allprice=["56$","52$","74$","80$","100$","200$","300$","400$","500$"]
var All=document.getElementById("all")
var all_Items=document.getElementsByClassName("all-Items")[0]


function displayItems(images, prices,asignItem) {
    
    all_Items.innerHTML="";
for (let i = 0; i < prices.length; i++) {
    var div = document.createElement("div");
    div.className = "Item";

    var img = document.createElement("img");
    img.src = images[i];
    div.appendChild(img);

    var p = document.createElement("p");
    p.append(prices[i]);
    div.appendChild(p);

    var button = document.createElement("button");
    var buttonval=document.createTextNode("AddToCart")
    button.appendChild(buttonval);

    button.id=i
    button.addEventListener("click", function(event) {
      
        addToCart(asignItem,i);
    });
    div.appendChild(button);

    all_Items.appendChild(div);
    
}
}
displayItems(allsrc, allprice,'all');
Active(All);


trouser.onclick = function () {
displayItems(Trousersrc, Trouserprice,'trouser');
Active(trouser);
};

All.onclick = function () {
displayItems(allsrc, allprice,'All');
Active(All)
};

Top.onclick = function () {
displayItems(Topsrc, Topprice,'Top');
Active(Top)
};

function Active(asignItem){
    if(asignItem==Top){
    Top.style.background="#00303f"
    Top.style.color="white"
    trouser.style.background="white"
    trouser.style.color="#00303f"
    All.style.background="white"
    All.style.color="#00303f"
    }
    else if(asignItem==trouser){
    trouser.style.background="#00303f"
    trouser.style.color="white"
    All.style.background="white"
    All.style.color="#00303f"
    Top.style.background="white"
    Top.style.color="#00303f"
    }
    else if(asignItem==All){
   All.style.background="#00303f"
   All.style.color="white"
   Top.style.background="white"
   Top.style.color="#00303f"
   trouser.style.background="white"
   trouser.style.color="#00303f"
    }
}
var arrayOfItemInCartSrc =[]
var arrayOfItemInCartPrice =[]
function addToCart(asignItem,i) {
    
   if(asignItem=='Top'){
    arrayOfItemInCartSrc.push(Topsrc[i])
    arrayOfItemInCartPrice.push(Topprice[i])
    console.log("Added to Cart:",Topsrc[i],Topprice[i]);
    console.log("Added to Cart:",arrayOfItemInCartPrice)
  
   }
else if(asignItem=='trouser'){
    arrayOfItemInCartSrc.push(Trousersrc[i])
    arrayOfItemInCartPrice.push(Trouserprice[i])
     console.log("Added to Cart:",Trousersrc[i],Trousersrc[i]);
     console.log("Added to Cart:",arrayOfItemInCartPrice)
}
else if(asignItem=='All'){
    arrayOfItemInCartSrc.push(allsrc[i])
    arrayOfItemInCartPrice.push(allprice[i])
    console.log("Added to Cart:",allsrc[i],allsrc[i]);
    console.log("Added to Cart:",arrayOfItemInCartPrice)
}
localStorage.setItem('Trousersrc', JSON.stringify(arrayOfItemInCartSrc));
localStorage.setItem('Trouserprice', JSON.stringify(arrayOfItemInCartPrice))

}


// trouser.onclick=function(){
// for(var i=0;i<Trouserprice.length;i++){
//     var div=document.createElement("div")
//     div.className="Item"
//     var Img=document.createElement("img")
//     Img.src=Trousersrc[i]
//     div.appendChild(Img)
   
//     var p=document.createElement("p")
//     p.append(Trouserprice[i])
//     div.appendChild(p)
//     console.log(div)
//     all_Items.append(div)
//     // div.innerHTML=`<img src="${Trousersrc[i]}" alt="">
//     // <p>${Trouserprice[i]}</h3> <button>AddToCart</button>`
//     // all_Items.appendChild(div)
//     console.log(all_Items)


// }
// }
// Top.onclick=function(){
//     for(var i=0;i<Toprprice.length;i++){
//         var div=document.createElement("div")
//         div.className="Item"
//         var Img=document.createElement("img")
//         Img.src=Topsrc[i]
//         div.appendChild(Img)
       
//         var p=document.createElement("p")
//         p.append(Toprprice[i])
//         div.appendChild(p)
//         console.log(div)
//         all_Items.append(div)
//         // div.innerHTML=`<img src="${Trousersrc[i]}" alt="">
//         // <p>${Trouserprice[i]}</h3> <button>AddToCart</button>`
//         // all_Items.appendChild(div)
//         console.log(all_Items)
//      }
//     }