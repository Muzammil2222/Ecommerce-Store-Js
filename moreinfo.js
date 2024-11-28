console.log("Loading product details...");

const productDetailsDiv = document.querySelector("#product-details");

const productId = localStorage.getItem("id");

if (productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(product => {
            console.log(product);

            productDetailsDiv.innerHTML = `
                <div class="product">
                    <img src="${product.image}" alt="${product.title}" width="200px">
                    <h1>${product.title}</h1>
                    <h2>Price: $${product.price}</h2>
                    <p>${product.description}</p>
                    <h3>Category: ${product.category}</h3>
                </div>
            `;
        })
        .catch(err => console.error("Error fetching product details:", err));
} else {
    productDetailsDiv.innerHTML = "<p>No product selected. Go back and choose a product.</p>";
}
function goBack() {
    window.location.href = "index.html";
}