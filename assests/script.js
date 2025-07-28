let quantity = 0;
let basePrice = 999; // Single item price

function updateQuantity(change) {
    quantity = Math.max(0, quantity + change); // Ensure quantity is never negative
    document.getElementById("quantity").innerText = quantity;
    document.querySelector(".price").innerText = (basePrice * quantity).toLocaleString(); // Update price
}

function addToCart() {
    let quantity = parseInt(document.getElementById("quantity").innerText); // Ensure quantity is a number
    let price = 999; // Base price of the product
    let totalPrice = price * quantity; // Calculate total price

    let url = `product-detail.html?name=Floral Dress&description=Elegant floral print dress for any occasion.&price=${price}&quantity=${quantity}&totalPrice=${totalPrice}&image=assests/img/product-1.jpg`;
    window.location.href = url; // Redirect to details page with updated price
}
