const barsBtn = document.querySelector(".fa-bars");
const navContent = document.querySelector(".navigation");
const timesBtn = document.querySelector(".fa-times");

barsBtn.addEventListener("click", function () {
  navContent.style.display = "flex";
  barsBtn.style.display = "none";
  timesBtn.style.zIndex = "2";
});

timesBtn.addEventListener("click", function () {
  navContent.style.display = "none";
  barsBtn.style.display = "block";
  timesBtn.style.zIndex = "-1";
});
