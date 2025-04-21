 // Portfolio Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const closeMenu = document.querySelector('.close-menu');
    
    // Open menu when clicking hamburger
    hamburger.addEventListener('click', function() {
        navMenu.classList.add('active');
    });
    
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navMenu.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInside && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});
