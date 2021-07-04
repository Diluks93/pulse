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
(function($) {
    $(function() {
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
                .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });

    });
})(jQuery);
/*END TABS*/
(function($) {
    function toggleSlide(item) {
        $('item').each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
})(jQuery);