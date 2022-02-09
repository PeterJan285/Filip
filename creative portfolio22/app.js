
// hamburger menu
const toggleBtn = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('hamburger')
})

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    navbarLinks.classList.remove('hamburger')
  }
})




// probaj ovaj gore kod da prilagodis ja sam probao, to je iz prvog portfolia i resava sve probleme, stavjam na git a ovaj dole kod to je tvoj originalni

// const toggle = document.querySelector('.toggle');
// const mobileNav = document.querySelector('.mobile-nav');

// toggle.addEventListener('click', navToggle);

// function navToggle() {

//     mobileNav.classList.toggle('hidden');
// }





// moj pokusaj - ne radi, cisto da vidis da sam nesto pokusavao

// const closeMenu = document.getElementById('#close-menu');
// closeMenu.addEventListener('click', special);

// function special(){
//     if (mobileNav.classList.contains('hidden')) {
//         mobileNav.classList.add('hidden');
//     }
// }


