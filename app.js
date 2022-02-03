// hamburger menu
// const toggleBtn = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleBtn.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })



const toggle = document.querySelector('.toggle');
const mobileNav = document.querySelector('.mobile-nav');

toggle.addEventListener('click', navToggle);

function navToggle() {

    mobileNav.classList.toggle('hidden');
}
