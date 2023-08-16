function toggleMode() {
  const iconBars = document.getElementById('bars');

  if (iconBars.classList.contains('fa-bars')) {
    iconBars.classList.remove('fa-bars');
    iconBars.classList.toggle('fa-x');
    iconBars.style.transform = 'rotate(360deg)';
  } else if (iconBars.classList.contains('fa-x')) {
    iconBars.classList.remove('fa-x');
    iconBars.classList.toggle('fa-bars');
    iconBars.style.transform = 'rotate(180deg)';
  }
}

const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navItems.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

//fucntion for stikcy navbar
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('nav');
  navbar.classList.toggle('sticky', window.scrollY > 2);
});
