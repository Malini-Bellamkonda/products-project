let product=[]
function fetchData(){
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json();
    }).then((val)=>{
        console.log(val.products);
        product=val.products;
        localStorage.setItem("allproducts",JSON.stringify(product))
        displayProduct(product)
    })
}
function displayProduct(prod){
let output=""
prod.map((val)=>{
    output+=`
    <main>
    <div id="image">
    <img src="${val.thumbnail}"/>
    </div>
    <div id="container">
    <h3>${val.title}</h3>
    <div id="left-container">
    <h4>Rating:${val.rating}⭐⭐</h4>
    <h5>₹:${Math.ceil(val.price*92)}</h5>
    </div>
    <div id="right-container">
    <h5>Stock:${val.stock}</h5>
    <button onclick="details(${val.id})">Details</button>
    </div>
    </div>
    </main>`
})
document.getElementById("product_container").innerHTML=output;
}
fetchData();
document.getElementById("searchbar").addEventListener("input",function searchItem(event){
    let searchTerm=event.target.value.toLowerCase();
    let filteredProduct=product.filter((v)=>{
        return(
            v.title.toLowerCase().includes(searchTerm)||v.category.toLowerCase().includes(searchTerm)

        );
    });displayProduct(filteredProduct);
})
function details(productId){
    console.log(productId);
    localStorage.setItem("productId",productId);
    window.location.href="./viewDetails.html"
}





















