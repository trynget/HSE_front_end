/**
 * Created by cd on 2015/9/8.
 */
$(function(){
    var flag=1;
    var winHeight = $(window).height(),winWidth = $(window).width();
    $('#index_section').fullpage({
        // sectionsColor: ['#fff', '#99c9bb', '#7BAABE', '#f90'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
            if(index == 1){
            }
            if(index == 2){
                $('.section2').find('.sec1_1').delay(100).animate({
                    left: '0'
                }, 300, 'easeInOutCirc');
                $('.section2').find('.sec1_2').delay(300).animate({
                    left: '0'
                }, 900, 'easeOutExpo');
                $('.section2').find('.sec1_3').delay(500).animate({
                    left: '0'
                }, 900, 'easeOutExpo');
                $('.section2').find('.sec1_4').delay(700).animate({
                    left: '0'
                }, 900, 'easeOutExpo');
                $('.section2').find('.sec1_5').delay(900).animate({
                    left: '-5%'
                }, 900, 'easeOutExpo');
                $(".sec2_bottom .bot_1").find('img').delay(500).animate({
                    bottom: '0%'
                }, 900, 'easeOutExpo');
                setTimeout(function(){
                    $('.section2').find('.sec_btn').fadeIn(3000);
                },1000);
                setTimeout(function(){
                    $('.sec2_bottom .bot_2').find('img').fadeIn(700);
                },800);
            }
            if(index == 3){
                $('.section3').find('.sec3_1').delay(100).animate({
                    left: '0'
                }, 300, 'easeOutExpo');
                $('.section3').find('.sec3_2').delay(300).animate({
                    left: '0'
                }, 900, 'easeOutExpo');
                $('.section3').find('.sec3_3').delay(500).animate({
                    left: '0'
                }, 900, 'easeOutExpo');
                $('.sec3_bottom').find('img').delay(500).animate({
                    bottom: '0%'
                }, 1500, 'easeOutExpo');
                setTimeout(function(){
                    $('.section3').find('.sec_btn').fadeIn(3000);
                },800);
            }
            if(index == 4){
                $('.section4').find('.sec4_1').delay(100).animate({
                    left: '0'
                }, 300, 'easeOutExpo');
                $('.section4').find('.sec4_2').delay(300).animate({
                    left: '0'
                }, 900, 'easeOutExpo');
                $('.section4').find('.sec4_3').delay(500).animate({
                    left: '0'
                }, 900, 'easeOutExpo');
                $('.sec4_bottom').find('img').delay(500).animate({
                    bottom: '4%'
                }, 1500, 'easeOutExpo');
                setTimeout(function(){
                    $('.section4').find('.sec_btn').fadeIn(3000);
                },800);
            }
            if(index == 5){
              //  $('.section4').find('p').fadeIn(2000);
            }
            if(index>4){
                $("#bottom_mess").css('display','none');
            }else{
                $("#bottom_mess").css('display','');
            }
        },
        onLeave: function(index, direction){
            if(flag){
                if(index == 1){
                    $('.section1').find('.sec_1').delay(500).animate({
                        left: '-120%'
                    }, 1500, 'easeOutExpo');
                }
                if(index == '2'){
                    $('.section2').find('.sec1_1').delay(300).animate({
                        left: '-120%'
                    }, 500, 'easeOutExpo');
                    $('.section2').find('.sec1_2').delay(300).animate({
                        left: '-120%'
                    }, 500, 'easeOutExpo');
                    $('.section2').find('.sec1_3').delay(300).animate({
                        left: '-120%'
                    }, 500, 'easeOutExpo');
                    $('.section2').find('.sec1_4').delay(300).animate({
                        left: '-120%'
                    }, 500, 'easeOutExpo');
                    $('.section2').find('.sec1_5').delay(300).animate({
                        left: '-120%'
                    }, 500, 'easeOutExpo');
                    $(".sec2_bottom .bot_1").find('img').delay(300).animate({
                        bottom: '-120%'
                    }, 500, 'easeOutExpo');
                    $('.sec2_bottom .bot_2').find('img').fadeOut(300);
                    $('.section2').find('.sec_btn').fadeOut(300);
                }
                if(index == '3'){
                    $('.section3').find('.sec3_1').delay(100).animate({
                        left: '-120%'
                    }, 300, 'easeOutExpo');
                    $('.section3').find('.sec3_2').delay(300).animate({
                        left: '-120%'
                    }, 900, 'easeOutExpo');
                    $('.section3').find('.sec3_3').delay(500).animate({
                        left: '-120%'
                    }, 900, 'easeOutExpo');
                    $('.sec3_bottom').find('img').delay(500).animate({
                        bottom: '-120%'
                    }, 1500, 'easeOutExpo');
                    $('.section3').find('.sec_btn').fadeOut(300);
                }
                if(index == '4'){
                    $('.section4').find('.sec4_1').delay(100).animate({
                        left: '-120%'
                    }, 300, 'easeOutExpo');
                    $('.section4').find('.sec4_2').delay(300).animate({
                        left: '-120%'
                    }, 900, 'easeOutExpo');
                    $('.section4').find('.sec4_3').delay(500).animate({
                        left: '-120%'
                    }, 900, 'easeOutExpo');
                    $('.sec4_bottom').find('img').delay(500).animate({
                        bottom: '-120%'
                    }, 1500, 'easeOutExpo');
                    $('.section4').find('.sec_btn').fadeOut(300);
                }
                if(index == '5'){
                //    $('.section4').find('p').fadeOut(2000);
                }
            }
        }
    });
    $(".bottom_open a").on("click",function(){
        if($(this).hasClass("current")){
            $(".bottom_content").slideUp();
            $(this).removeClass("current");
        }else{
            $(".bottom_content").slideDown();
            $(this).addClass("current");
        }
    });

    $(window).resize(function(){
        autoScrolling();
    });
    function autoScrolling(){
        var $ww = $(window).width();
        var winHeight = $(window).height(),winWidth = $(window).width();
        imgSize(winWidth,winHeight);
        if($ww < 1200){
            $("#navPart").removeClass("nav").addClass('navSmall');
            $(".header").css("position",'fixed');
            $(".detailMess p").css('fontSize','13px');
        }else{
            $("#navPart").removeClass("navSmall").addClass('nav');
            $(".header").css("position",'fixed');
        }
        if($ww < 1024 ||winHeight<560){
            $.fn.fullpage.setAutoScrolling(false);
            $("#menu").css("display",'none');
            $(".header").css("position",'absolute');
            $(".section").css("min-height",'650px')
            flag=0;
        } else {
            $.fn.fullpage.setAutoScrolling(true);
            $("#menu").css("display",'');
            $(".header").css("position",'fixed');
            flag=1;
        }
    }
     imgSize(winWidth,winHeight);
     function imgSize(winWidth,winHeight){
        var percent = 2560/1400,winPercent = winWidth/winHeight;
        if((winPercent>percent && winWidth<=1366) || winWidth<=1100){
            $("#sec5_links").removeClass("sec5_link").addClass('sec5_link_small');
        }else {
            $("#sec5_links").removeClass("sec5_link_small").addClass('sec5_link');
        }
    }
    $(window).bind('scroll', function() {
        var $ww = $(window).width();
        if($ww < 1024 ||winHeight<560){
            $(".header").css('top',$(document).scrollTop()+'px');
        }else{
            $(".header").css('top',0);
        }
    })
    autoScrolling();
    $(".bottom_content ul li").hover(function(){
        $(this).children("div").slideDown(500);
    }, function(){
        $(this).children("div").slideUp(500);
    });


});
