/**
 * Cake Breaker - Premium Bakery
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle hamburger icon between bars and times
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    // Trigger on load
    checkReveal();
    // Trigger on scroll
    window.addEventListener('scroll', checkReveal);

    // 4. Form Submission Handling (Prevent Default for Demo)
    const customForm = document.getElementById('customForm');
    if (customForm) {
        customForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = customForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
            btn.disabled = true;

            // Simulate API Call
            setTimeout(() => {
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Request Sent!';
                btn.classList.replace('btn-primary', 'btn-whatsapp'); // turn green to indicate success temporarily
                customForm.reset();

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.replace('btn-whatsapp', 'btn-primary');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // 5. Active Link Highlight on Scroll
    const sections = document.querySelectorAll('section, header');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});
