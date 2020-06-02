// Change image sizes and key down
const bus = document.querySelector('header .img');

bus.addEventListener('click', enlargeImg => {
  bus.classList.add('enlarge-img');
});

document.addEventListener('keydown', closeOnEsc => {
  if (event.key === 'Escape') {
    bus.classList.remove('enlarge-img');
  }
});


// Change paragraph text sizes
const introP = document.querySelector('.intro p');

introP.addEventListener('mouseover', enlargeText => {
  introP.style.fontSize = '2.5rem';
  introP.style.fontFamily = 'monospace';
});

introP.addEventListener('mouseout', normalText => {
  introP.style.fontSize = '1.6em';
  introP.style.fontFamily = 'sans-serif';
});


// Change image opacities
const imgContent = document.querySelectorAll('img');

imgContent.forEach(item => {
  item.addEventListener('dblclick', opacity => {
    item.style.opacity = "0.1";
  });
});


// Show window size of browser
const height = document.querySelector('#height');
const width = document.querySelector('#width');

function reportWindowSize() {
  height.textContent = window.innerHeight;
  width.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;


// keyup

const destinationBtn = document.querySelector('.destination .btn');
document.addEventListener('keyup', expandText => {
  if (event.key === 'a') {
    destinationBtn.style.backgroundColor = 'salmon';
  }
});

// mousedown mouseup

const destinationBtn2 = document.querySelector('.destination:nth-of-type(2) .btn');
destinationBtn2.addEventListener('mousedown', transform => {
  destinationBtn2.style.transform = 'scale(1.5)';
});

destinationBtn2.addEventListener('mouseup', transformNormal => {
  destinationBtn2.style.transform = 'scale(1)';
});


// contextmenu

const destinationBtn3 = document.querySelector('.destination:nth-of-type(3) .btn');
destinationBtn3.addEventListener('contextmenu', rightClick => {
  destinationBtn3.style.backgroundColor = 'salmon';
});