// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLeft = document.querySelector('.nav-left');
  const navRight = document.querySelector('.nav-right');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navLeft.classList.toggle('active');
      navRight.classList.toggle('active');
      
      // Animate hamburger menu
      const spans = mobileMenuToggle.querySelectorAll('span');
      spans.forEach((span, index) => {
        if (navLeft.classList.contains('active')) {
          if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
          if (index === 1) span.style.opacity = '0';
          if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          span.style.transform = 'none';
          span.style.opacity = '1';
        }
      });
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-left a, .nav-right a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLeft.classList.remove('active');
        navRight.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transform = 'none';
          span.style.opacity = '1';
        });
      });
    });
  }
});

// Gallery Navigation
document.addEventListener('DOMContentLoaded', function() {
  const setNumbers = document.querySelectorAll('.set-number');
  
  setNumbers.forEach((number, index) => {
    number.addEventListener('click', function() {
      // Remove active class from all numbers
      setNumbers.forEach(num => num.classList.remove('active'));
      // Add active class to clicked number
      this.classList.add('active');
      
      // Here you could add functionality to change gallery images
      console.log(`Gallery set ${index + 1} selected`);
    });
  });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Image loading is handled by CSS now - removed JavaScript animation to prevent issues

// Add scroll reveal animation for sections
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.gallery-preview, .about-section, .services-preview');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});

// Header scroll effect
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.main-header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = 'none';
    }
  });
});
