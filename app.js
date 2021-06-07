const openNavBtn = document.querySelector(".fa-bars");
const swiperContainer = document.querySelector(".swiper-container");
const navigation = document.querySelector(".navigation");
const closeNavBtn = document.querySelector(".fa-times");
const openPriceBtns = document.querySelectorAll(".body--uncover");
const hidePriceBtns = document.querySelectorAll(".body--hide");
const cardsContainers = document.querySelectorAll(".container");
const priceCards = document.querySelectorAll(".priceList__card");
const navItems = document.querySelectorAll(".navigation_list li");

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

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navigation.classList.toggle("active");
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

// jQuery("#my_nanogallery").nanogallery2({
//   thumbnailHoverEffect2: "imageGrayOn",
//   galleryMaxRows: 2,
//   galleryDisplayMode: "rows",
// });

// console.log(navItems);

const moreBtn = document.querySelector(".more");
const hideImages = document.querySelectorAll(".hide");
const gallery = document.querySelector(".gallery");
const regularImages = document.querySelectorAll(".regular-image");
const reguarGallery = document.querySelector(".container");
let galleryImage = document.querySelector(".gallery-image");
const rightBtn = document.querySelector(".fa-chevron-right");
const leftBtn = document.querySelector(".fa-chevron-left");
const closeRegularGallery = document.querySelector(".fa-times");
const smallImages = document.querySelectorAll(".small-image");
const bigImage = document.querySelector(".big-image");
let index;

function openGallery() {
  hideImages.forEach((image) => {
    image.classList.remove("hide");
    image.classList.add("active");
  });
}

moreBtn.addEventListener("click", openGallery);

regularImages.forEach((image, index) => {
  image.addEventListener("click", function () {
    gallery.classList.add("active");
    reguarGallery.style.display = "none";
    bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
    rightBtn.addEventListener("click", function () {
      if (index >= smallImages.length - 1) {
        index = 0;
        bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
        console.log(index);
      } else {
        index++;
        bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
        console.log(index);
      }
    });
    leftBtn.addEventListener("click", function () {
      if (index <= 0) {
        index = smallImages.length - 1;
        bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
        console.log(index);
      } else {
        index--;
        bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
        console.log(index);
      }
    });
  });
});

smallImages.forEach((image, index) => {
  image.addEventListener("click", function () {
    bigImage.setAttribute("src", `./images/img${index + 1}.jpg`);
  });
});

closeRegularGallery.addEventListener("click", function () {
  gallery.classList.remove("active");
  reguarGallery.style.display = "block";
});
