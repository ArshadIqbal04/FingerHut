var dataArrls = JSON.parse(localStorage.getItem("procjectLstorage"))||[];

displayProduct();

function displayProduct(){
    document.getElementById("productRegion-Card").textContent="";
    var count = 1;
    dataArrls.map(function(elem,index){
        if(count<=16){
            count++;
            var productCard = document.createElement("div");
            
            var img = document.createElement("img");
            img.setAttribute("src",elem.img_url);
            img.setAttribute("alt",elem.category);
            console.log(img)

            var name = document.createElement("div");
            name.textContent=elem.name;
            
            var emi = document.createElement("p");
            emi.textContent="$"+elem.emiPrice+" /month";
            
            var price = document.createElement("p");
            price.textContent="$"+elem.price;
            
            var btn = document.createElement("button");
            btn.textContent="Add to Cart";
            btn.addEventListener("click",function(){
                addtocart(index);
            })

            productCard.append(img,name,emi,price,btn);
            document.getElementById("productRegion-Card").append(productCard);    
        }
    })
}

document.getElementById("electronics").addEventListener("click",function(){
    itemsDisplay("Electronics")
});
document.getElementById("shoe").addEventListener("click",function(){
    itemsDisplay("Shoes")
});
document.getElementById("cloth").addEventListener("click",function(){
    itemsDisplay("Cloth")
});

function itemsDisplay(cat){
    document.getElementById("productRegion-Card").textContent="";
    var count = 1;
    dataArrls.map(function(elem,index){
        if(elem.category==cat && count<=16 ){
            console.log("electronics")
            count++;
            var productCard = document.createElement("div");
            
            var img = document.createElement("img");
            img.setAttribute("src",elem.img_url);
            img.setAttribute("alt",elem.category);
            console.log(img)

            var name = document.createElement("div");
            name.textContent=elem.name;
            
            var emi = document.createElement("p");
            emi.textContent="$"+elem.emiPrice+" /month";
            
            var price = document.createElement("p");
            price.textContent="$"+elem.price;
            
            var btn = document.createElement("button");
            btn.textContent="Add to Cart";
            btn.addEventListener("click",function(){
                addtocart(index);
            })

            productCard.append(img,name,emi,price,btn);
            document.getElementById("productRegion-Card").append(productCard);
        }
    })
}

document.getElementById("puma").addEventListener("click",function(){
    brandDisplay("Puma")
});
document.getElementById("reebook").addEventListener("click",function(){
    brandDisplay("Reebook")
});
document.getElementById("new-balance").addEventListener("click",function(){
    brandDisplay("New Balance")
});
document.getElementById("apple").addEventListener("click",function(){
    brandDisplay("Apple")
});
document.getElementById("samsung").addEventListener("click",function(){
    brandDisplay("Samsung")
});

function brandDisplay(cat){
    document.getElementById("productRegion-Card").textContent="";
    var count = 1;
    dataArrls.map(function(elem,index){
        if(elem.brand==cat && count<=16 ){
            console.log("electronics")
            count++;
            var productCard = document.createElement("div");
            
            var img = document.createElement("img");
            img.setAttribute("src",elem.img_url);
            img.setAttribute("alt",elem.category);
            console.log(img)

            var name = document.createElement("div");
            name.textContent=elem.name;
            
            var emi = document.createElement("p");
            emi.textContent="$"+elem.emiPrice+" /month";
            
            var price = document.createElement("p");
            price.textContent="$"+elem.price;
            
            var btn = document.createElement("button");
            btn.textContent="Add to Cart";
            btn.addEventListener("click",function(){
                addtocart(index);
            })

            productCard.append(img,name,emi,price,btn);
            document.getElementById("productRegion-Card").append(productCard);
        }
    })
}

document.getElementById("female").addEventListener("click",function(){
    genderDisplay("Female")
});
document.getElementById("male").addEventListener("click",function(){
    genderDisplay("Male")
});

function genderDisplay(cat){
    document.getElementById("productRegion-Card").textContent="";
    var count = 1;
    dataArrls.map(function(elem,index){
        if(elem.gender==cat && count<=16 ){
            console.log("electronics")
            count++;
            var productCard = document.createElement("div");
            
            var img = document.createElement("img");
            img.setAttribute("src",elem.img_url);
            img.setAttribute("alt",elem.category);
            console.log(img)

            var name = document.createElement("div");
            name.textContent=elem.name;
            
            var emi = document.createElement("p");
            emi.textContent="$"+elem.emiPrice+" /month";
            
            var price = document.createElement("p");
            price.textContent="$"+elem.price;
            
            var btn = document.createElement("button");
            btn.textContent="Add to Cart";
            btn.addEventListener("click",function(){
                addtocart(index);
            })

            productCard.append(img,name,emi,price,btn);
            document.getElementById("productRegion-Card").append(productCard);
        }
    })
}

document.getElementById("hightoLow").addEventListener("click",hightoLow);
document.getElementById("lowtoHigh").addEventListener("click",lowtoHigh);

function hightoLow(){
 dataArrls.sort(function(a,b){
    return b.price - a.price;
 })
 displayProduct();
}

function lowtoHigh(){
    dataArrls.sort(function(a,b){
        return a.price - b.price;
    })
    displayProduct();
}

var addtocartArr = JSON.parse(localStorage.getItem("addtoCartls"))||[];

function addtocart(index){
    // addtocartArr.push(dataArrls[index]);
    // localStorage.setItem("addtoCartls",JSON.stringify(addtocartArr));
    addtocartObj = {
        img_url: dataArrls[index].img_url,
        name:dataArrls[index].name,
        emiPrice: dataArrls[index].emiPrice,
        price: dataArrls[index].price,
        category: dataArrls[index].category,
        brand: dataArrls[index].brand,
        gender: dataArrls[index].gender,
        count: 1,
    }
    addtocartArr.push(addtocartObj);
    localStorage.setItem("addtoCartls",JSON.stringify(addtocartArr));
    alert("item Add to cart")
}