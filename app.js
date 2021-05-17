const openNavBtn = document.querySelector(".fa-bars");
const swiperContainer = document.querySelector(".swiper-container");
const navigation = document.querySelector(".navigation");
const closeNavBtn = document.querySelector(".fa-times");
const openPriceBtns = document.querySelectorAll(".body--uncover");
const hidePriceBtns = document.querySelectorAll(".body--hide");
const cardsContainers = document.querySelectorAll(".container");
const priceCards = document.querySelectorAll(".priceList__card");

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

openPriceBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    openingPrices(index);
  });
});

hidePriceBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    closingPrices(index);
  });
});

function openingNavigation() {
  navigation.classList.add("active");
}

function closingNavigation() {
  navigation.classList.remove("active");
}

function openingPrices(index) {
  cardsContainers[index].classList.add("open");
  cardsContainers[index].classList.add("conditionalOpen");
  cardsContainers[index].classList.remove("conditionalClose");
  openPriceBtns[index].style.display = "none";
  hidePriceBtns[index].style.display = "block";
}

function closingPrices(index) {
  cardsContainers[index].classList.remove("open");
  cardsContainers[index].classList.remove("conditionalOpen");
  cardsContainers[index].classList.add("conditionalClose");
  openPriceBtns[index].style.display = "block";
  hidePriceBtns[index].style.display = "none";
}

jQuery("#my_nanogallery").nanogallery2({
  thumbnailHoverEffect2: "imageGrayOn",
  galleryMaxRows: 2,
  galleryDisplayMode: "rows",
});
