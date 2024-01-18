let scrollToTopButton = document.querySelector(".scrollToTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

function handleScrollToTopButton() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
