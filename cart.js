var cartArr = JSON.parse(localStorage.getItem("addtoCartls"))||[];

cartitemDisplay();

function cartitemDisplay(){
    console.log("546789");
    document.querySelector(".cartItems").textContent="";
    cartArr.map(function(elem,index){
        console.log("1234567899")
        var cartCard = document.createElement("div");
    
        var cartImg = document.createElement("div");

        var img = document.createElement("img");
        img.setAttribute("src",elem.img_url);
        img.setAttribute("alt","Img");

        var cartAmmount = document.createElement("div");
        var proName = document.createElement("h3");
        proName.textContent = elem.name;

        var emiDisplay = document.createElement("p");
        emiDisplay.textContent = "$"+elem.emiPrice+" /month";

        var priceDisplay = document.createElement("p")
        priceDisplay.textContent =  "$"+elem.price;

        var ammountPart = document.createElement("div");

        var carQuantity = document.createElement("div");
        
        var span = document.createElement("span");
        span.textContent = "QTY:";

        var proQuantity = document.createElement("span");
        var itemCart = elem.count;

        var minusItem = document.createElement("button");
        minusItem.textContent="-";
        minusItem.addEventListener("click", function(){
            minusFun(index);
        })

        var addItem = document.createElement("button");
        addItem.textContent="+";
        addItem.addEventListener("click", function(){
            addFun(index);
        })

        var removeDiv = document.createElement("div");
        var removeBtn = document.createElement("button");
        removeBtn.textContent="Remove"
        removeBtn.addEventListener("click",function(){
            removeIndex(index);
        })

        removeDiv.append(removeBtn);

        cartImg.append(img);
        cartAmmount.append(proName, emiDisplay, priceDisplay);
        proQuantity.append(itemCart);
        carQuantity.append(span,proQuantity,minusItem,addItem )
        ammountPart.append(carQuantity,removeDiv);

        cartCard.append(cartImg,cartAmmount,ammountPart);
        document.querySelector(".cartItems").append(cartCard);
    })
}

function minusFun(index){
    console.log(cartArr[index].count);
    if(cartArr[index].count>1){
        var i = cartArr[index].count-1;
        cartArr[index].count = i;
        localStorage.setItem("addtoCartls",JSON.stringify(cartArr))
    }
    cartitemDisplay();
    cartpayDisplay()
}

function addFun(index){ 
    console.log(cartArr[index].count);
    var i = cartArr[index].count+1;
    cartArr[index].count = i;
    localStorage.setItem("addtoCartls",JSON.stringify(cartArr))
    cartitemDisplay();
    cartpayDisplay()
}

function removeIndex(index){
    cartArr.splice(index,1);
    localStorage.setItem("addtoCartls",JSON.stringify(cartArr));
    cartitemDisplay();
    cartpayDisplay()
}


// second div total amount
cartpayDisplay()

function cartpayDisplay(){
    let totalAdd = 0;
    cartArr.map(function(elem,index){
        totalAdd+= (elem.count*elem.price);
    })
    document.querySelector("#payAmount").textContent="$ "+totalAdd+".00";
    document.querySelector("#discountPrice").textContent="$"+0+".00";
    document.querySelector("#totalPay").textContent="$ "+totalAdd+".00";
}

// document.querySelector("#discountBtn").addEventListener("click",discountBtn);

// discountBtn(){
//     let discode = document.getElementById("inputCode").value;
//     if(discode=="masai30"){
//         document.createElement("alert")
//     }
// }



