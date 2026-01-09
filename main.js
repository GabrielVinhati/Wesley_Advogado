// 3. Navbar Sticky + Scroll suave
const navbar = document.getElementById('sticky-navbar');
const navbarBtn = document.getElementById('navbar-cta');
const captureSection = document.getElementById('capture-section');

// Mostrar navbar ao rolar
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});

// Scroll suave para a primeira section
navbarBtn.addEventListener('click', () => {
    captureSection.scrollIntoView({
        behavior: 'smooth'
    });
});
