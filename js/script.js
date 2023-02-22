//풀페이지

$(function () {
    $('#fullpage').fullpage({
        //options here
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        navigation: true,
    });
});

//타이핑

let text = document.querySelector('.home-main-text');
let content = "안녕하세요 :)\n어쩌구\n고가연입니다.";
let contentIndex = 0;


let typing = function() {
    text.innerHTML += content[contentIndex];
    contentIndex++;
    if(content[contentIndex] === "\n") {
        text.innerHTML += "<br />";
        contentIndex++;
    }
    if(contentIndex > content.length) {
        text.textContent = "";
        contentIndex = 0;
    }
}

setInterval(typing, 200);

//page1 공 움직이기
$(document).ready(function() {

    $('.c-main').stop().animate({left:'28%', top:'30%',opacity:1},2000)
    $('.c-yellow').stop().animate({left:'19%', top:'20%',opacity:1},2000)
});

