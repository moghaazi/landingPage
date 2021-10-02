// ---------------- Scroll to top Btn ------------------------------------------------
// Get the el
let topBtn = document.querySelector('.top-btn')

// On Click, Scroll to the page's top, replace 'smooth' with 'instant' iyarn upgrade-interactive you don't want smooth scrolling
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

// On scroll, Show/Hide the btn with animation
window.onscroll = () => {
  window.scrollY > 500
    ? (topBtn.style.opacity = 1)
    : (topBtn.style.opacity = 0)
}

// ---------------- NavBar active link --------------------------------------------------
let activeNavLink = event => {
  window.document
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
let prevScrollPos = window.pageYOffset
window.addEventListener('scroll', () => {
  let currentScrollPos = window.pageYOffset

  prevScrollPos > currentScrollPos
    ? (navBar.style.top = '0')
    : (navBar.style.top = '-500px')
  prevScrollPos = currentScrollPos
})

// window.addEventListener('scroll', () => {
//   let navBar = document.querySelector('header')

//   navBar.style.opacity == 0
//     ? (navBar.style.opacity = 1)
//     : (navBar.style.opacity = 0)
// })

// var timer = null
// let navBar = document.querySelector('header')

// window.addEventListener(
//   'scroll',
//   function () {
//     if (timer !== null) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       navBar.style.opacity == 0
//         ? (navBar.style.opacity = 1)
//         : (navBar.style.opacity = 0)
//     }, 150)
//   },
//   false
// )

// ---------------- Toggle Nav ---------------------------------------------------------
let toggleNav = document.querySelector('header .toggle-nav')
let nav = document.querySelector('header nav')

toggleNav.onclick = () => {
  nav.style.display === 'none'
    ? (nav.style.display = 'block')
    : (nav.style.display = 'none')
}
