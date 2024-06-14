
const cssc ='circle-star-svg';
const cssids = ['svg_invalid','svg_7','svg_22','svg_26','svg_34','svg_39','svg_36','svg_20'];

let index;



function changeColorInit() {
    let index = 0;
    const svgs = document.getElementsByTagName('svg');
    
    // 遍历 SVG 元素
    for (let i = 0; i < svgs.length; i++) {
        // 获取类名为'svg_moon'的 g 元素
        const moonGroup = svgs[i].getElementsByClassName('circle-star-svg')[0];

        if (moonGroup) {
            // 获取该 g 元素下的所有 path 元素
            const paths = moonGroup.getElementsByTagName('path');
            
            // 修改颜色的间隔计时器
            let interval = setInterval(() => {
                
                    
                if (index < cssids.length) {
                   
                    const currentPathId = cssids[index];
                    
                    for (let j = 0; j < paths.length; j++) {
                        if (paths[j].getAttribute('id') === currentPathId) {
                            
                            paths[j].setAttribute('fill', 'rgb(255, 222, 129)');
                            paths[j].setAttribute('opacity', '1');
                            paths[j].classList.add('circleStarSvgAnim-stars-class');
                            setTimeout(() => {
                               
                                    paths[j].setAttribute('fill', 'transparent');
                                    paths[j].classList.remove('circleStarSvgAnim-stars-class');
                                
                            }, 2000); 
                            index++;
                            break;
                        }else if (currentPathId === 'svg_invalid') {
                            index++;
                            break;
                        }
                    }
                } 
                else { 
                    index=0;
                }
            }, 2000); // 每2秒执行一次
        }
    }
}


function changeColor() {
    let index = 0;
    const svgs = document.getElementsByTagName('svg');

    for (let i = 0; i < svgs.length; i++) {
        const moonGroup = svgs[i].getElementsByClassName('circle-star-svg')[0];

        if (moonGroup) {
            
            const paths = moonGroup.getElementsByTagName('path');
            

            const changeColorLogic = async () => {
                
                if (index < cssids.length) {
                    
                    const currentPathId = cssids[index];
                    
                    for (let j = 0; j < paths.length; j++) {
                        if (paths[j].getAttribute('id') === currentPathId) {
                            
                            paths[j].setAttribute('fill', 'rgb(255, 222, 129)');
                            paths[j].setAttribute('opacity', '1');
                            paths[j].classList.add('circleStarSvgAnim-stars-class');
                            setTimeout(() => {
                                
                                paths[j].setAttribute('fill', 'transparent');
                                paths[j].classList.remove('circleStarSvgAnim-stars-class');
                               
                            }, 2000); 
                            index++;
                            break;
                        } else if (currentPathId === 'svg_invalid') {
                            index++;
                            break;
                        }

                    }
                
                } else {  
                    await pauseExecution();
                    index = 0;
                    
                }

                
                
                changeColorLogic(); // 递归调用以继续下一个循环
                
            };

            // 启动第一次调用
            changeColorLogic();

            // 创建暂停执行的函数
            async function pauseExecution() {
                await new Promise(resolve => setTimeout(resolve, 18000)); // 暂停 10 秒
            }
        }
    }
}


function circleStarSvgHover() {
    var button = document.getElementsByClassName('button-container')[0];
    //var button = document.getElementsByClassName('circle-star-img')[0];
    //const path = document.querySelector('.circle-star-img-one g');
    const path = document.querySelector('.circle-star-svg-one');
   
    
    // 定义鼠标悬停事件处理函数
    var mouseoverHandler = function() {
      
        // 移除 load 事件的监听
        path.classList.add("mouseEnter");
       
    };

    // 定义鼠标移出事件处理函数
    var mouseoutHandler = function() {
        
        setTimeout(()=>{
            
            if (path.classList.contains('mouseEnter')){
            
                path.classList.remove('mouseEnter');
            }
            path.classList.add('mouseLeave');
           // const opacity = window.getComputedStyle(path).opacity
           
            //document.documentElement.style.setProperty('--path-opacity', opacity);
        
            
            setTimeout(()=> {
                
                path.classList.remove('mouseLeave');
                
            },1000); 
             
        },10);
        
        
    }; 
    
    // 添加鼠标悬停事件监听
    button.addEventListener('mouseover', mouseoverHandler);

    // 添加鼠标移出事件监听
    button.addEventListener('mouseleave', mouseoutHandler);
}



// 定义 load 事件的处理函数
var loadHandler = function() {
    changeColorInit();
    changeColor();
    circleStarSvgHover();
};

// 添加 load 事件监听
window.addEventListener('load', loadHandler);