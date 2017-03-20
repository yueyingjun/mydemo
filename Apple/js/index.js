$(document).ready(function(){
    var flag=true;
    window.onresize=function(){
        //顶部下拉
        var Height=$(window).height();
        var Width=$(window).width();
        $(".menu").css({"height":Height});
        if(Width>768){
            $(".menu").css({"display":"none"});
            $(".lin1").css({"transform":"translate(0,0px) rotate(0deg)"});
            $(".lin2").css({"transform":"translate(0,0) rotate(0deg)"});
            flag=true;
        }
        $(".nav").css({"background":"#000"})
    }
    window.onresize();
    $(".btn").click(function(){
        if(flag){
            $(".menu").slideToggle();
            $(".lin1").css({"transform":"translate(0,7px) rotate(45deg)"});
            $(".lin2").css({"transform":"translate(0,-5px) rotate(-45deg)"});
            flag=false;
        }else{
            $(".menu").slideToggle();
            $(".lin1").css({"transform":"translate(0,0px) rotate(0deg)"});
            $(".lin2").css({"transform":"translate(0,0) rotate(0deg)"});
            flag=true;
        }
    })
    //底部下拉
    var flag2=true;
    $(".small .details").click(function () {
        if (flag2) {
            $(".small .footerFun").eq($(this).index()).slideToggle();
            $(".small .option").eq($(this).index()).css({"transform": "rotateZ(45deg)"});
            flag2 = false;
        } else {
            $(".small .footerFun").eq($(this).index()).slideToggle();
            $(".small .option").eq($(this).index()).css({"transform": "rotateZ(0deg)"});
            flag2 = true;
        }
    })
    //轮播图
    window.onblur=function(){
        stop();
    }
    window.onfocus=function(){
        t1=setInterval(auto,times);
        t2=setInterval(progress,50);
    }
    var times=3000;
    var currentNum=0;
    var nextNum=0;
    var flag1=true;
    var currentTime=0;
    var t1=setInterval(auto,times);
    function auto(){
        nextNum++;
        if (nextNum > $(".wheel li").length - 1) {
            nextNum = 0;
            flag1 = false;
        }
        $(".wheel li").eq(currentNum).children().animate({width: "70%",height: "70%"
        }, 800).parent().css("z-index", 0);
        $(".wheel li").eq(nextNum).animate({left: 0}, 800, function () {
            $(".wheel li").eq(currentNum).css("left", "100%").children().css({"width": "100%", "height": "100%"});
            currentNum = nextNum;
        }).css("z-index", 1);
        currentTime=0;
    }
    var t2=setInterval(progress,50);
    function progress(){
        currentTime+=50;
        var bili=currentTime/times;
        if(bili>1){
            bili=1;
        }
        $(".circleColor").eq(nextNum).css("width",bili*100+"%");
        if(!flag1){
            $(".circleColor").css("width",0);
            flag1=true;
        }
    }
    function stop(){
        clearInterval(t1);
        clearInterval(t2);
    }
    $(".circle li").click(function(){
        stop();
        if($(this).index()>currentNum){
            $(".wheel li").eq(currentNum).children().animate({width:"80%",height:"80%"},800).parent().css("z-index",0);
            $(".wheel li").eq($(this).index()).animate({left:0},800).css({"z-index":1}).children().animate({"width":"100%","height":"100%"},800);
        }else if($(this).index()<currentNum){
            $(".wheel li").eq(currentNum).children().animate({width:"80%",height:"80%"},800).parent().css({"left":"100%","z-index":0});
            $(".wheel li").eq($(this).index()).css({"left":0,"z-index":1});
            $(".wheel li").eq($(this).index()).children().animate({"width":"100%","height":"100%"},800);
        }
        $(".circleColor").css("width",0).eq($(this).index()).css("width","100%");
        currentNum=$(this).index();
    })

})