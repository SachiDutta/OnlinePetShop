// Sample review data
const reviews = [
    { name: 'Rashmika', rating: 5, comment: 'Great variety of pets' },
    { name: 'Sakshi', rating: 4, comment: "We got our beagle from this shop, and he's absolutely adorable. The team took the time to educate us on his diet etc, It’s evident they truly care about their animals." },
];

// Function to render reviews
function renderReviews() {
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = ''; // Clear previous reviews

    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        // Convert rating to star symbols
        const ratingStars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        reviewDiv.innerHTML = `
            <h3>${review.name}</h3>
            <p class="rating">${ratingStars}</p>
            <p class="comment">${review.comment}</p>
        `;
        reviewsContainer.appendChild(reviewDiv);
    });
}

// Function to handle rating selection and deselection of individual stars
document.getElementById('ratingStars').addEventListener('click', function(event) {
    if (event.target.classList.contains('star')) {
        const selectedStar = event.target;
        const selectedRating = parseInt(selectedStar.getAttribute('data-value'));
        const stars = document.querySelectorAll('.star');
        const currentSelectedRating = getCurrentRating(stars); // Get the current rating

        if (selectedRating === currentSelectedRating) {
            // If the selected star is already part of the current rating, deselect it
            deselectStars(stars, selectedRating);
        } else {
            // Otherwise, update the stars according to the new selected rating
            selectStars(stars, selectedRating);
        }
    }
});

// Function to get the current rating (number of selected stars)
function getCurrentRating(stars) {
    let rating = 0;
    stars.forEach(star => {
        if (star.classList.contains('selected')) {
            rating = Math.max(rating, parseInt(star.getAttribute('data-value')));
        }
    });
    return rating;
}

// Function to select the stars up to the selected rating
function selectStars(stars, rating) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Function to deselect stars above a certain rating
function deselectStars(stars, rating) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue > rating) {
            star.classList.remove('selected');
        }
    });
}

// Event listener for the review form
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rating = document.querySelector('.star.selected') ? parseInt(document.querySelector('.star.selected').getAttribute('data-value')) : 0;
    const comment = document.getElementById('comment').value;

    if (name && rating && comment) {
        // Add new review
        reviews.push({ name, rating, comment });
        renderReviews();

        // Show Thank You modal
        const modal = document.getElementById('thankYouModal');
        modal.style.display = "block";

        // Clear form fields
        document.getElementById('reviewForm').reset();
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => star.classList.remove('selected'));
    }
});

// Close modal when clicking the "X"
document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('thankYouModal');
    modal.style.display = "none";
});

// Close modal if clicked outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('thankYouModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Initial render of reviews
renderReviews();