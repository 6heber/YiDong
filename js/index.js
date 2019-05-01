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
    //�����л�
    _index = spanGroup.index($(this));
    selectPic(_index);

})

function autoGo() {
    //�Զ�����
    timer = setInterval(go, 3000);
}
//�����Զ�����
autoGo();

function go() {
    //��ʱ���ĺ���
    _index++;
    selectPic(_index);
}

function selectPic(num) {
    clearInterval(timer);
    //�����ǵ����СԲ�㱳��ɫ���
    $(".pagination span").eq(num).addClass("active").siblings().
        removeClass("active");
    //СԲ���л�������ʱ��,�ٴ��л���ʱ����,�õ�һ��СԲ����,�ܶ���ʼ
    if (num % 4 == 0) {
        $(".pagination span").eq(0).addClass("active").siblings()
            .removeClass("active");
    }
    $(".inner").stop().animate({
        left: -num * imgWidth,
    }, 1000, function() {
        //����л�ͼƬЧ�������Ժ�,Ҫ��ʼ�Զ�������
        timer = setInterval(go, 3000);
        //�Զ����ż���Ƿ����һ��
        if (_index == innerGroup.length - 1) {
            //���һ��ͼƬ��ʱ��,��_index = 0
            _index %= 4;
            $(".inner").css("left", "0px");
        }
    })
}
/*
var innerGroup=$('.inner-content');//ͼƬ
var spanGroup=$('.pagination span');//�����ť
var imgWidth=$('.inner-content img:first-child').eq(0).width();//ͼƬ���
var _index=0;var timer=null;
//����л�
spanGroup.on('click',function(){
    _index=spanGroup.index($(this)); //index��ʲô��˼
    selectPic(_index)
})
//�Զ��л�
function auto(){
    timer=setInterval(go,3000);

}
auto();
//��ʱ��
function go(){
    _index++;
    selectPic(_index);
}
//�л�ͼƬ����
function selectPic(num){
    clearInterval(timer);
    //���ԲȦ��ԲȦ������ɰ�ɫ
    $(".pagination span").eq(num).addClass('active').siblings.removeClass('active');
    //ԲȦ�л�������ٴ��л����õ�һ���ٴα��
    if(num % 4 == 0){
        $('.pagination span').eq(0).addClass('active').siblings.removeClass('active')
    }
    $('.inner').stop().animate({
        left:-num * imgWidth,
    }, 1000,function(){
        //����л�ͼƬЧ�������󣬿�ʼ�Զ�����
        timer=setInterval(go,3000);
        //�Զ����ż���Ƿ������һ��
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
