/**
 * Created by heber on 2019/3/27.
 */
window.onload=init;
function init(){
    // ��ȡ������ť�������б�
    var navBtn = document.querySelector('.navBtn'),
        navList = document.querySelector('.nav-list'),
        flag=false;
    navBtn.addEventListener('click',function(){

        if (!flag) {
            // ������δ��ʾʱ
            // topֵ�����ı�ʱ��������
            navList.style.transition ='top 1.5s linear';
            navList.style.top = '0px';
            // �ı䵼����״̬��ʶ
            flag=true;
        }else{
            navList.style.top = '-257px';
            flag=false;
        }
    });
}
