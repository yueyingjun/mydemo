/**
 * Created by Administrator on 2017/3/17.
 */
$(function () {
    window.onresize=function(){
        var clientH=$(window).height();
        var clientW=$(window).width();
        $(".menu").css("height",clientH);
        if(clientW>765){
            $(".menu").css("display","none");
            flag=true;
            $(".line1").css({"transform": "translate(0,0px) rotate(0deg)"});
            $(".line2").css({"transform": "translate(0,0px) rotate(0deg)"});
        }

    }
    window.onresize();

    var flag=true;
    $(".btn").click(function () {

        if(flag){
            $(".small").css("background","#000");
            $(".menu").css("background","#000");
            $(".line1").css({"transform": "translate(0,3px) rotate(45deg)"});
            $(".line2").css({"transform": "translate(0,-3px) rotate(-45deg)"});
            flag=false;
        }else{
            $(".small").css("background","rgba(0,0,0,.8)");
            $(".line1").css({"transform": "translate(0,0px) rotate(0deg)"});
            $(".line2").css({"transform": "translate(0,0px) rotate(0deg)"});
            flag=true;
        }
        $(".menu").slideToggle(100);
    })


    //banner轮播
    var now=0;
    var next=0;
    var times=3000;
    var currTime=0;
    var width=$(".bannerbox li").width();
    var flag1=true;
    var t1=setInterval(move,times);
    function move () {
        next=now+1;
        if(next>$(".bannerbox li").length-1){
            next=0;
        }
        $(".bannerbox li").eq(now).animate({width:"80%",height:"80%"},1500);
        //下一张的变化
        $(".bannerbox li").eq(next).animate({left:0},1500,function(){
            $(".bannerbox li").eq(now).css({left:"100%",width:"100%",height:"100%"});
            if(next==0){
                flag1=false;
            }
            now=next;
            currTime=0;
        }).css("zIndex",1);

    }

    $(window).blur(function(){
        clearInterval(t1);
    })
    $(window).focus(function(){
        t1=setInterval(move,times);
    })
    //鼠标移入轮播停止
    $(".banoutbox").hover(function () {
        clearInterval(t1);
    },function () {
        t1=setInterval(move,times);
    })

    //按钮进度
    var t2=setInterval(progress,50);
    function progress() {
        currTime+=100;
        var bili=currTime/times;
        if(bili>1){
            bili=1;
        }
        $(".btnbox li .progress").eq(now).css("width",bili*100+"%");
        if(!flag1){
            $(".btnbox li .progress").css("width",0);
            flag1=true;
        }
    }

    //点击中间按钮
    function stop() {
        clearInterval(t1);
        clearInterval(t2);
        $(".btnbox li .progress").css("width",0).eq(next).css("width","100%");
        if(now<next){
            $(".bannerbox li").eq(now).animate({width:"80%",height:"80%"},1500);
            //下一张的变化
            $(".bannerbox li").eq(next).animate({left:0},1500,function(){
                $(".bannerbox li").eq(now).css({left:"100%",width:"100%",height:"100%"});
                if(next==0){
                    flag1=false;
                }
                now=next;
                currTime=0;
            }).css("zIndex",1);
        }else if(now>next){
            $(".bannerbox li").eq(now).animate({left:"100%"},1500).css("z-index",1);
            $(".bannerbox li").eq(next).css({left:0,width:"80%",height:"80%"}).animate({width:"100%",height:"100%",zIndex:1},1500,function () {
                now=next;
            });
        }
    }
    $(".btnbox li").click(function () {
        var index=$(this).index(".btnbox li");
        next=index;
        stop();
    })
    
//    左按钮点击事件
    $(".btnleft").click(function () {
        next=now-1;
        if(next<0){
            next=$(".bannerbox li").length-1;
        }
        stop();
    })
    // 右按钮点击事件
    $(".btnright").click(function () {
        next=now+1;
        if(next>$(".bannerbox li").length-1){
            next=0;
        }
        stop();
    })


//    选购及了解点击事件
    var flag2=true;
    $(".bt-r").click(function () {
        var that=$(this).index();
        if(flag2){
            $(".jiahao").eq(that).css({"transform": "rotate(45deg) scale(1.08)"});
            flag2=false;
        }else{
            $(".jiahao").eq(that).css({"transform": "rotate(0deg) scale(1.08)"});
            flag2=true;
        }
        $(".contlist").eq(that).slideToggle(100);
    })



})