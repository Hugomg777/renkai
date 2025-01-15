// banner principal

const slides = document.querySelectorAll('.banner-slide');
const controls = document.querySelectorAll('.slider-controls button');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        controls[i].classList.toggle('active', i === index);
    });
}

controls.forEach((control, index) => {
    control.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// depoimentos
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.add('active');
});


document.getElementById('prev').addEventListener('click', () => {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    testimonials[currentIndex].classList.add('active');
    
});





