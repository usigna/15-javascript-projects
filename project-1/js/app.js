const text = document.querySelector('.text span');
const btn = document.querySelector('.btn');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  body.style.backgroundColor = '#' + randomColor;
  text.textContent = '#' + randomColor;
});