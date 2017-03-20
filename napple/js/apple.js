$(document).ready(function(){
    var flag=true;
    window.onresize=function(){
        var widthX=$(window).width();
        var heightH=$(window).height();
        $(".menu").css("height",heightH);
        if(widthX>765){
            $(".menu").css("display","none");
            $(".line1").css({"transform": "translate(0,0px) rotate(0deg)"});
            $(".line2").css({"transform": "translate(0,0px) rotate(0deg)"});
            flag=true;
        }
        $(".wheel").css("max-width",widthX);
    };
    window.onresize();
    $(".btn").click(function () {
        if(flag){
            $(".menu").slideToggle();
            $(".line1").css({"transform": "translate(0,2.5px) rotate(45deg)"});
            $(".line2").css({"transform": "translate(0,-2.5px) rotate(-45deg)"});
            flag=false;
        }else{
            $(".menu").slideToggle();
            $(".line1").css({"transform": "translate(0,0px) rotate(0deg)"});
            $(".line2").css({"transform": "translate(0,0px) rotate(0deg)"});
            flag=true;
        }
    })
    //轮播
    var times=3000;
    var t1=setInterval(move,times);
    var now=0;
    var next=0;
    var currentTime=0;
    var flag1=true;
    function move() {
        next++;
        if(next>$(".wheel-lists").length-1){
            next=0;
            flag1=false;
        }
        //当前页面的变化
        $(".wheel-lists").eq(now).animate({width:"80%",height:"80%"},1500).css("z-index",0);
        //下一张的变化
        $(".wheel-lists").eq(next).animate({left:0},1500,function(){
            $(".wheel-lists").eq(now).css({left:"100%",width:"100%",height:"100%"});
            now=next;
        }).css("z-index",1);
        currentTime=0;
    }
    //进度条的变化
    var t2=setInterval(progress,50);
    function progress() {
        currentTime+=50;
        var bili=currentTime/times;
        if(bili>1){
            bili=1;
        }
        $(".jindu").eq(next).css("width",bili*100+"%");
        if(!flag1){
            $(".jindu").css("width",0);
            flag1=true;
        }
    }
    // 进度条的点击事件
    $(".rect-btn").click(function(){
        next=$(this).index();
        if($(this).index()>now){
            //当前页面的变化
            $(".wheel-lists").eq(now).animate({width:"80%",height:"80%"},1500).css("z-index",0);
            //下一张的变化
            $(".wheel-lists").eq($(this).index()).animate({left:0},1500,function(){
                $(".wheel-lists").eq(now).css({left:"100%",width:"100%",height:"100%"});
                now=$(this).index();
            }).css("z-index",1);
        }else if($(this).index()<now){
            $(".wheel-lists").eq(now).animate({left:"100%"},1500);
            $(".wheel-lists").eq($(this).index()).css({left:0,width:"80%",height:"80%"});
            $(".wheel-lists").eq($(this).index()).animate({width:"100%",height:"100%",zIndex:1},1500,function () {
                now=$(this).index();
            });
        }else if($(this).index()==now){
            $(".wheel-lists").eq(now).css({width:"80%",height:"80%"});
            $(".wheel-lists").eq(now).animate({width:"100%",height:"100%"});
        }
        $(".jindu").css("width",0).eq($(this).index()).css("width","100%");
        stop();
    })
    function stop(){
        clearInterval(t1);
        clearInterval(t2);
    }
    // 左右点击按钮
    $(".rightBtn").click(function () {
        next++;
        if(next>$(".wheel-lists").length-1){
            next=0;
            flag1=false;
        }
        //当前页面的变化
        $(".wheel-lists").eq(now).animate({width:"80%",height:"80%"},1500).css("z-index",0);
        //下一张的变化
        $(".wheel-lists").eq(next).animate({left:0},1500,function(){
            $(".wheel-lists").eq(now).css({left:"100%",width:"100%",height:"100%"});
            now=next;
        }).css("z-index",1);
        $(".jindu").css("width",0).eq(next).css("width","100%");
        stop();
    })
    $(".leftBtn").click(function () {
        next--;
        if(next<0){
            next=$(".wheel-lists").length-1;
            flag1=false;
        }
        $(".wheel-lists").eq(now).css({"z-index":2});
        $(".wheel-lists").eq(now).animate({left:"100%"},1500);
        $(".wheel-lists").eq(next).css({left:0,width:"80%",height:"80%","z-index":1});
        $(".wheel-lists").eq(next).animate({width:"100%",height:"100%",zIndex:1},1500,function () {
            now=next;
        });
        $(".jindu").css("width",0).eq(next).css("width","100%");
        stop();
    })
    // 列表页选项卡
    $(".xiaoping li").click(function () {
        if(!$(".xiaopingright").eq($(this).index()).attr("ok")){
            $(".xiaopingright").eq($(this).index()).css({"transform": "rotate(45deg)"});
            $(".xiaopingright").eq($(this).index()).attr("ok","ok");
        }else{
            $(".xiaopingright").eq($(this).index()).css({"transform": "rotate(0deg)"});
            $(".xiaopingright").eq($(this).index()).removeAttr("ok");
        }
        $(".mulu").eq($(this).index()).slideToggle();
    })

    window.blur(function () {
        stop();
    })
    window.focus(function () {
        t1=setInterval(move,times);
        t2=setInterval(progress,50);
    })
})
