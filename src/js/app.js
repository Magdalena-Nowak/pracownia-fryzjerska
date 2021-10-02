// Showing go-up button
const goUpBtn = document.querySelector(".go-up");
let scrollPosition;

const checkScrollPosition = () => {
  scrollPosition = window.scrollY;
};

const scrollPositionInterval = setInterval(checkScrollPosition, 1000);

document.addEventListener("scroll", function () {
  let newScrollPosition = window.scrollY;
  if (scrollPosition < newScrollPosition) {
    goUpBtn.classList.add("active");
  } else {
    goUpBtn.classList.remove("active");
  }
});

goUpBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});