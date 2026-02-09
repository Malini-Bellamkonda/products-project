document.addEventListener("DOMContentLoaded",()=>{
    displaycart()
})
function displaycart(){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");
    cartContent.innerHTML="";
    let totalBill=0;
    if(cart.length===0){
        cartContent.innerHTML=`<p>Your cart is empty.Start Shopping.....</p>`
    }
    cart.map((product,i)=>{
        totalBill +=Math.round((product.price)*90);
        // console.log(product);
        let newProd=document.createElement("div")
        newProd.setAttribute("class","prod-info")
        newProd.innerHTML=`
        <main>
            <div id="maincontainer">
                <div id="image">
                    <img src="${product.thumbnail}"/>
                </div>
                <div id="content">
                    <h1>${product.title}</h1>
                    <p><b>Availability:</b>${product.availabilityStatus}</p>
                    <p><b>Category:</b>${product.category}</p>
                    <p><b>Return Policy:</b>${product.returnPolicy}</p>
                    <p><b>Shipping Information:</b>${product.shippinginformation}</p>
                    <p><b>Stock:</b>${product.stock}</p>
                    <p><b>Warranty Information:</b>${product.warrantyInformation}</p>
                    <p><b>Price:₹  </b>${Math.round(product.price.toFixed(2)*90)}</p>
                </div>
                <button id="remove" onclick="RemoveFromCart(${i})">Remove</button>   
            </div> 
        </main>
        `;
        cartContent.append(newProd)
        
    });
    totalPrice.innerHTML=`<h1>Total Price:₹${totalBill.toFixed(2,)}</h1>`
}
function RemoveFromCart(index){
    // console.log(index,"removeCart");
    let cart=JSON.parse(localStorage.getItem("cart"));
    // console.log(cart);
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    // console.log(cart);
    displaycart();
}