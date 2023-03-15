//풀페이지

$(function () {
    $('#fullpage').fullpage({
        //options here
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
    });
});

//타이핑

/* let text = document.querySelector('.home-main-text');
let content = "Hello :)\nI'm\nFront-end Developer\nGo Ga Yeon";
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

setInterval(typing, 200); */



//메뉴 고정
/* 
const section2 = document.querySelector('.section2');
const section2Top = section2.getBoundingClientRect().top + window.scrollY;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    if(this.window.scrollY>=section2Top) {
        header.classList.add('fixed');
    }else{
        header.classList.remove('fixed');
    }
}) */
