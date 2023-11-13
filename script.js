const pageFooter = document.querySelector(".page-footer");
const showDownBtn = document.querySelector(".showdown-button");
const contestsButton = document.querySelector(".contests-button");
const trendingButton = document.querySelector(".trending-button");

showDownBtn.addEventListener("click", (e) => {
  window.location.href = "/index.html";
});
contestsButton.addEventListener("click", (e) => {
  window.location.href = "/contests.html";
});
trendingButton.addEventListener("click", (e) => {
  window.location.href = "/trending.html";
});

setInterval(function () {
  const dimensions = document
    .querySelector(".main-container")
    .getBoundingClientRect();
  pageFooter.style.bottom = dimensions.top + "px";
  pageFooter.style.width = dimensions.width + "px";
}, 50);
