document.addEventListener('DOMContentLoaded', function() {

    //Smooth Scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,  //Offset for the fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    //Toggle menu visibility on small screens
    const menuToggle = document.querySelector('#menu-toggle');
    const nav = document.querySelector('nav');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
        });
    }

    //Button hover effect interaction
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    //Testimonial carousel logic 
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonialIndex = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonialIndex].classList.remove('visible');
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        testimonials[currentTestimonialIndex].classList.add('visible');
    }

    setInterval(showNextTestimonial, 5000); //Change testimonial every 5 seconds

    //Adding fade-in effect to the main content section
    const mainContent = document.querySelector('main');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const mainContentPosition = mainContent.offsetTop;
        if (scrollPosition > mainContentPosition - window.innerHeight + 100) {
            mainContent.classList.add('fade-in');
        }
    });

});
