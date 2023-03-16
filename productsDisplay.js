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
            // btn.addEventListener("click",function(){
            //     addtocart(index);
            // })

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
            // btn.addEventListener("click",function(){
            //     addtocart(index);
            // })

            productCard.append(img,name,emi,price,btn);
            document.getElementById("productRegion-Card").append(productCard);
        }
    })
}

function addtocart(index){

}