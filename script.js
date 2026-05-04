let cart = [];

// Load from storage
function loadCart() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
}

// Add to Cart
function addToCart(product, price) {
    loadCart();

    cart.push({
        product: product,
        price: Number(price)
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product + " added to cart!");
}

// Display Cart
function displayCart() {
    loadCart();

    let cartList = document.getElementById("cartItems");
    let total = 0;

    cartList.innerHTML = "";

    cart.forEach(item => {

        let price = Number(item.price);

        let li = document.createElement("li");
        li.textContent = item.product + "\u20B9" + price;

        cartList.appendChild(li);

        total += price;
    });

    document.getElementById("total").innerText = "Total: \u20B9" + total;
}

// Clear Cart
function clearCart() {
    localStorage.clear();
    cart = [];

    document.getElementById("cartItems").innerHTML = "";
    document.getElementById("total").innerText = "Total: \u20B9";
}