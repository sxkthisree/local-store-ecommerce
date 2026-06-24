let cart = [];

function addToCart(product) {
cart.push(product);


const cartList = document.getElementById("cart");
const item = document.createElement("li");

item.textContent = product;
cartList.appendChild(item);


}
