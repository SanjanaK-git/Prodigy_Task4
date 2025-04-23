// Toggle Menu Icon and Navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});

// Smooth Scroll to Sections
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Smooth scroll to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        // Close the navbar on mobile
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    });
});

// Highlight Active Link on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Navbar
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Initialize ScrollReveal
ScrollReveal({
    distance: '60px',
    duration: 1500,
    delay: 300,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left', duration: 1200 });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right', duration: 1200 });

// Initialize Typed.js
const typed = new typed('.multiple.text', {

    strings: ['Creative Front-End Developer', 'Innovative Web Designer', 'Passionate UI/UX Enthusiast'],

    typeSpeed: 80,

    backSpeed: 50,

    backDelay: 1200,

    loop: true,

    cursorChar: '|', // Custom cursor character

});