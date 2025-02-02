// Image slideshow functionality
function initializeCarousels() {
    const carousels = document.querySelectorAll('.about-carousel');
    
    carousels.forEach(carousel => {
        const items = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;
        
        // Show first image immediately
        items[currentIndex].classList.add('active');
        
        // Auto-rotate every 5 seconds
        const interval = setInterval(() => {
            items[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].classList.add('active');
        }, 5000);
        
        // Pause on hover
        carousel.addEventListener('mouseenter', () => clearInterval(interval));
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeCarousels);