$(function (){
    //导航栏
    var hh=$(window).height();
    var ww=$(window).width();
    $(".opt").css("height",hh);
    var flag=true;
    $(window).resize(function () {
        hh=$(window).height();
        ww=$(window).width();
        $(".opt").css("height", hh);
        if(ww>765) {
            flag=true;
            $(".menu").find(".line1").css({
                transform: "translate(0,0) rotate(0)"
            });
            $(".menu").find(".line2").css({
                transform: "translate(0,0) rotate(0)"
            });
            $(".opt").css("display", "none");
            $(".footer").find("ul").css("display","block");
            $(".footer").find("ul.jia").css("display","none");
            $(".footer").find("ul.jia").css({
                transform:"rotate(0)"
            });
        }
        else{
            $(".footer").find("ul.jia").css("display","block");
            $(".footer").find("ul:not('.jia')").css("display","none");
        }
    });
    $(".menu").click(function () {
        if(flag){
            flag=false;
            $(this).find(".line1").css({
                transform:"translate(0,5px) rotate(45deg)"
            });
            $(this).find(".line2").css({
                transform:"translate(0,-5px) rotate(-45deg)"
            });
            $(".opt").slideToggle();
        }
        else{
            flag=true;
            $(this).find(".line1").css({
                transform:"translate(0,0) rotate(0)"
            });
            $(this).find(".line2").css({
                transform:"translate(0,0) rotate(0)"
            });
            $(".opt").slideToggle();
        }
    })
    //banner轮播
    var t1,t2;
    var btime=3000;
    var curNum=0;
    var nextNum=0;
    var prostart=100;
    var flag1=true;
    var flagb=true;
    t1=setInterval(move,btime);
    function move(type) {
        if(!flagb){
            return;
        }
        flagb=false;
        var type=type||"right";
        if(type=="right"){
            nextNum=curNum+1;
            if(nextNum>$(".banner .img li").size()-1){
                nextNum=0;
            }
            $(".banner .img li").eq(curNum).css("zIndex","0").animate({"height":"100%","left":"-10%"});
            $(".banner .img li").eq(nextNum).css("zIndex","1").animate({"left":"0"},600,function () {
                $(".banner .img li").eq(curNum).css({"height":"110%","left":"100%"});
                curNum=nextNum;
                prostart=100;
                if(curNum==0){
                    flag1=false;
                }
                flagb=true;
            });
        }else if(type=="left"){
            nextNum=curNum-1;
            if(nextNum<0){
                nextNum=$(".banner .img li").size()-1;
            }
            $(".banner .img li").eq(curNum).css("zIndex","1").animate({"left":"100%"});
            $(".banner .img li").eq(nextNum).css({"zIndex":"0","height":"100%","left":"-10%"}).animate({"left":"0","height":"110%"},function (){
                $(".banner .img li").eq(curNum).css({"zIndex":"0","height":"110%"});
                curNum=nextNum;
                flagb=true;
            })
        }
    }
    //进度条
    var bili;
    t2=setInterval(movepro,50)
    function movepro() {
        prostart+=50;
        bili=prostart/btime;
        if(bili>1){
            bili=1;
        }
        $(".banner .btns li .progress").eq(curNum).css("width",bili*100+"%");
        if(!flag1){
            flag1=true;
            $(".banner .btns li .progress").css("width",0);
        }
    }

    //小按钮
    $(".banner .btns li").click(function () {
        var index=$(this).index();
        clearInterval(t1);
        clearInterval(t2);
        $(".banner .btns li .progress").css("width","0").eq(index).css("width","100%");
        if(index>curNum){
            $(".banner .img li").eq(curNum).css("zIndex","0").animate({"height":"100%","left":"-10%"});
            $(".banner .img li").eq(index).css("zIndex","1").animate({"left":"0"},function () {
                $(".banner .img li").eq(curNum).css({"height": "110%", "left": "100%"});
                curNum=index;
            });
        }else if(index<curNum){
            $(".banner .img li").eq(curNum).css("zIndex","1").animate({"left":"100%"});
            $(".banner .img li").eq(index).css({"zIndex":"0","height":"100%","left":"-10%"}).animate({"left":"0","height":"110%"},function () {
                curNum=index;
                $(".banner .img li").eq(curNum).css("zIndex","1").animate({"height":"110%"});
            });
        }

    });
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
    // window.onblur=function (){
    //     clearInterval(t1);
    //     clearInterval(t2);
    //     prostart=0;
    // }
    // window.onfocus=function () {
    //     t1=setInterval(move,btime);
    //     t2=setInterval(movepro,50);
    // }
    //底部的点开效果
    $(".footer .one").each(function () {
        var footflag=true;
        $(this).click(function () {
            if(ww<=765){
                // event.stopPropagation();
                $(this).find("ul:not('.jia')").slideToggle();
                if(footflag){
                    $(this).find("ul.jia").css({
                        transform:"rotate(45deg)"
                    });
                    footflag=false;
                }
                else{
                    $(this).find("ul.jia").css({
                        transform:"rotate(0)"
                    });
                    footflag=true;
                }
            }
        })
    })
});