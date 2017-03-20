$(function () {

// 下拉
    var flag=true;

    window.onresize=function() {
        var clientH = $(window).height();
        var clientW = $(window).width();
        $(".menu").css("height", clientH);
        if(clientW>765){
            $(".menu").css("display","none");
            flag=true;
            $(".line1").css({transform:"translate(0,0px) rotate(0deg)"});
            $(".line2").css({transform:"translate(0,0px) rotate(0deg)"});
        }
    }
    window.onresize();
    $(".nav-smail .btn").click(function(){
        if(flag){
            $(".line1").css({
                transform:"translate(0,5px) rotate(45deg)"
            })
            $(".line2").css({
                transform:"translate(0,-3px) rotate(-45deg)"
            })

            flag=false;
        }else{
            $(".line1").css({transform:"translate(0,0px) rotate(0deg)"});
            $(".line2").css({transform:"translate(0,0px) rotate(0deg)"});
            flag=true;
        }

        $(".menu").slideToggle(1000);
    })



//轮播
    var times=2000;
    var currentNum=0;
    var nextNum=0;
    var currentTime=0;
    t1=setInterval(auto,times);
    var flag1=true;
    var t1,t2;
    function auto() {
        nextNum++;
        if(nextNum>2){
            nextNum=0;
        }
        $(".banner-box li").eq(currentNum).animate({width:"80%",height:"80%"});
        $(".banner-box li").eq(nextNum).animate({left:0},
            function () {
                $(".banner-box li").eq(currentNum).css({width:"100%",height:"100%",left:"100%"});
                currentNum=nextNum;
                currentTime=0;
                if(nextNum==0){
                    flag1=false;
                }
            }).css("z-index",1);


    }

// 进度条
    t2=setInterval(progrees,50);
    function progrees() {
        currentTime+=50;
        var bili=currentTime/times;
        if(bili>1){
            bili=1;
        }
        $(".progress").eq(currentNum).css("width",bili*100+"%");

        if(!flag1){
            $(".progress").css("width",0);
            flag1=true;
        }
    }

// 下方按钮

    $(".btns .btn").click(function () {
        var index=$(this).index(".btns .btn");
        nextNum=index;
        stop();
    });
    function stop() {
        clearInterval(t1);
        clearInterval(t2);
        $(".progress").css("width",0).eq(nextNum).css("width","100%");
        if(currentNum<nextNum){
            $(".banner-box li").eq(currentNum).animate({width:"80%",height:"80%"})
            $(".banner-box li").eq(nextNum).animate({left:0},function(){
                $(".banner-box li").eq(currentNum).css({width:"100%",height:"100%",left:"100%"})
                if(nextNum==0){
                    flag1=false;
                }
                currentNum=nextNum;
                currentTime=0;
            }).css("zIndex",1);
        }else{
            $(".banner-box li").eq(currentNum).animate({left:"100%"}).css("z-index",1);
            $(".banner-box li").eq(nextNum).css({left:0,top:0,width:"80%",height:"80%"}).animate({width:"100%",height:"100%"},function(){
                currentNum=nextNum;
            })
        }

    }


// 左右按钮
    $(".aleft").click(function () {
        nextNum--;
        if(nextNum==-1){
            nextNum=$(".banner-box li").length-1;
        }
        stop();
    });

    $(".aright").click(function () {
        nextNum++;
        if(nextNum>$(".banner-box li").length-1){
            nextNum=0;
        }
        stop();
    });

// 底部下拉

    var flag2=true;
    window.onresize=function() {
        $(".menu2").css("height",auto);
        if(clientW>768){
            $(".menu2").css("display","none");
            flag2=true;
            $(".jia").css({transform:"translate(0,0px) rotate(45deg)"});
        }
    }

    $(".fuwu2 div").click(function(){
        if(flag2){
            $(".jia").css({
                transform:"translate(0,0px) rotate(45deg)"
            })
            flag2=false;
        }else{
            $(".jia").css({transform:"translate(0,0px) rotate(0deg)"});
            flag2=true;
        }
        $(".menu2").slideToggle(300);
    })

})