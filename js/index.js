// Change image sizes and key down
const bus = document.querySelector('header .img');

bus.addEventListener('click', enlargeImg);

function enlargeImg(event) {
  bus.classList.add('enlarge-img');
}

document.addEventListener('keydown', closeOnEsc);

function closeOnEsc(event) {
  if (event.key === 'Escape') {
    bus.classList.remove('enlarge-img');
  }
}


// Change paragraph text sizes
const introP = document.querySelector('.intro p');

introP.addEventListener('mouseover', enlargeText);
introP.addEventListener('mouseout', normalText);

function enlargeText(event) {
  introP.style.fontSize = '2.5rem';
  introP.style.fontFamily = 'monospace';
}

function normalText(event) {
  introP.style.fontSize = '1.6em';
  introP.style.fontFamily = 'sans-serif';
}


// Change image opacities
const imgContent = document.querySelectorAll('img');

imgContent.forEach(item => {
  item.addEventListener('dblclick', opacity);

  function opacity(event) {
    item.style.opacity = "0.1";
  }
});


// Show window size of browser

const height = document.querySelector('#height');
const width = document.querySelector('#width');

function reportWindowSize() {
  height.textContent = window.innerHeight;
  width.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;