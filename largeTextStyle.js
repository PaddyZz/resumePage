
    document.addEventListener("DOMContentLoaded", function() {
      // 获取文本节点和初始文本内容
      var dynamicTexts = document.querySelectorAll(".dynamic-text");
      var word_and= document.getElementsByClassName('word_and')[0];
      var word_and_one = document.getElementsByClassName('word_and_one')[0];
      word_and_one.style.display = 'none';
      var initialTexts = [];

      // 保存初始文本内容
      dynamicTexts.forEach(function(textElement) {
        initialTexts.push(textElement.innerHTML);
      });

      // 定义要切换的文本内容
      var texts = [
        ["Jiahe", "Paddy"],
        ["AI ML", "AI DL"],
        ["watching stars","jogging, bike-riding"],
        ["collecting scenic pics","listening to music"]
      ];

      // 设置定时器，每隔1.5秒执行一次切换
      setInterval(function() {
        // 遍历每个动态文本元素
        dynamicTexts.forEach(function(textElement, index) {
          // 获取当前文本内容
          var currentText = textElement.innerHTML;

          // 根据当前文本内容切换到下一个文本内容
          var nextText = (currentText === texts[index][0]) ? texts[index][1] : texts[index][0];

          // 更新文本内容
          textElement.innerHTML = nextText;
          if (nextText === texts[index][1]) {
            word_and.style.display ='none';
            
            word_and_one.style.display = 'inline';
          }else {
            if (word_and_one.style.display !== 'none') {
                word_and_one.style.display ='none';
              }
            word_and.style.display = 'inline';
          }
        });
      }, 2500);
    });

    gsap.to(".svgTextAnim", {
      rotation: 90, // 旋转360度
      // 水平翻转
      repeat: -1, // 无限重复动画
      
      duration: 1, // 动画持续时间2秒
      onComplete: function() {
        gsap.set(".svgTextAnim", { // 在动画完成后设置元素的最终状态
          rotation: 90,
          scaleX: -1
        });
      }
    });
    gsap.set(".letterI", {
      transformOrigin: "40% 60%", // 设置旋转和翻转的中心点
      rotation: 0, // 初始状态为0度
       // 初始状态为1，表示文本高度不变
    });
    gsap.to(".letterI", {
      rotationX: 360, // 旋转360度
      
      // 水平翻转
      repeat: -1, // 无限重复动画
      yoyo:true,
      duration: 2, // 动画持续时间2秒
      delay:0.5
    });
    gsap.set(".letterCapI", {
      transformOrigin: "bottom", // 设置变换的原点在中心底部
    });

    gsap.to(".letterCapI", {
      scaleY: 1.5, // 上下同时拉伸，高度变为原来的2倍
    });
    gsap.set(".bouncingLetter", {
      transformOrigin: "bottom", // 设置变换的原点在中心底部
    });

    gsap.to(".bouncingLetter", {
      scaleY: 0.7, // 上下同时拉伸，高度变为原来的2倍
    });
   
    const square = document.getElementById('rotatedot');

    // 使用 GSAP 创建旋转动画效果
    gsap.to(square, {
      transformOrigin: "center center",
      duration: 2, // 动画持续时间为2秒
      rotation: 360, // 旋转360度
      repeat: -1, // 无限循环
      ease: "linear" // 线性缓动函数
    });

    
    /*
    function playAnimation() {
      gsap.fromTo(bouncingLetter, {
        scaleY: 0.3,
        y: 20
      }, {
        duration: 3,
        scaleY: 1.2,
        y: -60,
        yoyo: true,
        repeat: 0,
        ease: "power2.inOut",
        onComplete: function() {
          setTimeout(playAnimation, 0); // 设置间隔时间为 1 秒，然后再次执行动画
        }
      });
    } */

