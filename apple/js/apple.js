$(function(){
    var flag=true;
    window.onresize=function () {
        var clientHeight=$(window).height();
        var clientWidth=$(window).width();
        $(".menu").css("height",clientHeight);
        if (clientWidth>765){
            $(".menu").css("display","none");
            flag=true;
            $(".line1").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".line2").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
        }
    }
    window.onresize();

    $(".small .con .btn").click(function(){
        if(flag){
            $(".line1").css({
                transform:"translate(0,5px) rotate(45deg)"
            })
            $(".line2").css({
                transform:"translate(0,-3px) rotate(-45deg)"
            })
            flag=false
        }else{
            $(".line1").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".line2").css({
                transform:"translate(0,0px) rotate(0deg)"
            })

            flag=true
        }
        $(".menu").slideToggle(1000);
    })

    //banner
    var times=3000;
    var now=0;
    var next=0;
    var prostart=100;
    var t1,t2;

    t1=setInterval(move,times);
    function move(type) {
        var type=type||"right";
        if(type=="right"){
            next=now+1;
            if(next>$(".picbox li").size()-1){
                next=0;
            }
            $(".picbox li").eq(now).css("zIndex","0").animate({"height":"100%","left":"-10%"});
            $(".picbox li").eq(next).css("zIndex","1").animate({"left":"0"},600,function () {
                $(".picbox li").eq(now).css({"height":"110%","left":"100%"});
                now=next;
                prostart=100;
                if(now==0){
                    $(".banner .btns li .progress").css("width",0);
                }
            });
        }else if(type=="left"){
            next=now-1;
            if(next<0){
                next=$(".picbox li").size()-1;
            }
            $(".picbox li").eq(now).css("zIndex","1").animate({"left":"100%"});
            $(".picbox li").eq(next).css({"zIndex":"0","height":"100%","left":"-10%"}).animate({"left":"0","height":"110%"},function (){
                $(".picbox li").eq(now).css({"zIndex":"0","height":"110%"});
                now=next;
            })
        }
    }

    //进度条
    var bili;
    t2=setInterval(movepro,50)
    function movepro() {
        prostart+=50;
        bili=prostart/times;
        if(bili>1){
            bili=1;
        }
        $(".banner .btns li .progress").eq(now).css("width",bili*100+"%");
    }

    //小按钮
    $(".banner .btns li").click(function () {
        var index=$(this).index();
        clearInterval(t1);
        clearInterval(t2);
        $(".banner .btns li .progress").css("width","0").eq(index).css("width","100%");
        if(index>now){
            $(".picbox li").eq(now).css("zIndex","0").animate({"height":"100%","left":"-10%"});
            $(".picbox li").eq(index).css("zIndex","1").animate({"left":"0"},function () {
                $(".picbox li").eq(now).css({"height": "110%", "left": "100%"});
                now=index;
            });
        }else if(index<now){
            $(".picbox li").eq(now).css("zIndex","1").animate({"left":"100%"});
            $(".picbox li").eq(index).css({"zIndex":"0","height":"100%","left":"-10%"}).animate({"left":"0","height":"110%"},function () {
                now=index;
                $(".picbox li").eq(now).css("zIndex","1").animate({"height":"110%"});
            });
        }

    })
    //左右按钮
    $(".banner .leftBtn li").click(function () {
        clearInterval(t1);
        clearInterval(t2);
        move("left");
        $(".banner .btns li .progress").css("width","0").eq(nextNum).css("width","100%");
    })
    $(".banner .rightBtn li").click(function () {
        clearInterval(t1);
        clearInterval(t2);
        move();
        $(".banner .btns li .progress").css("width","0").eq(nextNum).css("width","100%");
    })
    //bug
    window.onblur=function (){
        clearInterval(t1);
        clearInterval(t2);
    }
    window.onfocus=function () {
        t1=setInterval(move,times);
        t2=setInterval(movepro,50);
    }



    var flag1=true;
    $(".change").click(function () {
        if(flag1){
            $(this).find(".btn1").css("transform","translate(0px,0px) rotate(45deg)");
            $(this).find(".xiala").slideToggle();
            flag1=false;
        }else{
            $(this).find(".btn1").css("transform","translate(0,0) rotate(0deg)");
            $(this).find(".xiala").slideToggle();
            flag1=true;
        }

    })


})