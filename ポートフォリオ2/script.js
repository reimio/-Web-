'use strict';

/*トップページ*/
window.addEventListener('load', function(){
    document.getElementById('gif').classList.add('loaded');
    document.getElementById('id_top').classList.add('fade_in_top');
    document.getElementById('id2_top').classList.add('fade_in2_top');
    document.getElementById('id3_top').classList.add('fade_in3_top');
    document.getElementById('id4_top').classList.add('fade_in4_top');
    document.getElementById('id5_top').classList.add('fade_in5_top'); 
    });

/*会社概要*/
window.addEventListener('load', function(){
    document.getElementById('id7_top').classList.add('fade_in7_top')
    document.getElementById('id8_top').classList.add('fade_in8_top');
    });

window.addEventListener('DOMContentLoaded', ()=>{
    window.addEventListener('scroll',()=>{
    document.querySelectorAll('.fadein_left, .fadein_right').forEach(x=>{
    var scroll = window.pageYOffset;
    var elemPos = x.getBoundingClientRect().top+scroll;
    var windowHeight = document.documentElement.offsetHeight;
    if (scroll > elemPos - windowHeight + 150){
    x.classList.add('scrollin');
    }
    });
    });
    });
    
/*自己紹介*/
window.addEventListener('load', function(){
document.getElementById('id6_top').classList.add('fade_in6_top');
});

if(navigator.userAgent.indexOf('Android') > 0) {
    let Ar = document.querySelector('.self_content_text');
    Ar.classList.add('Android'); 
}

if(navigator.userAgent.indexOf('iPhone') > 0) {
    let ip = document.querySelector('.self_content_text');
    ip.classList.add('iPhone'); 
}

/*お問い合わせ*/
document.getElementById('contact').onsubmit = function() {
    let textvalue = document.getElementById('name').value;
    let textvalue2 = document.getElementById('mail').value;
    let textvalue3 = document.getElementById('postal_code').value;
    let textvalue4 = document.getElementById('postal_code2').value;
    let textvalue5 = document.getElementById('s_address').value;
    let textvalue6 = document.getElementById('tel').value;
    let textvalue7 = document.getElementById('ask').value;
    
    if(textvalue === "" || textvalue2 === "" || textvalue3 === "" || textvalue4 === "" || textvalue5 === "" || textvalue6 === "" || textvalue7 === "") {
    window.alert('入力されていません');
    return false;
    }
    else if(textvalue2.match(/[^0-9a-zA-Z@.-]+/)) {
    window.alert('半角で入力してください(メールアドレス)');
    return false;
    }
    else if(!textvalue3.match(/^(\d){3}$/) || !textvalue4.match(/^(\d){4}$/)) {
    window.alert('半角数字の入力、桁数の確認願います(郵便番号)');
    return false;
    }
    else if(!textvalue6.match(/^\d{2,5}-\d{1,4}-\d{4}$/)) {
    window.alert('半角数字,ハイフンありで入力して下さい(電話番号)');
    return false;
    }
};