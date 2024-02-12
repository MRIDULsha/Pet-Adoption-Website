function slideshow(selector, duration) {
    var slides = document.querySelectorAll(selector);
    var currentSlide = 0;

    function showSlide(index) {
        slides.forEach(function (slide) {
            slide.style.display = 'none';
        });

        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    setInterval(nextSlide, duration);
}

slideshow(".mainimg", 10000); 