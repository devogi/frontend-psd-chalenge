const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    nav.classList.add("forScroll");
  } else {
    nav.classList.remove("forScroll");
  }
});
