const openNavBtn = document.querySelector(".fa-bars");
const swiperContainer = document.querySelector(".swiper-container");
const navigation = document.querySelector(".navigation");
const closeNavBtn = document.querySelector(".fa-times");
var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

openNavBtn.addEventListener("click", openingNavigation);
closeNavBtn.addEventListener("click", closingNavigation);

function openingNavigation() {
  navigation.classList.add("active");
}

function closingNavigation() {
  navigation.classList.remove("active");
  console.log("bla bla");
}
