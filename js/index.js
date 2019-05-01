(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 640) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);

var index= 0,timer=null,
    d=document.getElementById("d"),
    img= d.getElementsByTagName("div"),
    len=img.length,
    f=document.getElementById("f"),
    s= f.getElementsByTagName("span");
function slideImg(){
    d.onmouseover=function(){
        if(timer){

            clearInterval(timer);
        }
    }
    d.onmouseout=function(){

        timer=setInterval(function(){
            index++
            if(index>=len){
                index=0
            }
            chang();
        },2000)
    }
    d.onmouseout();

    for(var j=0;j<len;j++){
        s[j].id=j;
        s[j].onclick=function(){
            index=this.id;
            chang();
        }
    }

}

function chang(){
    for(var i=0;i<len;i++){
        s[i].className='';
        img[i].style.display='none';
    }
    img[index].style.display='block'
    s[index].className='active';
}

slideImg()
/*
var innerGroup = $(".inner-content");
var leftArrow = $(".left-arrow");
var rightArrow = $(".right-arrow");
var spanGroup = $(".pagination span");
var imgWidth = $(".innerwraper img:first-child").eq(0).width();
var _index = 0;
var timer = null;
spanGroup.on("click", function() {
    //导航切换
    _index = spanGroup.index($(this));
    selectPic(_index);

})

function autoGo() {
    //自动行走
    timer = setInterval(go, 3000);
}
//调用自动播放
autoGo();

function go() {
    //计时器的函数
    _index++;
    selectPic(_index);
}

function selectPic(num) {
    clearInterval(timer);
    //让我们点击的小圆点背景色变白
    $(".pagination span").eq(num).addClass("active").siblings().
        removeClass("active");
    //小圆点切换至最后的时候,再次切换的时候呢,让第一个小圆点变白,周而复始
    if (num % 4 == 0) {
        $(".pagination span").eq(0).addClass("active").siblings()
            .removeClass("active");
    }
    $(".inner").stop().animate({
        left: -num * imgWidth,
    }, 1000, function() {
        //点击切换图片效果结束以后,要开始自动播放啦
        timer = setInterval(go, 3000);
        //自动播放检查是否到最后一张
        if (_index == innerGroup.length - 1) {
            //最后一张图片的时候,让_index = 0
            _index %= 4;
            $(".inner").css("left", "0px");
        }
    })
}
/*
var innerGroup=$('.inner-content');//图片
var spanGroup=$('.pagination span');//点击按钮
var imgWidth=$('.inner-content img:first-child').eq(0).width();//图片宽度
var _index=0;var timer=null;
//点击切换
spanGroup.on('click',function(){
    _index=spanGroup.index($(this)); //index是什么意思
    selectPic(_index)
})
//自动切换
function auto(){
    timer=setInterval(go,3000);

}
auto();
//计时器
function go(){
    _index++;
    selectPic(_index);
}
//切换图片函数
function selectPic(num){
    clearInterval(timer);
    //点击圆圈，圆圈背景变成白色
    $(".pagination span").eq(num).addClass('active').siblings.removeClass('active');
    //圆圈切换至最后，再次切换，让第一个再次变白
    if(num % 4 == 0){
        $('.pagination span').eq(0).addClass('active').siblings.removeClass('active')
    }
    $('.inner').stop().animate({
        left:-num * imgWidth,
    }, 1000,function(){
        //点击切换图片效果结束后，开始自动播放
        timer=setInterval(go,3000);
        //自动播放检测是否是最后一张
        if(_index==innerGroup.length-1){
            _index %= 4;
            $('.inner').css('left','0px');
        }
    })
}
/*var inner=document.querySelector(".inner"),
    content=inner.getElementsByTagName("div"),
    len=content.length,
    pagination=document.querySelector("pagination"),
    span=pagination.getElementsByTagName("span"),
    index= 0,timer=null;
function sligeImg(){
    inner.onmouseover=function(){
        if(timer){
            clearInterval(timer);
        }
    }
    inner.onmouseout=function(){
       timer=setInterval(function(){
           index++;
           if(index>=len){
               index=0
           }
           changImg();
       },3000)
    }
    inner.onmouseout();
    span.onclick=function(){
        for(var j=0;j<len;j++){
            span[j].id=j;
            span[j].onclick=function(){
                index=this.id;
                span[i].className='active';
                changImg()
            }
        }

    }
}
function changImg(){
    for(var i=0;i<len;i++){
        content[i].style.display='none';
        span[i].className=''
    }
    content[index].style.block='block'
}
sligeImg()*/
