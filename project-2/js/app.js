const number = document.querySelector('.number');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');
let counter = 0;

decreaseBtn.addEventListener('click', () => {
  counter--;
  number.textContent = counter;
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  number.textContent = counter;
});

increaseBtn.addEventListener('click', () => {
  counter++;
  number.textContent = counter;
});