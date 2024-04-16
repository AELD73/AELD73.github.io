document.addEventListener("DOMContentLoaded", function() {
    let sliderInner = document.querySelector(".slider-inner");
    let slides = sliderInner.querySelectorAll(".slide");

    let index = 0;
    let totalSlides = slides.length;

    function showNextSlide() {
        slides[index].style.display = "none";
        index = (index + 1) % totalSlides;
        slides[index].style.display = "block";
    }

    // Ocultar todas las diapositivas excepto la primera
    for (let i = 1; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }

    setInterval(showNextSlide, 3000);
});
