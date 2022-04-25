// hamburger menu
const toggleBtn = document.getElementsByClassName('navbar__toggle__btn')[0]
const navbarLinks = document.getElementsByClassName('navbar__links')[0]

toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

