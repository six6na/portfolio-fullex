$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
    anchors: ['YunasPortfolio', 'About', 'Works','Contact'],
    menu: '#menu',
    navigation: true,
    navigationTooltips: ['YunasPortfolio', 'About', 'Works','Contact'],
  });

});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});