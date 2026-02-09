document.addEventListener("DOMContentLoaded",()=>{
    let productDetails=document.getElementById("productDetails");
    let allproducts=JSON.parse(localStorage.getItem("allproducts"));
    // console.log(allproducts);
    let productId=localStorage.getItem("productId");
    // console.log(productId);
    if(allproducts &&productId){
        console.log("We can show details");
        let selectedProduct=allproducts.find((v)=>{
            return v.id==productId;
        })
        // console.log(selectedProduct);
        if(selectedProduct){
            productDetails.innerHTML=`
          <main>
                <div id="container">
                <div id="image">
                    <img src="${selectedProduct.thumbnail}"/>
                </div>
                <div id="content">
                    <h3>${selectedProduct.title}</h3>
                    <p><b>Brand:</b>${selectedProduct.brand}</p>
                    <p><b>Category:</b>${selectedProduct.category}</p>
                    <p><b>Description:</b>${selectedProduct.description}</p>
                    <p><b>Price:₹</b><span style="color:red; font-size:20px;
                    font-weight:800">${Math.floor(selectedProduct.price*92)}</span></p>
                    <button id="cart">Add to Cart</button>
                    <button id="home">Back to Home</button>
                </div>
                </div>
                <div id="review">
                    <h3>Customer Reviews</h3>
                    <div id="line"></div>
                    ${selectedProduct.reviews.map((v)=>{
                        return `<p>${"❤️".repeat(v.rating)}${"🖤".repeat(5-v.rating)}</p>
                                <p id="gap">${v.comment}</p>
                                <p>By <b>${v.reviewerName}</b> on ${Date(v.date).toString()}</p>
                                <div id="line"></div>`
                    })}
                </div>
            </main>
            `;
            document.getElementById("home").addEventListener("click",()=>{
                window.location.href="index.html";
            });
            document.getElementById("cart").addEventListener("click",()=>{
                addToCart(selectedProduct);
            });
        }else{
            productDetails.innerHTML=`<p>Product not available...</p>`
        }
    }else{
        productDetails.innerHTML="<p>Product not Found.....!</p>"
    }
})
function addToCart(product){
    let cart=JSON.parse(localStorage.getItem("cart"))||[];
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Product added successfully...")
}