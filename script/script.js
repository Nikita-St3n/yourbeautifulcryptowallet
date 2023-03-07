// Слайдер с новостями
$(document).ready(function () {
    $('.news__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    });
});

// Бургер - меню

const burger = document.querySelector('.header__burger');
const burger_inner = document.querySelector('.header__burger-inner');
const menu = document.querySelector('.header__top-nav');
const body_doc = document.body;
const top_links = document.querySelectorAll('.header__top-nav__link');

burger.onclick = () =>{
    burger_inner.classList.toggle('active__burger');
    body_doc.classList.toggle('body_overflow_hidden');
    menu.classList.toggle('active');

    top_links.forEach((e)=>{
        e.onclick = () =>{
            burger_inner.classList.toggle('active__burger');
            body_doc.classList.toggle('body_overflow_hidden');
            menu.classList.toggle('active');
        }
    });
}

// Экран FAQ

const faq_buttons = document.querySelectorAll('.faq__btn');
const faq_chapters = document.querySelectorAll('.faq__chapter');

faq_buttons.forEach((e) => {
    e.onclick = () => {
        faq_buttons.forEach((e) => {
            e.classList.remove('active_faqBtn');
        });
        e.classList.add('active_faqBtn');

        faq_chapters.forEach((chapter) => {
            chapter.classList.remove('active_chapter');
            if (chapter.classList.toString().search(e.textContent.split('#')[1].trim())) {
                document.getElementById('' + e.textContent.split('#')[1].trim() + '').classList.add('active_chapter');
            }
        });
    }
});

const faq_question = document.querySelectorAll('.faq__chapter-question');

faq_question.forEach((e) => {
    e.onclick = () => {
        faq_question.forEach((e) => {
            e.classList.remove('active_question');
        });

        e.classList.add('active_question');

        if (document.body.clientWidth+25 < 992) {
            let title_height = $('.active_chapter').find('.faq__chapter-title').height();
            let questions_height = $('.active_chapter').find('.faq__chapter-questions').height()
            let answer_height = $(e).find('.faq__chapter-question__answer').height();

            $('.active_chapter').height(-10000);
            $('.active_chapter').height($(e).find('.faq__chapter-question__answer').height() + 34 + title_height + questions_height);
        }
    }
});

// Формы отправки
// Контакты
$("#contact__form").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
    e.preventDefault();
    var form_data = $(this).serialize(); // Собираем все данные из формы
    $.ajax({
        type: "POST", // Метод отправки
        url: "../contact.php", // Путь до php файла отправителя
        data: form_data,
        success: function () {
            $('.contact-form').trigger("reset");
            alert("Your email has been sent successfully!");
        }
    });
});
// Рассылка
$("#footer__form").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
    e.preventDefault();
    var form_data = $(this).serialize(); // Собираем все данные из формы
    $.ajax({
        type: "POST", // Метод отправки
        url: "../footer_mail.php", // Путь до php файла отправителя
        data: form_data,
        success: function () {
            alert("Your email has been sent successfully!")
            $('.footer__form').trigger("reset");
        }
    });
});

// Маска для телефона

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};
$("#phone").click(function () {
    $(this).setCursorPosition(1);
}).mask("+99 (999) 999-99-99");
