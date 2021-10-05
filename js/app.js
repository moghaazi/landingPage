// ---------------- Scroll to top Btn ------------------------------------------------
// Get the el
let topBtn = document.querySelector('.top-btn')

// On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

// On scroll, Show/Hide the btn with animation
window.addEventListener('scroll', () => {
  window.scrollY > 500
    ? (topBtn.style.opacity = 1)
    : (topBtn.style.opacity = 0)
})

// ---------------- NavBar active link --------------------------------------------------
function activeNavLink(event) {
  document.querySelectorAll('header nav ul li a.active').forEach(item => {
    item.classList.remove('active')
  })
  event.target.classList.add('active')
}

// ---------------- hide navBar on scroll down, show on scroll up -----------------------------------------
let navBar = document.querySelector('header')
let prevScrollPos = window.pageYOffset
window.addEventListener('scroll', () => {
  let currentScrollPos = window.pageYOffset

  prevScrollPos > currentScrollPos
    ? (navBar.style.top = '0')
    : (navBar.style.top = '-500px')
  prevScrollPos = currentScrollPos
})

// ---------------- Toggle NavBar ---------------------------------------------------------
let toggleNav = document.querySelector('header .toggle-nav')
let nav = document.querySelector('header nav')

toggleNav.onclick = () => {
  nav.style.display === 'none'
    ? (nav.style.display = 'block')
    : (nav.style.display = 'none')
}

// ----------------  NavBar ---------------------------------------------------------
let ul = document.querySelector('header nav ul')

// Header
let header = document.createElement('li')
header.innerHTML = '<a class="active" href="#header">Header</a>'
// Team
let Team = document.createElement('li')
Team.innerHTML = '<a href="#team">Team</a>'
// Contact
let contact = document.createElement('li')
contact.innerHTML = '<a href="#contact">Contact</a>'
// About
let about = document.createElement('li')
about.innerHTML = '<a href="#about">About</a>'
// Footer
let footer = document.createElement('li')
footer.innerHTML = '<a href="#footer">Footer</a>'

ul.append(header, Team, contact, about, footer)

// ---------------- Smooth scroll to the section --------------------------------------------
let links = document.querySelectorAll('header nav ul a')

links.forEach(link => {
  link.onclick = function clickHandler(e) {
    e.preventDefault()
    let href = this.getAttribute('href')
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
  }
})

// ---------------- highlighting active section --------------------------------------------
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  
  let index = sections.length;
  
  while(--index && window.scrollY + 850 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
});
