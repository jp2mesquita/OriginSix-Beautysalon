/* ============= TOGGLE MENU =============*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* ============= NAV IN MENU =============*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* ============= CHANGE HEADER WHEN SCROLL =============*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* TESTIMONIALS CAROUSEL SLIDER SWIPER */
const swiper = new Swiper('.swiper-container', {
  sliderPerView: 1,

  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: {
    invert: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  breakpoints: {
    900: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
})

/* SCROLL REVIEW */
const scrollReveal = ScrollReveal({
  origng: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  { interval: 100 }
)

/* BACK TO TOP BUTTON */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* VISIBLE MENU ON SCREEN */
const sections = document.querySelectorAll('section[id]')
function actvateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + window.innerHeight / 2

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* WHEN SCROLL*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  actvateMenuAtCurrentSection()
})
