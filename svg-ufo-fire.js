   
var ufoItself = document.querySelector('.svg-ufo');
var elements = document.querySelectorAll('.svg-ufo g.svg_1 path, .svg-ufo g.svg_group_2 path');
var elements_not_top_light = document.querySelectorAll(".svg-ufo g.svg_group_2 path:not(.top-light)");
const delay_factor = 21000 ; /* 9000 = 9s*/

function svgUfoCollisionAnim(delay_factor) {
  setTimeout(()=> {
    anime({
    targets: elements,
    rotate: [
{ value: '+=10', duration: 50, easing: 'easeInOutSine' },
{ value: '-=20', duration: 100, easing: 'easeInOutSine' },

/* { value: '+=20', duration: 500, easing: 'easeInOutSine' }*/
],
    direction: 'alternate',
    loop: 4,
    
  });
  },800+delay_factor);
}

function svgUfoDecomposeAnim(delay_factor) {
setTimeout(() => {
  
  anime({
targets: elements_not_top_light,
translateY: 260, 
easing: 'easeInOutSine',
duration: 1000,
delay: anime.stagger(100), // 每个元素之间延迟100ms
});
}, 2500+delay_factor);
}

function svgUfoComposeAnim(delay_factor) {
setTimeout(() => {
  anime({
targets: elements,
translateY: 0, 
easing: 'easeInOutSine',
duration: 1000,
delay: anime.stagger(100), // 每个元素之间延迟100ms
});
}, 5000+delay_factor);
}

function svgUfoFlashTopLight(delay_factor) {

const topLightElement = document.querySelector('.svg-ufo .top-light');
const colors = ["rebeccapurple","red", "green", "blue", "cyan", "orange","aqua","pink"];
let randomIndex = 0;
let intervalId = null;

setTimeout(() => {
 intervalId = setInterval(() => {
    randomIndex = Math.floor(Math.random() * colors.length);
    topLightElement.style.fill = colors[randomIndex];
    topLightElement.style.stroke = colors[randomIndex];
  }, 100);
}, 3500 + delay_factor);
setTimeout(() => {
  clearInterval(intervalId); // 清除之前设置的定时器
  topLightElement.style.fill = '#4b97cb'; // 移除 fill 属性
  topLightElement.style.stroke = '#4b97cb'; // 移除 stroke 属性
}, 6500+delay_factor);
}

function svgUfoFlashThreeLights(delay_factor) {
  
const lightOne = document.querySelector('.svg-ufo .lightOne');
const lightTwo= document.querySelector('.svg-ufo .lightTwo');
const lightThree = document.querySelector('.svg-ufo .lightThree');
const colors = ["rebeccapurple", "green", "blue", "cyan", "red","orange","aqua","pink"];
let intervalId = null;
let randomIndexOne = 0;
let randomIndexTwo = 0;
let randomIndexThree = 0;

setTimeout(() => {
 intervalId = setInterval(() => {
     randomIndexOne = Math.floor(Math.random() * colors.length);
     randomIndexTwo = Math.floor(Math.random() * colors.length);
     randomIndexThree = Math.floor(Math.random() * colors.length);
    lightOne.style.fill = colors[randomIndexOne];
    lightOne.style.stroke = colors[randomIndexOne];
    lightTwo.style.fill = colors[randomIndexTwo];
    lightTwo.style.stroke = colors[randomIndexTwo];
    lightThree.style.fill = colors[randomIndexThree];
    lightThree.style.stroke = colors[randomIndexThree];

  }, 200);
}, 7500 + delay_factor);
setTimeout(() => {
  clearInterval(intervalId); // 清除之前设置的定时器
  lightOne.style.fill = '#c0c0c0'; // 移除 fill 属性
  lightOne.style.stroke = '#c0c0c0'; // 移除 stroke 属性
  lightTwo.style.fill = '#c0c0c0'; // 移除 fill 属性
  lightTwo.style.stroke = '#c0c0c0';
  lightThree.style.fill = '#c0c0c0'; // 移除 fill 属性
  lightThree.style.stroke = '#c0c0c0';
}, 13000+delay_factor);
}

function svgUfoRippleRayEffect(delay_factor) {

  const rayOne = document.querySelector('.svg-ufo .rayOne');
  const rayTwo = document.querySelector('.svg-ufo .rayTwo');
  const rayThree = document.querySelector('.svg-ufo .rayThree');
  let intervalId = null;
  let count = 0;
  
  setTimeout (() => {
  intervalId = setInterval(() => {
    if (count === 0) {
      rayOne.style.fill = 'white';
      rayOne.style.stroke = 'white';
      rayTwo.style.fill = 'none';
      rayTwo.style.stroke = 'none';
      rayThree.style.fill = 'none';
      rayThree.style.stroke = 'none';
    } else if (count === 1) {
      rayOne.style.fill = 'none';
      rayOne.style.stroke = 'none';
      rayTwo.style.fill = 'white';
      rayTwo.style.stroke = 'white';
      rayThree.style.fill = 'none';
      rayThree.style.stroke = 'none';
    } else if (count === 2) {
      rayOne.style.fill = 'none';
      rayOne.style.stroke = 'none';
      rayTwo.style.fill = 'none';
      rayTwo.style.stroke = 'none';
      rayThree.style.fill = 'white';
      rayThree.style.stroke = 'white';
    }

    count++;

    if (count > 2) {
      count = 0;
    }
  }, 400);
}, 7500 + delay_factor);
  // 清除定时器并移除所有元素的填充和描边
  setTimeout(() => {
    clearInterval(intervalId);
    rayOne.style.fill = 'none';
    rayOne.style.stroke = 'none';
    rayTwo.style.fill = 'none';
    rayTwo.style.stroke = 'none';
    rayThree.style.fill = 'none';
    rayThree.style.stroke = 'none';
  }, 13000 + delay_factor);
}

function svgUfoRelaunchAnim(delay_factor) {
  setTimeout(function() {
  var element = document.querySelector('.svg-ufo');
  element.style.animation = 'none';
  element.style.opacity ='0';
  setTimeout(() => {
  element.style.transform= "translateY(-210%)";
  element.style.position = "absolute";
  element.style.top = "360px" ;
  element.style.left= "1100px" ;
  element.style.opacity = '1'; // 然后再逐渐显示
}, 10);  
}, 14000 + delay_factor);

}

function svgUfoRelaunchAnimVerTwo(delay_factor) {
  setTimeout(function() {
  var element = document.querySelector('.svg-ufo');
  element.classList.add('svg-ufo-gone');
  var newElement = document.querySelector('.svg-ufo.svg-ufo-gone');
  newElement.style.animationName = "svg-ufo-relaunchAnimation";
  newElement.style.animationDuration = "2s";
  newElement.style.animationTimingFunction = "ease-out";
  newElement.style.animationFillMode = "forwards";
}, 14500 + delay_factor);

}

var flames = document.querySelectorAll('.svg-fire path, .svg-fire g.svg-fire-g-stroke path');

function svgFireFlameDancingAnim() {
  var animation = anime({
      targets: flames,
      scaleY: [
        { value: 1 },
        { value: 0.8 },
        { value: 1, duration: 50 }
      ],
      loop: true,
      easing: 'easeInOutQuad'
  });
}

function svgFireRelaunchAnim(delay_factor) {
  setTimeout(function() {
  var element = document.querySelector('.svg-fire');
  element.style.animation = 'none'; 
  
}, 14000 + delay_factor);

}

function svgFireRelaunchAnimVerTwo(delay_factor) {
  setTimeout(function() {
  var element = document.querySelector('.svg-fire');
  element.classList.add('svg-fire-gone');
  var newElement = document.querySelector('.svg-fire.svg-fire-gone');
  newElement.style.animationName = "svg-fire-relaunchAnimation";
  newElement.style.animationDuration = "2s";
  newElement.style.animationTimingFunction = "ease-out";
  newElement.style.animationFillMode = "forwards";
}, 14500 + delay_factor);

}

function stroke_path_for_test () {
  var paths = document.querySelectorAll('.svg_test path');

  for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    var length = path.getTotalLength();

    path.classList.add('svgPath');
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();

    path.style.animationPlayState = 'running';
  }
}
function trigger_stroke(delay_factor) {
  var svg_itself = document.querySelector('.svg_test');
  var portrait_img = document.querySelector('.portrait-img');
  setTimeout(()=>{
    stroke_path_for_test();
  },12000 + delay_factor); /*12000 + delay_factor*/
 setTimeout(()=>{
    svg_itself.style.opacity="1";
  },12000 + delay_factor); 
  setTimeout(() => {
    svg_itself.style.animationPlayState='running';
  },25000 + delay_factor);
  setTimeout(() => {
   portrait_img.style.display ='inline-block';
   /* svg_itself.style.animationPlayState='paused'; */  /*to be */
    portrait_img.style.animationPlayState='running';
  },30000 + delay_factor);
  
}


window.onload = () => {
  svgUfoCollisionAnim(delay_factor);
  svgUfoDecomposeAnim(delay_factor);
  svgUfoComposeAnim(delay_factor);
  svgUfoFlashTopLight(delay_factor); 
  svgUfoFlashThreeLights(delay_factor);
  svgUfoRippleRayEffect(delay_factor);
  svgUfoRelaunchAnim(delay_factor);
  svgUfoRelaunchAnimVerTwo(delay_factor);  /*to be dealt with*/
  svgFireFlameDancingAnim();
  svgFireRelaunchAnim(delay_factor);
  svgFireRelaunchAnimVerTwo(delay_factor);
  trigger_stroke(delay_factor);
    
};
