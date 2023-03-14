var dataArrls = JSON.parse(localStorage.getItem("procjectLstorage"))||[];

displayProduct();

function displayProduct(){
    dataArrls.map(function(elem,index){

        var productCard = document.createElement("div");
        
        var img = document.createElement("img");
        img.setAttribute("src",elem.img_url);
        img.setAttribute("alt",elem.category);
        console.log(img)

        var name = document.createElement("h4");
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
    })
}

function addtocart(index){

}