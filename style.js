
const delay_factor_typing = 10; /*10000*/

window.addEventListener('load', function () {
setTimeout(function() {
  var textBioOne = "I enjoy doing developments in Artificial Intelligence";
  var optionBioOne = {
    strings: ["",textBioOne], // 将文本作为一个字符串传递给 Typed.js
    typeSpeed: 45,
    backSpeed: 45,
    backDelay: 5000,
    showCursor: false,
    loop:true,
  };
  var typedOne = new Typed(".spanBioOne", optionBioOne);

  setTimeout(function() {
    var textBioTwo = "machine learning and reinforcement learning, &web3 &";
    var optionBioTwo = {
      strings: ["",textBioTwo], // 将文本作为一个字符串传递给 Typed.js
      typeSpeed: 45,
    backSpeed: 45,
    backDelay: 5000,
    showCursor: false,
    loop:true,
    };
    var typedTwo = new Typed(".spanBioTwo", optionBioTwo);

    setTimeout(function() {
      var textBioThree = "Unix-like OS. And I am always eager to learn and explore";
      var optionBioThree = {
        strings: ["",textBioThree], // 将文本作为一个字符串传递给 Typed.js
        typeSpeed: 45,
    backSpeed: 45,
    backDelay: 5000,
    showCursor: false,
    loop:true,
      };
      var typedThree = new Typed(".spanBioThree", optionBioThree);

      setTimeout(function() {
        var textBioFour = "new technologies to develop amazing online experiences...";
        var optionBioFour = {
          strings: ["",textBioFour], // 将文本作为一个字符串传递给 Typed.js
          typeSpeed: 45,
    backSpeed: 45,
    backDelay: 5000,
    showCursor: false,
    loop:true,
        };
        var typedFour = new Typed(".spanBioFour", optionBioFour);
      }, 2000); // 
    }, 2000); // 
  }, 2000); // 
}, 5000 + delay_factor_typing); 
});



  const myInput = document.getElementById('buttons');//button

  myInput.addEventListener('click', function() {
    const downloadURL = "https://github.com/PaddyZz/resumePage/raw/main/src/xuemei.zip";
    
    
    const link = document.createElement('a');
    link.href = downloadURL;
    link.download = 'hottieXueMei.zip'; 
    
    
    link.click();
  });
