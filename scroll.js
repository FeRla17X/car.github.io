const videobox = document.querySelector('.my-video');
const video = videobox.querySelector('video');
const text = videobox.querySelector('h1');

const section = document.querySelector('section');

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  duration:23000,
  triggerElement:videobox,
  triggerHook:0
}).setPin(videobox).addTo(controller);

const textAnim = TweenMax.fromTo(text,{opacity:1},{opacity:0});

let scene2 = new ScrollMagic.Scene({
  duration:5,
  triggerElement:videobox,
  triggerHook:0
}).setTween(textAnim).addTo(controller);

let accelamount = 1;
let scrollpos = 0;
let delay = 0;


scene.on('update', e =>{
  scrollpos = e.scrollPos / 1000;
  console.log(e);
});

setInterval(()=> {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = scrollpos;
},41.70141784820684);
