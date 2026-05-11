document.addEventListener('DOMContentLoaded', () => {

    // Menu Button JS
    const responsiveMenuButton = document.getElementById("toggleMenu");
    const navBarLinks = document.querySelector('.navbar-links');
    const allNavLinks = document.querySelectorAll('.navbar-links li');

    responsiveMenuButton.addEventListener('click', () => {
        responsiveMenuButton.classList.toggle('open');
        navBarLinks.classList.toggle('open');
    });

    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            navBarLinks.classList.remove('open');
            responsiveMenuButton.classList.remove('open');
        });
    });


    // Dark Mode JS
    window.darkMode = function () {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }


    // Image Slideshow JS
    let slideIndex = 1;
    showSlides(slideIndex);

    window.plusSlides = function (n) {
        showSlides(slideIndex += n);
    }

    window.currentSlide = function (n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (slides.length === 0) return;

        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

});