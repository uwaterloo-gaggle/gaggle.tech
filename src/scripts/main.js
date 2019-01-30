
import { Typed } from './lib'
// Export your custom function for declarative use
export { type, navActivePage, movingBackgroundImage}

// Code your custom function
function type( strings ) {
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    backSpeed: 20,
    loop: true,
    loopCount: 1
  });
}

function navActivePage(){
  $('nav li a[href=".' + location.pathname + '"]').addClass('active');
  if (location.pathname == '/') $('nav li a[href="./index.html"]').addClass('active');
}


function movingBackgroundImage(){
  var bg = document.querySelector('.hero-full-container');
  var windowWidth = window.innerWidth / 5;
  var windowHeight = window.innerHeight / 5 ;
  var images = [
    "silk1.jpg",
    "silk2.jpg",
    "silk3.jpg",
    "silk4.jpg",
    "silk5.jpg",
    "silk6.jpg",
    "silk7.jpg",
    "silk8.jpg"
  ];

  bg.style.backgroundImage = 'url(./assets/images/' + images[Math.floor(Math.random() * images.length)] + ')';

  bg.addEventListener('mousemove', (e) => {
    var mouseX = e.clientX / windowWidth;
    var mouseY = e.clientY / windowHeight;
    
    bg.style.transform = `translate3d(-${mouseX*1.5}px, -${mouseY*1.5}px, 0)`;
  });
}

