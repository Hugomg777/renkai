// banner principal

(() => {
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
})();

// depoimentos
(() => {
    const array = ["https://images.unsplash.com/photo-1559565779-302744980c7c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1609949163470-1c83a0aba3fa?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1616123654498-f864ac762231?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    setInterval(() => {
        testimonials[currentIndex].classList.remove('active');
        document.querySelector("#testimonial").style.backgroundImage = "url('"+array[currentIndex]+"')";
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add('active');
    }, 6000);
})();


// FAQ
(() => {
    document.addEventListener("DOMContentLoaded", () => {
        const faqs = document.querySelectorAll(".faq h2");
        faqs.forEach(faq => {
            faq.addEventListener("click", () => {
                faq.parentElement.classList.toggle("active");
            });
        });
    });
})();

