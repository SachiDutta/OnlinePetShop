// Get the modal and cart elements
const cartCount = document.getElementById('cart-count');

// Function to update the cart count (both in index and cart page)
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.innerText = cartItems.length;
}

// Function to show the modal when clicking "Buy Now" button
function showModal(dogName, dogPrice) {
    modalDogName.innerText = dogName;
    modalPrice.innerText = dogPrice;
    modal.style.display = 'flex'; // Show the modal
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none'; // Hide the modal
}

// Handle the "Buy Now" button click event
const buyNowButtons = document.querySelectorAll('.buy-now-btn');

buyNowButtons.forEach((button) => {
    button.addEventListener('click', () => {

        const dogCard = button.closest('.dog-card');

        // (Fixed Typo: 'ogCard' to 'dogCard')
        const dogName = dogCard.querySelector('.dog-details em').innerText;

        const dogPrice = dogCard.querySelector('.dog-details p').innerText.includes('months') 
            ? 100 
            : 200; // Placeholder price logic

        
        selectedDogName = dogName;
        selectedDogPrice = dogPrice;

        
        // Show the modal with selected dog details
        showModal(dogName, dogPrice);
    });
});


// Confirm booking - Add dog to cart
confirmBookingBtn.addEventListener('click', () => {

    // Fetch cart from local storage or create empty array
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected dog to cart
    
    cartItems.push({
        name: selectedDogName,
        price: selectedDogPrice
    });

    // Save updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    
    // Update cart count on the home page
    updateCartCount();

    
    // Close the modal after confirming the booking
    closeModal();
});



// Cancel booking - Close the modal
cancelBookingBtn.addEventListener('click', closeModal);



// Load cart items on cart page
window.addEventListener('load', () => {

    
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-items-container');

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>YOUR CART IS EMPTY</p>';
    } 
        
    else'
        {
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p><strong>Name:</strong> ${item.name}</p>
                <p><strong>Price:</strong> $${item.price}</p>
            `;
            
            cartContainer.appendChild(itemElement);
        });
    }
});

