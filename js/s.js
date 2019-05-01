/**
 * Created by heber on 2019/3/27.
 */
window.onload=init;
function init(){
    // 获取导航按钮、导航列表
    var navBtn = document.querySelector('.navBtn'),
        navList = document.querySelector('.nav-list'),
        flag=false;
    navBtn.addEventListener('click',function(){

        if (!flag) {
            // 导航菜未显示时
            // top值发生改变时触发过渡
            navList.style.transition ='top 1.5s linear';
            navList.style.top = '0px';
            // 改变导航菜状态标识
            flag=true;
        }else{
            navList.style.top = '-257px';
            flag=false;
        }
    });
}
