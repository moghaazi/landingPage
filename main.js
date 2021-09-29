import './style.scss'

// ---------------- Scrool to top Btn ------------------------------------------------
// Get the el
let topBtn = document.querySelector('.top-btn')

// On Click, Scroll to the page's top, replace 'smooth' with 'instant' iyarn upgrade-interactive you don't want smooth scrolling
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

// On scroll, Show/Hide the btn with animation
window.onscroll = () =>
  window.scrollY > 500
    ? (topBtn.style.opacity = 1)
    : (topBtn.style.opacity = 0)

// ---------------- NavBar active link --------------------------------------------------
window.activeNavLink = event => {
  document
    .querySelectorAll('header nav ul li a.active')
    .forEach(item => item.classList.remove('active'))
  event.target.classList.add('active')
}

// ---------------- Smooth scroll to the elements --------------------------------------------
const links = document.querySelectorAll('header nav ul a')

for (const link of links) {
  link.onclick = function clickHandler(e) {
    e.preventDefault()
    const href = this.getAttribute('href')
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
  }
}

// ---------------- On scroll, Show/Hide the header -----------------------------------------
let navBar = document.querySelector('header')
let prevScrollpos = window.pageYOffset

window.addEventListener('scroll', () => {
  let currentScrollPos = window.pageYOffset
  prevScrollpos > currentScrollPos
    ? (navBar.style.top = '0')
    : (navBar.style.top = '-500px')
  prevScrollpos = currentScrollPos
})

// ---------------- Toggle Nav ---------------------------------------------------------
let toggleNav = document.querySelector('header .toggle-nav')
let nav = document.querySelector('header nav')

toggleNav.onclick = () => {
  nav.style.display === 'none'
    ? (nav.style.display = 'block')
    : (nav.style.display = 'none')
}
