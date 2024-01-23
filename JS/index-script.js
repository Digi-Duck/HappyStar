// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    991: {
      //当屏幕宽度大于等于320
      slidesPerView: 3,
      spaceBetween: 20,
    },
    570: {
      //当屏幕宽度大于等于320
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      //当屏幕宽度大于等于320
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
// GoTop //
let goTop = document.querySelector(".goTop");

goTopActive();
window.addEventListener("scroll", goTopActive);

function goTopActive() {
  goTop.classList[window.scrollY >= 100 ? "add" : "remove"]("active");
}
// Lax.js 動畫
window.onload = function () {
  lax.init();

  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  lax.addElements(".about-imgL", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [0, "250", "500"],
      ],
    },
  });
};
// AOS.js 動畫

AOS.init();
