document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('#navbar ul li a');
    const sections = document.querySelectorAll('section');

    // Define colors for each section
    const sectionColors = {
        '#home': '#B0E0E6', // Powder Blue
        '#about': '#FFB6C1', // Light Pink
        '#services': '#98FB98', // Pale Green
        '#contact': '#FFD700'  // Gold
    };

    // Change style on scroll
    window.addEventListener('scroll', () => {
        header.classList.toggle('scroll-active', window.scrollY > 0);

        // Highlight the active section in the navbar
        let fromTop = window.scrollY + header.offsetHeight;

        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    // Smooth scrolling and change color on click
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Change the background color of the section
            const targetSection = document.querySelector(this.getAttribute('href'));
            const color = sectionColors[this.getAttribute('href')];
            targetSection.style.backgroundColor = color;
        });
    });

    // Initialize section colors
    sections.forEach(section => {
        section.style.backgroundColor = sectionColors['#' + section.id];
    });
});
