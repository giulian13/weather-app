let scrollToTopButton = document.querySelector(".scrollToTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > window.innerHeight / 2 ||
    document.documentElement.scrollTop > window.innerHeight / 2
  ) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

function handleScrollToTopButton() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
