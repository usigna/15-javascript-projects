const menu = document.querySelector('.menu');
const hamburgerBtn = document.querySelector('.hamburger');

hamburgerBtn.addEventListener('click', () => {
  
  if (hamburgerBtn.classList.contains('rotate')) {
    hamburgerBtn.classList.remove('rotate');
    menu.classList.remove('show-menu');
  } else {
    hamburgerBtn.classList.add('rotate');
    menu.classList.add('show-menu');
  }
});