
let logo = document.querySelector('.logo-demo');

window.addEventListener('scroll', function(){

var dataSrc = logo;



  if(window.pageYOffset < 10){
    dataSrc = 'wellconnected_home.png';
  }else{
    dataSrc = 'logo.png';
  }
})
//logo.setAttribute('data-src', 'images/logo/wellconnected_home.png');



//Menu active
let scrollBar = document.querySelector('.navigation-bar');
window.addEventListener('scroll', () =>{

  if(window.pageYOffset < 100){
    //scrollBar.classList.add('rakibul')
    scrollBar.classList.remove('nav-action');

    scrollBar.style.transition = '1s';

    //scrollBar.style.opacity = '0';
  }else{
    scrollBar.classList.add('nav-action')
  }

  if(this.window.scrollBy){
    
  }
})





var clickBtn = document.querySelector('.hamburger');
var overlyColorAdd = document.querySelector('.overly-color');
var mainManuCalling = document.querySelector('.off-canvas-menu');
var manuAndOverlyRemove = document.querySelector('.menu-close');


//add overly
clickBtn.addEventListener('click', () => {
  if(overlyColorAdd.classList.contains('menu-overly')){
    overlyColorAdd.classList.remove('menu-overly');
  }else{
    overlyColorAdd.classList.add('menu-overly');
  }
})

//overly remove
overlyColorAdd.addEventListener('click', () => {
  if(overlyColorAdd.classList.contains('menu-overly')){
    overlyColorAdd.classList.remove('menu-overly');
  }else{
    overlyColorAdd.classList.add('menu-overly');
  }
})

//main manu remove
overlyColorAdd.addEventListener('click', () => {
  if(mainManuCalling.classList.contains('menu-stand')){
    mainManuCalling.classList.remove('menu-stand');
  }else{
    mainManuCalling.classList.add('menu-stand');
  }
})


//menu calling
clickBtn.addEventListener('click', () => {
  if(mainManuCalling.classList.contains('menu-stand')){
    mainManuCalling.classList.remove('menu-stand');
  }else{
    mainManuCalling.classList.add('menu-stand');
  }
})


//menu remove
manuAndOverlyRemove.addEventListener('click', () => {
  if(mainManuCalling.classList.contains('menu-stand')){
    mainManuCalling.classList.remove('menu-stand');
  }else{
    mainManuCalling.classList.add('menu-stand');
  }
})


// overly remove
manuAndOverlyRemove.addEventListener('click', () => {
  if(overlyColorAdd.classList.contains('menu-overly')){
    overlyColorAdd.classList.remove('menu-overly');
  }else{
    overlyColorAdd.classList.add('menu-overly');
  }
})

//hamburger menu active
var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
  if(hamburger.classList.contains('active')){
    hamburger.classList.remove('active');
  }else{
    hamburger.classList.add('active');
  }
})


var navActive = document.querySelector('.menu-link');

window.addEventListener('scroll', () => {
  for(var i = 0; i < navActive.length; i++){
    //if()
  }
})




var t1 = 0;
window.onscroll = scroll1;

function scroll1() {
  var toTop = document.getElementById('toTop');
  window.scrollY > 500 ? (toTop.style.visibility = 'visible') && (toTop.style.opacity = '1') && (toTop.style.transition = '.5s') : (toTop.style.visibility = 'hidden') && (toTop.style.opacity = '0') && (toTop.style.transition = '.5s');
}

function abcd() {
  var y1 = window.scrollY;
  y1 = y1 - 10000;
  window.scrollTo(0, y1);
  if (y1 > 10000) {
    t1 = setTimeout("abcd()", 1000);
  } else {
    clearTimeout(t1);
  }
}


//Pre loader
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        ".loader-wrap").style.visibility = "visible";
  } else {
      document.querySelector(
        ".loader-wrap").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
  }
};




//navigation active
// var navActive = document.querySelector('.menu-link');
// var navigation = document.querySelector('.navigation');

// window.addEventListener('scroll', () =>{
// (window.scrollY >= 50) ? navActive.classList.add('scroll') : navActive.classList.remove('scroll');
// })


//   window.addEventListener('scroll', () =>{
//     var navigationAllCall = document.querySelectorAll('ul, li, a');
//     var navFrom = window.scrollY;
  
//     navigationAllCall.forEach(e => {
//       var section = document.querySelector(e.hash)
  
//       if(section.offsetTop <= navFrom && section.offsetHeight > navFrom){
//         index.classList.add('active');
//       }else{
//         index.classList.remove('active');
//       }
//     });
  
//   })
