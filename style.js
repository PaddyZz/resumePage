var typed = new Typed("#nameText",{
    strings:["Paddy", "Jiahe"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


setTimeout(function() {
    var newTyped = new Typed("#majorText", {
      strings: ["AI","Web Development"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  }, 2000); 


  const myInput = document.getElementById('button');
  
  myInput.addEventListener('click', function() {
    const downloadURL = "https://github.com/PaddyZz/resumePage/raw/main/src/xuemei.zip";
    
    
    const link = document.createElement('a');
    link.href = downloadURL;
    link.download = 'hottieXueMei.zip'; 
    
    
    link.click();
  });
 
