// ---------------- Scrool to top Btn ------------------------------------------------
// Get the btn
let topBtn = document.querySelector(".top-btn");

// On Click, Scroll to the page's top
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" }); // Replace 'smooth' with 'instant' if you don't want smooth scrolling

// On scroll, Show/Hide the btn
window.addEventListener("scroll", () => {
  window.scrollY > 500
    ? (topBtn.style.display = "block")
    : (topBtn.style.display = "none");
});

// ---------------- NavBar active link --------------------------------------------------
window.activeNavLink = (event) => {
  document
    .querySelectorAll("header nav ul li a.active")
    .forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
};

// ---------------- Smooth scroll to the elements --------------------------------------------
const links = document.querySelectorAll("header nav ul a");

for (const link of links) {
  link.onclick = function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  };
}

// ---------------- On scroll, Show/Hide the header -----------------------------------------
let navBar = document.querySelector("header");
let prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  prevScrollpos > currentScrollPos
    ? (navBar.style.top = "0")
    : (navBar.style.top = "-500px");
  prevScrollpos = currentScrollPos;
});
