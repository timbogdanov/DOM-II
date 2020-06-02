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



const introP = document.querySelector('.intro p');

introP.addEventListener('mouseover', enlargeText);

function enlargeText(event) {
  introP.style.fontSize = '2.5rem';
  introP.style.fontFamily = 'monospace';
}