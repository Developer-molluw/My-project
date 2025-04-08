
// Menonaktifkan tombol jika kuantitas lebih dari 100
document.getElementById('quantity').addEventListener('input', function() {
    const quantity = this.value;
    const button = document.getElementById('order-button');
    if (quantity > 100) {
        button.disabled = true;
        alert("Jumlah tidak bisa lebih dari 100");
    } else {
        button.disabled = false;
    }
});



        // Product prices
        const productPrices = {
            'coffe': 40000,
            'tea': 55000,
            'cake': 70000,
            'Maccha': 55000,
            'Roti': 45000,
            'brownies' : 50000,
        };

        // Function to update the total price when the product or quantity changes
        function updateTotalPrice() {
            const product = document.getElementById('product').value;
            const quantity = document.getElementById('quantity').value;
            const pricePerUnit = productPrices[product];
            const totalPrice = pricePerUnit * quantity;
            
            // Display the total price
            document.getElementById('total-price').innerText = `Total Price: Rp ${totalPrice.toLocaleString()}`;
        }

        // Redirect user to WhatsApp with the order details
        function redirectToWhatsApp() {
            const product = document.getElementById('product').value;
            const quantity = document.getElementById('quantity').value;
            const email = document.getElementById('email').value;

            // Get product details
            let productName = '';
            let productPrice = 0;

            if (product === 'coffe') {
                productName = 'Espresso Coffee';
                productPrice = 40000;
            } else if (product === 'tea') {
                productName = 'Cappuccino Coffee';
                productPrice = 55000;
            } else if (product === 'cake') {
                productName = 'Americano Coffee';
                productPrice = 70000;
            } else if (product === 'Maccha') {
                productName = 'Maccha Tea';
                productPrice = 55000;
            } else if (product === 'Roti') {
                productName = 'Croissant';
                productPrice = 45000;
            }
            else if (product === 'brownies') {
                productName = 'Brownies';
                productPrice = 50000;
            }

            // Calculate total price
            const totalPrice = productPrice * quantity;
            

            // Format message for WhatsApp
            const message = `I would like to order ${quantity} ${productName}(s) for a total of Rp ${totalPrice.toLocaleString()}.\nMy email is: ${email}`;

            // WhatsApp number
            const waNumber = '+6281353018785';  // Replace with your WhatsApp number

            // WhatsApp link (Make sure the number is in international format)
            const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
            window.location.href = waLink;
        }

        // Initialize total price on page load
        window.onload = updateTotalPrice;

        
    