/**
 * Created by Ostap Tomkevich on 12.06.2017.
 */
$(document).ready(function() {
    $(".menu_adapt").click(function(){
        $(".main_nav_phone").css('display', 'block').css('transition', '0.5s');
        $(".phone_menu_close").css('display', 'block').css('transition', '0.5s');
    });
    $(".phone_menu_close").click(function () {
        $(".main_nav_phone").css('display', 'none').css('transition', '0.5s');
        $(".phone_menu_close").css('display', 'none').css('transition', '0.5s');
    });
    $('.btn_form').click(function () {
        $('.application').css('display', 'block');
    })
    $('.close_application').click(function () {
        $('.application').css('display', 'none');
    })
    var lastScroll = window.innerHeight/3;
    var temp;
    $(window).scroll(function (event) {
        var nowScroll = $(this).scrollTop();
        console.log(nowScroll);

        if (nowScroll > lastScroll){
            console.log("aaaa");
            $('.main_nav').css({
                'position':'fixed',
                'top':'0',
                'left':'0',
                'z-index':'5',
                'background':'#000',
                'opacity':'1',
                'width':'100%',
                'padding-left':'4.5%',
                'transition':'0.5s'

            });
        }
        else {
            console.log("bbbb");
            $('.main_nav').css({
                'position':'static',
                'background':'transparent',
                'width':'100%',
                'padding-left':'0%'
            });
        }
        if (temp < nowScroll && temp > lastScroll*2) {
            $('.main_nav').css({
                'position':'fixed',
                'top':'-60px'
            });
        }
        temp = nowScroll;
    })
    $(".main_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });



});
