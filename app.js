console.log("hello world");

const div = document.querySelector(".contaner");
const countElement = document.querySelector(".count"); 
let cartCount = 0;

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then((res) => {
        console.log(res);
        res.map((item, index) => {
            div.innerHTML += ` 
            <div class="cardc">
                <img src="${item.image}" alt="" width="150px">
                <h1>Price: ${item.price}</h1>
                <h1 class="hola">Category: ${item.category}</h1>
                <button class="but1" onclick="add(${item.id})">More Info</button>
                <button class="but1" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>`;
        });
    });

function add(id) {
    console.log(id);
    localStorage.setItem("id", id);
    window.location = 'moreinfo.html';
}

function addToCart(id) {
    console.log(id);
    localStorage.setItem("id", id);

    cartCount++;
    countElement.textContent = cartCount; 
}
