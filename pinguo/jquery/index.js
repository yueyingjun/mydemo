$(function() {
    $(window).resize(function () {
        // 导航栏菜单按钮
        var clearH = $(window).height();
        var clearW = $(window).width();
        $(".header .meau").css({"height": clearH, "width": clearW});
        if (clearW > 765) {
            $(".header .menus .line1").css({transform: "translate(0,0) rotate(0deg)"});
            $(".header .menus .line2").css({transform: "translate(0,0) rotate(0deg)"});
            $(".header .menu").css({"display": "none"});
            flag = true;
        }
    });
    var flag = true;
    $(".menus").click(function () {
        if (flag) {
            $(".header .menus .line1").css({transform: "translate(0,7px) rotate(45deg)"});
            $(".header .menus .line2").css({transform: "translate(0,-6px) rotate(-45deg)"});
            flag = false;
        } else {
            $(".header .menus .line1").css({transform: "translate(0,0) rotate(0deg)"});
            $(".header .menus .line2").css({transform: "translate(0,0) rotate(0deg)"});
            flag = true;
        }
        $(".menu").slideToggle();
    });
    //	轮播
    var times=3000;
    var t1=setInterval(move,times);
    var now=0;
    var next=0;
    var currentTime=0;
    var flag1=true;
    var flag2=true;
    function move() {
        next++;
        if(next>$(".pics li").length-1){
            next=0;
            flag1=false;
        }
        $(".pics li").eq(now).animate({"width":"80%","height":"90%"},1000).css("z-index",0);
        $(".pics li").eq(next).animate({"left":0},1000,function(){
            $(".pics li").eq(now).css({"left":"100%","width":"100%","height":"100%"});
            now=next;
        }).css("z-index",1);
        currentTime=0;
    }
    // 选项卡进度条
    var t2=setInterval(tiao,50);
    function tiao() {
        currentTime+=50;
        var xishu=currentTime/times;
        if(xishu>1){
            xishu=1;
        }
        $(".circle .tiao").eq(next).css("width",xishu*100+"%");
        if(!flag1){
            $(".circle .tiao").css("width",0);
            flag1=true;
        }
    }
    //移入移出效果
    $(".btnbox li").eq(0).hover(function(){
        if(flag){
            flag=false;
            $(".btnbox li").eq(0).children("a").animate({opacity:1},function(){flag=false});
        }
    },function(){
        $(".btnbox li").eq(0).children("a").animate({opacity: 0}, function (){flag = true});
    });
    $(".btnbox li").eq(1).hover(function(){
        if(flag){
            flag=false;
            $(".btnbox li").eq(1).children("a").animate({opacity:1},function(){flag=false});
        }
    },function(){
        $(".btnbox li").eq(1).children("a").animate({opacity: 0}, function (){flag = true});
    });
    // 左击
    $(".btnbox .left").click(function () {
        clearInterval(t1);
        clearInterval(t2);
        next--;
        if(next<0){
            next=$(".pics li").length-1;
        }
        $(".pics li").eq(now).css({"z-index":2});
        $(".pics li").eq(now).animate({"left":"100%"},1000);
        $(".pics li").eq(next).css({"left":0,"width":"100%","height":"100%","z-index":1});
        $(".pics li").eq(next).animate({"width":"100%","height":"100%","zIndex":1},1000,function () {
            now=$(this).index();
        });
        $(".tiao").css("width",0).eq(next).css("width","100%");
    });
    // 右击
    $(".btnbox .right").click(function(){
        clearInterval(t1);
        clearInterval(t2);
        if(flag2){
            flag2=false;
            move();
            $(".tiao").css("width",0).eq(next).css("width","100%");
            flag2=true;
        }
    })
    // 进度条击
    $(".circle li").click(function(){
        clearInterval(t1);
        clearInterval(t2);
        next=$(this).index();
        if($(this).index()>now){
            $(".pics li").eq(now).animate({"width":"80%","height":"80%"},1000).css("z-index",0);
            $(".pics li").eq($(this).index()).animate({"left":0},1000,function(){
                $(".pics li").eq(now).css({"left":"100%","width":"100%","height":"100%"});
                now=$(this).index();
            }).css("z-index",1);
        }else if($(this).index()<now){
            $(".pics li").eq(now).animate({left:"100%"},1000);
            $(".pics li").eq($(this).index()).css({"left":"-100%","width":"100%","height":"100%"});
            $(".pics li").eq($(this).index()).animate({"left":0,"width":"100%","height":"100%","zIndex":1},1000,function () {
                now=$(this).index();
            });
        }
        $(".circle .tiao").css("width",0).eq($(this).index()).css("width","100%");
    })


// 底部点击
    $(".footsmall .bt-r").each(function(index){
        $(".footsmall .bt-r").eq(index).click(function(){
            if($(".footsmall .bt-l").eq(index).css("display")=="none"){
                $(".footsmall .bt-l").eq(index).css({"display":"block"});
                var l=$(".footsmall .bt-l").eq(index).find("li").length+1;
                var h=l*34;
                $(".footsmall .bt-r").eq(index).animate({
                    "height":h+"px"
                },500)
                $(".footsmall .bt-l").eq(index).find("li").animate({
                    opacity:1
                },500);
            }else if ($(".footsmall .bt-l").eq(index).css("display")=="block") {
                $(".footsmall .bt-r").eq(index).animate({
                    "height":"34px"
                },500)
                $(".footsmall .bt-l").eq(index).find("li").animate({
                    opacity:0
                },500);
                $(".footsmall .bt-l").eq(index).css({"display":"none"}).delay(500);
            }
        })
    })












})