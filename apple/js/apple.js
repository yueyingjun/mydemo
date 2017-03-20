$(function(){
    var flag1=true;
    window.onresize=function(){
        var clienh=$(window).height();
        var clienw=$(window).width();
        $(".menu").css("height",clienh);
        if(clienw>750){
            $(".menu").hide();
            $(".line1").css({
                transform:"translate(0,0) rotate(0deg)"
            })
            $(".line2").css({
                transform:"translate(0,0) rotate(0deg)"
            })
            flag1=true;
        }
    }
    window.onresize();
    // var flag=true;
    $(".small .btn").click(function(){
        // $(".menu").css("z-index",3);
        if(flag1){
            $(".btn .line1").css({
                transform:"translate(0,5px) rotate(45deg)"
            })
            $(".btn .line2").css({
                transform:"translate(0,-3px) rotate(-45deg)"
            })
            $(".menu").slideToggle(1000);
            flag1=false;
        }else{
            $(".btn .line1").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".btn .line2").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".menu").slideToggle(1000);
            flag1=true;
        }
    })
// banner轮播
    var times=3000;
    var currentnum=0;
    var nextnum=0;
    var currenttime=0;
    var t1=setInterval(move,times);
    var flag=true;
    function move(){
            nextnum++;
            if(nextnum>$(".wheel-list").length-1){
                nextnum=0;
            }
            $(".wheel-list").eq(currentnum).animate({width:"80%",height:"80%"}).css("zIndex",0);
            $(".wheel-list").eq(nextnum).animate({left:0},function(){
                $(".wheel-list").eq(currentnum).css({
                    width:"100%",height:"100%",left:"100%"
                }).css("zIndex",0)
                if(nextnum==0){
                    flag=false;
                }
                currentnum=nextnum;
                currenttime=0;
            }).css("zIndex",1)
    }
    // 进度条
    var t2=setInterval(progress,50);
    function progress(){
        currenttime+=50;
        var bili=currenttime/times;
        if(bili>1){
            bili=1;
        }
        $(".progress").eq(currentnum).css("width",bili*100+"%");
        if(!flag){
            $(".progress").css("width",0);
            flag=true;
        }
    }
    // 点击按钮
    function stop(){
        clearInterval(t1);
        clearInterval(t2);
        $(".progress").css("width",0).eq(nextnum).css("width","100%");
    }
    $(".btns .btn").click(function(){
        var index=$(this).index();
        // alert(index)
        nextnum=index;
        stop();
        if(currentnum<nextnum){
            $(".wheel-list").eq(currentnum).animate({width:"80%",height:"80%"}).css("zIndex",0)
            $(".wheel-list").eq(nextnum).animate({left:0},function(){
                $(".wheel-list").eq(currentnum).css({
                    width:"100%",height:"100%",left:"100%"
                }).css("zIndex",0)
                if(nextnum==0){
                    flag=false;
                }
                currentnum=nextnum;
                currenttime=0;
            }).css("zIndex",1)
        }else{
            $(".wheel-list").eq(currentnum).animate({left:"100%"}).css("zIndex",0)
            $(".wheel-list").eq(nextnum).css({left:0,top:0,width:"80%",height:"80%"}).animate({width:"100%",height:"100%"},function(){
                currentnum=nextnum;
            }).css("zIndex",1)
        }
    })

    // 左按钮
    $(".leftbtn").click(function(){
        // alert(1)
        nextnum--;
        if(nextnum<0){
            nextnum=$(".wheel-list").length-1;
        }
        $(".wheel-list").eq(currentnum).animate({left:"100%"}).css("zIndex",1)
        $(".wheel-list").eq(nextnum).css({left:0,top:0,width:"80%",height:"80%"}).animate({width:"100%",height:"100%"},function(){
            currentnum=nextnum;
        })
        stop();
    })
    // // 右按钮
    $(".rightbtn").click(function(){
        nextnum++;
        if(nextnum>$(".wheel-list").length-1){
            nextnum=0;
        }
        $(".wheel-list").eq(currentnum).animate({width:"80%",height:"80%"}).css("zIndex",0);
        $(".wheel-list").eq(nextnum).animate({left:0},function(){
            $(".wheel-list").eq(currentnum).css({
                width:"100%",height:"100%",left:"100%"
            })
            if(nextnum==0){
                flag=false;
            }
            currentnum=nextnum;
            currenttime=0;
        }).css("zIndex","1")
        stop();
    })
    // 底部开始
    var flag2=true;
    $(".smallfooter .hyx-xuangou").click(function(){
        alert(indexnum)
        if(flag2){
            $(this).find($(".add")).css({transform:"rotate(45deg)"});
            $(this).parents("li").find($(".footermune")).slideToggle(1000);
            flag2=false;
        }else{
            $(this).find($(".add")).css({transform:"rotate(0deg)"})
            $(this).parents("li").find($(".footermune")).slideToggle(1000);
            flag2=true;
        }
    })


    // 失去焦点
    window.onblur=function(){
        clearInterval(t1)
        clearInterval(t2)
    }
    // 获取焦点
    window.onfocus=function(){
        t1=setInterval(move,times)
        t2=setInterval(progress,50);
    }
})