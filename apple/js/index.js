$(function () {
        var clientH=$(window).height();
        var clientW=$(window).width();

    // 顶部导航小屏时候的小按钮点击以及下拉框的出现
    var flag=true;
    window.onresize=function(){
        clientH=$(window).height();
        clientW=$(window).width();
        $(".menu").css({"height":clientH,"width":clientW});

        if(clientW>765){
            $(".small .con .smalllist .btn .lin1").css("transform","translate(0,0px) rotate(0deg)");
            $(".small .con .smalllist .btn .lin2").css("transform","translate(0,0px) rotate(0deg)");
            flag=true;
            $(".menu").css("display","none");
        }
    }
    $(".smalllist .btn").click(function () {
        if(flag){
            $(".small .con .smalllist .btn .lin1").css("transform","translate(0,5px) rotate(45deg)");
            $(".small .con .smalllist .btn .lin2").css("transform","translate(0,-4px) rotate(-45deg)");
            $(".menu").toggle();
            flag=false;
        }else{
            $(".small .con .smalllist .btn .lin1").css("transform","translate(0,0px) rotate(0deg)");
            $(".small .con .smalllist .btn .lin2").css("transform","translate(0,0px) rotate(0deg)");
            $(".menu").toggle();
            flag=true;
        }
    })
    // 顶部导航结束

    // banner开始
    /*轮播图*/
    var currentNum=0;
    var nextNum=0;
    var currentTime=0;
    var flag=true;

    function move(type){
        type=type||"right";
        if(type=="right"){
            nextNum++;
            if(nextNum==3){
                nextNum=0;
                flag=false;
            }

            $(".banner li:eq("+currentNum+")").animate({width:"80%",height:"80%"},1000).css("zIndex",0);

            $(".banner li:eq("+nextNum+")").animate({left:0},1000,function(){
                $(".banner li:eq("+currentNum+")").css({
                    left:"100%",width:"100%",height:"100%"
                })
                currentNum=nextNum;
                currentTime=0;
                flag=true;

            }).css("zIndex",1);
        }else if(type=="left"){
            nextNum--;
            if(nextNum==-1){
                nextNum=$(".banner li").length-1;
                flag=false;
            }
            $(".banner li:eq("+currentNum+")").animate({left:"100%"},1000).css("zIndex",1);
            $(".banner li:eq("+nextNum+")").css({width:"80%",height:"80%",left:0}).animate({width:"100%",height:"100%"},1000,function(){
                currentNum=nextNum;
                currentTime=0;
                flag=true;
            }).css("zIndex",0);
        }

    }
    function move1(){
        currentTime+=50;
        var bili=currentTime/3000;
        if(bili>1){
            bili=1;
        }
        $(".progress").eq(currentNum).css({width:bili*100+"%"});
        if(flag===false){
            $(".progress").css("width",0);
        }
    }
    function btnmove(){
        $(".bbtn li").find(".progress").css("width", 0);
        $(".bbtn li").eq(nextNum).find(".progress").css("width", "100%");
    }

    var t2=setInterval(move1,50);
    var t1=setInterval(move,4000);

    window.onblur=function () {
        clearInterval(t1);
        clearInterval(t2);
    }
    window.onfocus=function () {
        t1=setInterval(move,3000);
        t2=setInterval(move1,50);
    }
    $(".bleft").mouseover(function(){
        clearInterval(t1);
        clearInterval(t2);
    });
    $(".bright").mouseover(function(){
        clearInterval(t1);
        clearInterval(t2);
    });
    $(".bleft").mouseout(function(){
        t1=setInterval(move,3000);
        t2=setInterval(move1,50);
    });
    $(".bright").mouseover(function(){
        clearInterval(t1);
        clearInterval(t2);
    });
    $(".bright").mouseout(function(){
        t1=setInterval(move,3000);
        t2=setInterval(move1,50);
    });

    $(".bleft").click(function(){
        move("left");
        btnmove();
    });
    $(".bright").click(function(){
        move("right");
        btnmove();
    });


    $(".bbtn li").click(function(){
        nextNum=$(this).index(".bbtn li");
        stop();
    });


    function stop() {
        /*
         *  定时器停掉
         * */
        clearInterval(t1);
        clearInterval(t2);

        /*按钮的变化*/
        $(".bbtn li").find(".progress").css("width", 0);
        $(".bbtn li").eq(nextNum).find(".progress").css("width", "100%");

        /*轮播图发生变化*/
        if (nextNum > currentNum) {
            $(".banner li:eq("+currentNum+")").animate({width: "80%", height: "80%"},1000).css("zIndex", 0);

            $(".banner li:eq("+nextNum+")").animate({left: 0},1000,function () {
                $(".banner li:eq("+currentNum+")").css({
                    left: "100%", width: "100%", height: "100%"
                })
                currentNum = nextNum;
                flag=true;
            }).css("zIndex", 1)
        } else {
            $(".banner li:eq("+currentNum+")").animate({left: "100%"},1000).css("zIndex", 1);
            $(".banner li").eq(nextNum).css({
                width: "80%", height: "80%", left: 0
            }).animate({width: "100%", height: "100%"},1000,function () {
                currentNum = nextNum;
                flag=true;
            })


        }
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

