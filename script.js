const hamburger = document.querySelector(".hamburger"),
  mobileNav = document.querySelector(".mobile-nav"),
  closeIcon = document.querySelector(".close-icon"),
  mobileLogo = document.querySelector(".mobile-logo"),
  mobileLinks = document.querySelectorAll(".mobile-link");

hamburger.addEventListener("click", addActive);

closeIcon.addEventListener("click", removeActive);

mobileLinks.forEach((mobileLink) => {
  mobileLink.addEventListener("click", removeActive);
});

mobileLogo.addEventListener("click", removeActive);

function addActive() {
  hamburger.classList.add("active");
  mobileNav.classList.add("active");
}

function removeActive() {
  hamburger.classList.remove("active");
  mobileNav.classList.remove("active");
}
