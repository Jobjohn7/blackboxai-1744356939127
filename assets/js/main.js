// Main JavaScript file for global functionality

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Utility function to format number with commas
function formatNumber(number) {
    return new Intl.NumberFormat('en-US').format(number);
}

// Form validation
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('border-red-500');
            
            // Add error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'text-red-500 text-sm mt-1';
            errorDiv.textContent = 'This field is required';
            
            // Remove existing error message if any
            const existingError = input.parentElement.querySelector('.text-red-500');
            if (existingError) {
                existingError.remove();
            }
            
            input.parentElement.appendChild(errorDiv);
        } else {
            input.classList.remove('border-red-500');
            const existingError = input.parentElement.querySelector('.text-red-500');
            if (existingError) {
                existingError.remove();
            }
        }
    });

    return isValid;
}

// Handle favorite properties
function toggleFavorite(propertyId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (favorites.includes(propertyId)) {
        favorites = favorites.filter(id => id !== propertyId);
    } else {
        favorites.push(propertyId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButton(propertyId);
}

// Update favorite button appearance
function updateFavoriteButton(propertyId) {
    const button = document.querySelector(`[data-favorite-id="${propertyId}"]`);
    if (!button) return;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const isFavorite = favorites.includes(propertyId);
    
    button.innerHTML = isFavorite ? 
        '<i class="fas fa-heart text-red-500"></i>' : 
        '<i class="far fa-heart"></i>';
}

// Search functionality
function handleSearch(event) {
    event.preventDefault();
    const searchForm = event.target;
    const formData = new FormData(searchForm);
    
    // Build query string
    const params = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
        if (value) params.append(key, value);
    }
    
    // Redirect to listings page with search parameters
    window.location.href = `/listings.html?${params.toString()}`;
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Handle mobile menu
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Handle search form
    const searchForm = document.querySelector('#search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }

    // Initialize favorite buttons
    const favoriteButtons = document.querySelectorAll('[data-favorite-id]');
    favoriteButtons.forEach(button => {
        const propertyId = button.dataset.favoriteId;
        updateFavoriteButton(propertyId);
        
        button.addEventListener('click', () => toggleFavorite(propertyId));
    });
});
