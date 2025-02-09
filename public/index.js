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
(async () => {
    const response = await (await fetch('/banners')).json();
    
    const array = response.size ? response.result.map(r => r.src) : ["http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPzB4HkpYS052y-rij-4_a6DzIiUwWQckww&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JpyvaJSNpF1RWquk6-n4Fk8ag41wNdCHJQ&s","https://asset.japan.travel/image/upload/v1675341685/nagano/Nagano_s_id23_18.jpg","https://apaixonadosporhistoria.com.br/img/foto/galeria_1_751740192.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHzIKe_yNRARKFJIJibV5z-P3dJiX8HStdg&s","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/b0/69/4f/templo-quan-inn.jpg?w=1200&h=-1&s=1","https://www.viajaquepassa.com.br/wp-content/uploads/templo-branco-chiang-rai-1024x683.jpg","https://offloadmedia.feverup.com/saopaulosecreto.com/wp-content/uploads/2024/05/21145021/2560px-Templo_de_Salomao_-_21.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOUQPlN3hecutXvPBMujJmUGJpnSpi7c7SVg&s","https://files.mormonsud.net/wp-content/uploads/2022/10/templo-de-belem.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRHEKjPoUpOt3Kj8WjNo7KtWLkb46J2gnOw&s"];
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    document.querySelector("#testimonial").style.backgroundImage = "url('"+array[currentIndex]+"')";
    document.querySelector("#testimonial").style.backgroundColor = response.result[currentIndex].color;

    setInterval(() => {
        testimonials[currentIndex].classList.remove('active');
        document.querySelector("#testimonial").style.backgroundImage = "url('"+array[currentIndex]+"')";
        document.querySelector("#testimonial").style.backgroundColor = response.result[currentIndex].color;
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add('active');
    }, 5000);
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


(() => {
    document.querySelector('.menu-burger')
    .addEventListener('click', () => {
        document.querySelector('.backdrop')
        .classList.toggle('active')
    })

    document.querySelector('.backdrop')
    .addEventListener('click', () => {
        document.querySelector('.backdrop')
        .classList.toggle('active')
    })
})();

