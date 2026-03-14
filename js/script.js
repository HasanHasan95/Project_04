// Toggle Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
// Change Navbar's Background On Scroll
window.addEventListener("scroll", function () {
  const navBar = this.document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navBar.classList.add("navbar-scroll");
  } else {
    navBar.classList.remove("navbar-scroll");
  }
});