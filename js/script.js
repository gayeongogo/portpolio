//풀페이지

$(function () {
    $('#fullpage').fullpage({
        //options here
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        navigation: true,
    });
});

//타이핑

    $('.home-main-text').typed({
        strings:["안녕하세요"], //[]안 반점 기준 지워지고 다시 타이핑
        typeSpeed:300,
        backDelay:1000,
        loop: true,
        cursorChar:" "
    });