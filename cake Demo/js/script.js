// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // --- Navbar Sticky & Scroll Effect ---
  const navbar = document.getElementById("navbar");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // --- Mobile Menu Toggle ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navActions = document.querySelector(".nav-actions");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-active");
      if(navActions) {
        navActions.classList.toggle("mobile-active");
      }
      
      // Toggle Hamburger Icon
      const icon = hamburger.querySelector('i');
      if(navLinks.classList.contains("mobile-active")) {
        icon.classList.remove('ri-menu-line');
        icon.classList.add('ri-close-line');
      } else {
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-line');
      }
    });
  }

  // --- Scroll Animations (Intersection Observer) ---
  const animatedElements = document.querySelectorAll('.category-card, .product-card, .why-img, .why-content');
  
  // Initially hide elements
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  animatedElements.forEach(el => observer.observe(el));
});
