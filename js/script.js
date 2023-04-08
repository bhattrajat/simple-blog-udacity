const button = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
button.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
