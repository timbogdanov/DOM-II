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

const destinationBody = document.querySelector('.destination:nth-of-type(2)');
destinationBody.addEventListener('mousedown', bg => {
  destinationBody.style.backgroundColor = 'salmon';
})

const destinationBtn2 = document.querySelector('.destination:nth-of-type(2) .btn');
destinationBtn2.addEventListener('mousedown', transform => {
  transform.stopPropagation();
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


// preventDefault();

const facebookLink = document.querySelector('.nav a:nth-of-type(1)');

facebookLink.addEventListener('click', e => {
  e.preventDefault();
})

gsap.registerEffect({
  name: "fade",
  effect: (targets, config) => {
      return gsap.to(targets, {duration: config.duration, opacity: .5});
  },
  defaults: {duration: 2}, //defaults get applied to any "config" object passed to the effect
  extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});

gsap.effects.fade(".nav");