const findSec = (index) =>{
    switch(index){
        case 0 : return(".sec1");break;
        case 2 : return(".sec2");break;
        case 4 : return(".sec5");break;
        default: return undefined; break;
    }
}
new fullpage('#fullpage',{
    css3:true,
    anchors:['homepage','whatistechex','chatbots','signup'],
    scrollOverflow: true,
    scrollingSpeed:1000,
    menu: '#menu',
    autoScrolling:true,
    scrollHorizontally: true,
    paddingTop:'30px',
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    onLeave: (origin,destination,direction)=>{
        let sec = findSec(destination.index);
        let secPrev = findSec(origin.index);
        const back = gsap.timeline({defaults:{ease:"power1.out"}});
        if(destination.isFirst){
            back.pause()
        }else if(direction==="down"){
            if(!(destination.isLast) && sec!==undefined)
                back.fromTo(sec,{rotation: -5},{rotation: 3,duration: 1.2,delay: 0.7});
        }
        else if(direction==="up" && sec!==undefined){
            if(!(destination.isFirst))  
                back.fromTo(sec,{rotation: 3},{rotation: -3,duration: 1.2,delay: 1});
        }
        if(destination.isLast){
            document.getElementById("navContainer").style.backgroundColor="white";
        }else{
            document.getElementById("navContainer").style.backgroundColor="transparent";
        }
    }  
});
const timeline = gsap.timeline({defaults:{ease:"power1.out"}});
timeline.to("#scroll",{opacity:1, duration: 1,delay:.3})
    .fromTo("#logo",{opacity:0 ,y:"+3%"},{opacity:1,y:"0%",duration: 0.4},"-=1");

// Code for the slideshow
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activated", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// Design for checkbox selector
document.getElementById('pygame-check').addEventListener('change',(e)=>{
   const parentDiv = document.getElementById('pygamechkdiv');
   if(e.target.checked)
        parentDiv.style.backgroundColor="rgba(0,0,0,1)";
   else
        parentDiv.style.backgroundColor="rgba(0,0,0,0)";
});