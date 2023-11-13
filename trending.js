const pageHeader = document.querySelector(".page-header");
const backButton = document.querySelector(".header-button");
backButton.addEventListener("click", (e) => {
  window.location.href = "/index.html";
});
setInterval(function () {
  const dimensions = document
    .querySelector(".main-container")
    .getBoundingClientRect();
  pageHeader.style.top = dimensions.top + "px";
  pageHeader.style.width = dimensions.width + "px";
}, 50);
