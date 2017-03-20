/**
 * Created by Administrator on 2017/3/17.
 */
$(function(){
    var flag=true;
    var height=$(document.body).height();
    var height2=$(".nav_header").height();
    // console.log(height2);
    // console.log(height);
    $(".line").click(function(){
        if(flag){
            flag=false;
            $(".line1").css("transform","translate(0,7px) rotate(45deg)");
            $(".line1").css("transition","transform -0.25s cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s");
            $(".line2").css("transform","translate(0,-3px) rotate(-45deg)");
            $(".line2").css("transition","transform -0.25s cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s");
            $(".ac_list").slideToggle(300);
            $("#ac_nav").height(height);
            $("#ac_nav").css("top",-40);
            $("#ac_nav").css("background","#000");
            $("body").css("overflow","hidden");
            $(".ac_bg").css("transform","translateX(200%)");
            $(".ac_bg").css("transition","transform 0.55s 0.25s ease-out");
        }else{
            flag=true;
            $(".line1").css("transform","translate(0,0) rotate(0deg)");
            $(".line1").css("transition","transform -0.25s cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s");
            $(".line2").css("transform","translate(0,0) rotate(0deg)");
            $(".line2").css("transition","transform -0.25s cubic-bezier(0.4, 0.01, 0.165, 0.99) 1s");
            $(".ac_list").slideToggle(300);
            $("#ac_nav").height(height2);
            $("#ac_nav").css("top",0);
            // $("#ac_nav").css("background","none");
            $(".nav_header").css("background","rgba(0,0,0,0.8)");
            $("body").css("overflow","auto");
            $(".ac_bg").css("transform","translateX(0)");
            $(".ac_bg").css("transition","transform 0.25s 0.55s ease-out");
        }
    })
//轮播图
    var now=0;
    var next=0;
    var times=3000;
    var flag2=true;
    var currentTime=0;
    var t1=setInterval(auto,times);

    //自动轮播
    function auto(){
        next++;
        //拉回
        if(next>$(".gallery_slide_wrapper a").length-1){
            next=0;
            flag2=false;
        }
        //当前张
        $(".gallery_slide_wrapper a").eq(now).animate({width:"80%",height:"80%"},1500).css("zIndex",0);
        //下一张--下一张执行完后执行回调函数
        $(".gallery_slide_wrapper a").eq(next).animate({left:"0"},1500,function(){
            $(".gallery_slide_wrapper a").eq(now).animate({width:"100%",height:"100%",left:"100%"});
            now=next;
        }).css("zIndex",10);
        currentTime=0;
    }

    //进度条
    var t2=setInterval(progress,50);
    function progress(){
        if(flag2){
            currentTime+=50;
            var precent=currentTime/times;
            if(precent>1){
                precent=1;
            }
            $(".circle_progress").eq(next).css("width",precent*100+"%");
        }else{
            $(".circle_progress").css("width",0);
            flag2=true;
        }
    }

    //点击进度条
    $(".circle_dash").click(function(){
        // alert(1);
        var index=$(this).index(".circle_dash");
        next=index;
        stop();
    })
    function stop(){
        clearInterval(t1);
        clearInterval(t2);
        $(".circle_dash .circle_progress").css("width",0).eq(next).css("width","100%");
        if(now<next){
            $(".gallery_slide_wrapper a").eq(now).animate({width:"80%",height:"80%"});
            //下一张--下一张执行完后执行回调函数
            $(".gallery_slide_wrapper a").eq(next).animate({left:"0"},function(){
                $(".gallery_slide_wrapper a").eq(now).css({width:"100%",height:"100%",left:"100%"});
                if(next==0){
                    flag2=false;
                }
                now=next;
                currentTime=0;
            }).css("zIndex",10);

        }else{
            $(".gallery_slide_wrapper a").eq(now).animate({left:"100%"}).css("z-index",10);
            $(".gallery_slide_wrapper a").eq(next).css({left:"0",top:0,width:"80%",height:"80%"}).animate({
                width:"100%",height:"100%"},function(){
                now=next;
            });
        }
    }
    //左右按钮点击事件
    $(".arrow_pre").click(function(){
        next--;
        if(next==-1){
            next=$(".gallery_slide_wrapper a").length-1;
        }
        stop();
    })
    $(".arrow_next").click(function(){
        next++;
        if(next>$(".gallery_slide_wrapper a").length-1){
            next=0;
        }
        stop();
    })


    //底部
    $(".click_title").click(function(){
        $(".click_list").eq($(".click_title").index(this)).slideToggle();
    })
})
