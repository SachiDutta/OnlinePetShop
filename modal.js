let cartCount = 0;

// Show the modal with the details
document.querySelectorAll('.buy-now-btn').forEach(button => {
    button.addEventListener('click', function() {
        const dogName = this.getAttribute('data-dog');
        const price = this.getAttribute('data-price');

        // Populate modal with dog details
        document.getElementById('modal-dog-name').textContent = dogName;
        document.getElementById('modal-price').textContent = price;

        // Show the modal
        document.getElementById('confirmation-modal').style.display = 'flex';
    });
});

// Handle confirmation
document.getElementById('confirm-booking').addEventListener('click', function() {
    // Increment cart count
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;

    // Close the modal
    document.getElementById('confirmation-modal').style.display = 'none';
});

// Handle cancel
document.getElementById('cancel-booking').addEventListener('click', function() {
    // Close the modal
    document.getElementById('confirmation-modal').style.display = 'none';
});
