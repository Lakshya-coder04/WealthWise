function toggleMode() {
  const iconBars = document.getElementById('bars');

  if (iconBars.classList.contains('fa-bars')) {
    iconBars.classList.remove('fa-bars');
    iconBars.classList.add('fa-x');
    iconBars.style.transform = 'rotate(360deg)';
  } else if (iconBars.classList.contains('fa-x')) {
    iconBars.classList.remove('fa-x');
    iconBars.classList.add('fa-bars');
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

const navLinks = document.querySelectorAll('.nav-item a');

navLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const offset = targetElement.offsetTop - 70; // Adjust the offset as needed
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });

    // Close the mobile menu on link click
    toggleMode();
    mobileMenu();
  }
}

// Function for sticky navbar
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('nav');
  navbar.classList.toggle('sticky', window.scrollY > 2);
});

// Function to close mobile menu on link click
function closeMenu() {
  hamburger.classList.remove('active');
  navItems.classList.remove('active');
}

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((n) => n.addEventListener('click', closeMenu));
