// Navbar stick on scroll ++ styles

var navbar = document.querySelector("[navbar-main]");
const white_elements = navbar.querySelectorAll(".text-white");
const white_before_elements = navbar.querySelectorAll(".before\\:text-white");


window.onscroll = function () {
  let blur = navbar.getAttribute("navbar-scroll");
  if (blur == "true") stickyNav();
};

function stickyNav() {
  if (window.scrollY >= 5) {
    navbar.classList.add("sticky", "top-[1%]", "backdrop-saturate-[200%]", "backdrop-blur-[30px]", "bg-[hsla(0,0%,100%,0.8)]", "shadow-blur", "z-110");
    white_elements.forEach(element => {
      element.classList.remove("text-white")
    });
    white_before_elements.forEach(element => {
      element.classList.remove("before:text-white")
    });
  } else {
    navbar.classList.remove("sticky", "top-[1%]", "backdrop-saturate-[200%]", "backdrop-blur-[30px]", "bg-[hsla(0,0%,100%,0.8)]", "shadow-blur", "z-110");
    white_elements.forEach(element => {
      element.classList.add("text-white")
    });
    white_before_elements.forEach(element => {
      element.classList.add("before:text-white")
    });
  }
}
