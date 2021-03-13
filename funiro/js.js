let find = document.querySelector(".find");
let finder = document.querySelector("#finder");
find.addEventListener("click", function () {
  if (finder.value == "") {
    finder.classList.add("forPlace");
    finder.placeholder = "you have not entered anything!";
  }
});

new Swiper(".swiper1", {
  navigation: {
    nextEl: ".slider-header-right",
    prevEl: ".slider-header-left",
  },
  pagination: {
    el: ".pagination-wrap",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 1500,
  },
  loop: true,
  effect: "fade",
});

new Swiper(".swiper2", {
  navigation: {
    nextEl: ".swiper-button-section2-next",
  },
  pagination: {
    el: ".pagination-wrap",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 1500,
  },
  loop: true,
  slidesPerView: 2.6,
  spaceBetween: 230,
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 20
    // },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30
    // },
    // when window width is >= 640px
    // 1400: {
    //   spaceBetween: 100
    // }
  }
});

new Swiper(".swiper3", {
  navigation: {
    nextEl: ".swiper-button-section3-next",
    prevEl: ".swiper-button-section3-prev",
  },
  pagination: {
    el: ".swiper3-pagination",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 1900,
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 130,
  centeredSlides: true,
});
