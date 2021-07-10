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

/* TOOGLE CLASS */
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
/* END TOOGLE CLASS */

/* MODAL */
$(document).ready(function() {
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });
});
/* END MODAL */

/* VALIDATE */
$(document).ready(function() {
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: 'Пожалуйста, введите Ваше имя',
                phone: 'Пожалуйста введите Ваш номер телефона',
                email: {
                    required: 'Нам нужен Ваш E-mail для контакта с Вами',
                    email: 'Ваш E-mail должен соответствовать форме name@domain.com'
                }
            }
        });
    };
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
/* END VALIDATE */

/* MASK */
$('input[name=phone]').mask('+7 (999) 999-99-99');
/* END MASK */

/* MAILER */
$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'mailer/smart.php',
        data: $(this).serialize()
    }).done(function() {
        $(this).find('input').val('');
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    return false;
});
/* END MAILER */

/* SCROLLY PAGEUP */
$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    }   else {
        $('.pageup').fadeOut();
    }
});
/* END SCROLLY PAGEUP */

/* SLOW SCROLL */
$('.pageup').click(function(){
    const _href = $(this).attr('href');
    $('html,body').animate({scrollTop: $(_href).offset().top+'px'});
    return false;
});
/* END SLOW SCROLL */

/* ANIMATION */
    
});
new WOW().init();

