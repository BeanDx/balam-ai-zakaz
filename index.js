document.addEventListener('DOMContentLoaded', function () {
    // Инициализация Swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    // Обработка кликов по ссылкам в меню
    const menuLinks = document.querySelectorAll('.menu__item a');

    menuLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            swiper.slideTo(index);
            closeMenu(); // Закрытие меню при клике
            scrollToTop(); // Плавный скролл к началу страницы
        });
    });

    // FAQ аккордеон
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', event => {
            const answer = item.querySelector('.faq-answer');
            const toggleIcon = item.querySelector('.toggle-icon');
            if (answer.style.display === "block") {
                answer.style.display = "none";
                toggleIcon.textContent = '+';
            } else {
                answer.style.display = "block";
                toggleIcon.textContent = '−';
            }
        });
    });

    // Бургер-меню
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu__list');

    burger.addEventListener('click', function () {
        toggleMenu();
    });

    function toggleMenu() {
        menu.classList.toggle('active');
        burger.classList.toggle('toggle');
    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('toggle');
    }

    // Функция для плавного скролла к началу страницы
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});
