const reviews = [
  {
    "id": 1,
    "image": "img/bird.jpg",
    "name": "Bird",
    "job": "Web Developer",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eos."
  },
  {
    "id": 2,
    "image": "img/cat.jpg",
    "name": "Cat",
    "job": "Web Designer",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae dolorem esse recusandae eaque sit."
  },
  {
    "id": 3,
    "image": "img/owl.jpg",
    "name": "Owl",
    "job": "Boss",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, quo odio."
  }
];

const img = document.querySelector('.img');
const author = document.querySelector('.name');
const job = document.querySelector('.job');
const description = document.querySelector('.description');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const randomBtn = document.querySelector('.random');
let currentItem = 0;

window.addEventListener('load', () => {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.image;
  author.textContent = item.name;
  job.textContent = item.job;
  description.textContent = item.description;
};

nextBtn.addEventListener('click', () => {
  currentItem++;

  if (currentItem === reviews.length) {
    currentItem = 0;
  }

  showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showPerson(currentItem);
});

randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

