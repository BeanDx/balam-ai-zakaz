document.addEventListener('DOMContentLoaded', function () {
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

  const menuLinks = document.querySelectorAll('.menu__item a');

  menuLinks.forEach((link, index) => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); 
          swiper.slideTo(index);
      });
  });

  // FAQ
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
});
