$(function() {
//nav点击出现事件
    function hit() {
        var flag = true;
        $(".hit").click(function () {
            if (flag) {
                $(".line1").css("transform", "translate(0,5px) rotate(45deg)");
                $(".line2").css("transform", "translate(0,-5px) rotate(-45deg)");
                flag = false;
                $(".top_small").css("background", "#000");
            } else {
                $(".line1").css("transform", "translate(0,0) rotate(0)");
                $(".line2").css("transform", "translate(0,0) rotate(0)");
                $(".top_small").css("background", "rgba(0,0,0,.8)");
                flag = true;
            }
            $(".yin").slideToggle(1000);
        });
    }

    hit();
//设置高度
    window.onresize = function () {
        var clienth = $(window).height() - 48;
        var clientw = $(window).width();
        $(".yin").css("height", clienth);
        if (clientw > 765) {
            $(".yin").css("display", "none");
            flag = true;
            $(".line1").css("transform", "translate(0,0) rotate(0)");
            $(".line2").css("transform", "translate(0,0) rotate(0)");
        }
    }
    window.onresize();
//底部出现
        function foot() {
            var flag1 = true;
                $(".list").click(function () {
                    if($(window).width()<750) {
                    if (flag1) {
                        $(this).children("h5").children(".add").css("transform", "translate(0,0px) rotate(45deg)");
                        flag1 = false;
                    } else {
                        $(this).children("h5").children(".add").css("transform", "translate(0,0) rotate(0deg)");
                        flag1 = true;
                    }
                    $(this).children("ul").children("li").toggle(300);

                    }
                })
            $(window).resize(function(){
                if($(window).width()>750){
                    $(".list ul li").show();
                }else if($(window).width()<750){
                    $(".list ul li").hide();
                }
            })
        }
        foot();
    //}
//轮播
    function bannerLunbo(){

        var imglis=$(".banner_img .b_img_box");
        var btnlis=$("ul.btn li");
        var progress=$(".progress");
        var lbtn=$(".left").eq(0);
        var rbtn=$(".right").eq(0);
        var t1,t2;
        var time=4000;
        var nowIndex=0;
        var nextIndex=0;
        var flag=true;

        var t1=setInterval(autoLunbo,time);
        var t2=setInterval(autoBtn,50);
        function autoLunbo(type){
            var type=type||"r";
            if(type=="r"){
                nextIndex++;
                if(nextIndex>=imglis.length){
                    nextIndex=0;
                    flag=false;
                }
                imglis.eq(nowIndex).css({'z-index':10}).animate({width:'80%',height:'80%',left:-'80%'},function(){
                    flag=true;
                    nowIndex=nextIndex;
                    $(this).css({left:'100%',width:'100%',height:'100%'});
                });
                imglis.eq(nextIndex).css({'z-index':99}).animate({left:0});
            }else if(type=="l"){
                nextIndex--;
                if(nextIndex<0){
                    nextIndex=imglis.length-1;
                }
                imglis.eq(nowIndex).css({'z-index':10}).animate({width:'80%',height:'80%',left:'80%'},function(){
                    $(this).css({left:'100%',width:'100%',height:'100%'});
                });
                imglis.eq(nextIndex).css({'z-index':99,left:'-100%'}).animate({left:0});
            }
            nowIndex=nextIndex;
        }
        rbtn.click(function(){
            clearInterval(t1);
            clearInterval(t2);
            autoLunbo("r");
            clickBtn()
        });
        lbtn.click(function(){
            clearInterval(t1);
            clearInterval(t2);
            autoLunbo("l");
            clickBtn()
        });
        /*底部按钮动效的当前时间*/
        var currTime=0;
        function autoBtn(){
            currTime=currTime+50;
            var bili=currTime/time;
            progress.eq(nextIndex).css({width:bili*100+'%'});
            if(bili>=1){
                bili=0;
                currTime=0;
            }
            if(!flag){
                $(".progress").css({width:0});
            }
        };
        /*底部按钮单击*/
        btnlis.click(function(){
            clearInterval(t1);
            clearInterval(t2);
            nextIndex=$(this).index();

            if(nextIndex>nowIndex){
                imglis.eq(nowIndex).css({'z-index':10}).animate({width:'80%',height:'80%',left:-'80%'},function(){
                    nowIndex=nextIndex;
                    $(this).css({left:'100%',width:'100%',height:'100%'});
                });
                imglis.eq(nextIndex).css({'z-index':99}).animate({left:0});
            }else if(nextIndex<nowIndex){
                imglis.eq(nowIndex).css({'z-index':10}).animate({width:'80%',height:'80%',left:'80%'},function(){
                    nowIndex=nextIndex;
                    $(this).css({left:'100%',width:'100%',height:'100%'});
                });
                imglis.eq(nextIndex).css({'z-index':99,left:'-100%'}).animate({left:0});
            }
            clickBtn();
        });

        /*单击按钮 底部按钮效果*/
        function clickBtn(){
            progress.eq(nowIndex).css({width:'100%'}).animate({opacity:0},200);
            progress.eq(nextIndex).css({width:'100%',opacity:0}).animate({opacity:1},200);
        }

        //window.onblur=function(){
        //    clearInterval(t1);
        //    clearInterval(t2);
        //};
        //window.onfocus=function(){
        //    t1=setInterval(autoLunbo,time);
        //    t2=setInterval(autoBtn,50);
        //};
    }
    bannerLunbo();

});