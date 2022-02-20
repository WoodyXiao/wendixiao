const mySwiper = new Swiper(".swiper", {
  // direction: "vertical", // 垂直切换选项
  loop: true, // 循环模式选项

  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // // 如果需要滚动条
  // scrollbar: {
  //     el: ".swiper-scrollbar",
  // },

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});

// const $nextBtn = document.getElementById("btn-next");
// const $prevBtn = document.getElementById("btn-prev");

// $nextBtn.addEventListener(
//     "click",
//     () => {
//         mySwiper.slideNext();
//     },
//     false
// );
// $prevBtn.addEventListener(
//     "click",
//     () => {
//         mySwiper.slidePrev();
//     },
//     false
// );

// const $indexBtns = document.querySelectorAll(".btn-index");
// for (const $el of $indexBtns) {
//     $el.addEventListener(
//         "click",
//         () => {
//             mySwiper.slideTo($el.dataset.index);
//         },
//         false
//     );
// }
