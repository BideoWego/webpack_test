require('./style.css')
const imgSrc = require('./image.jpeg');

const greeting = 'Hello, Webpack!';
(() => {
  console.log(greeting);
  const d = document.createElement('div');
  d.classList.add('myDiv');
  d.innerText = greeting;
  document.body.appendChild(d);

  const image = document.createElement('img');
  image.src = imgSrc;
  image.height = 400;
  document.body.appendChild(image);
})();
