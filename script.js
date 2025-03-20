// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    alert('Mobile menu would open here');
    // In a real implementation, you would toggle a class on the menu element
    // const mobileMenu = document.querySelector('.mobile-menu');
    // mobileMenu.classList.toggle('active');
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// Simple animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.feature-card, .screenshot-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  // Set initial state for animated elements
  const animatedElements = document.querySelectorAll('.feature-card, .screenshot-card');
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Run animation on load
  animateOnScroll();
  
  // Run animation on scroll
  window.addEventListener('scroll', animateOnScroll);
});