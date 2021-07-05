/* SLIDER */
const next = document.getElementById('btn-next'),
    prev = document.getElementById('btn-prev'),
    slides = document.querySelectorAll('.carousel__item');

let index = 0;
let autoplayInterval = null;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('carousel__item_active');
    }
    slides[n].classList.add('carousel__item_active');
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
setInterval(nextSlide, 4000);
/*END SLIDER*/

/* TABS */
const tabs = document.getElementById('tabs'),
    contents = document.querySelectorAll('.catalog__content');

const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('catalog__tab_active');
    }
    el.classList.add('catalog__tab_active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('catalog__content_active');
        if (contents[i].dataset.content === currTab) {
            contents[i].classList.add('catalog__content_active');
        }
    }
});
/*END TABS*/
$(document).ready(function() {
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});