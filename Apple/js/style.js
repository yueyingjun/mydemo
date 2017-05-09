/**
 * Created by Administrator on 2017/3/17.
 */
$(document).ready(function() {
    flage=true;
        window.onsize=function(){
            var widthX=$(window).width();
            var heightH=$(document.body).height();
            $(".menu").css("height",heightH);
            if(widthX>765){
                $(".menu").css("display","none");
                $("body").css("overflow","auto");
                $(".line1").css("transform","translate(0,2px) rotate(0deg)");
                $(".line2").css("transform","translate(0,2px) rotate(0deg)");
                flage=true;
            }
            // $(".menu").css({"max-width":"widthX"});
        };
        window.onsize();
        $(".btn").click(function () {
            if(flage){
                $(".menu").slideToggle(1500);
                $("nav").css("top","-40px");
                $(".smalldaohang").css("background","#000");
                $(".add").css("display","none");
                $(".gouwus").css({"transform":"translateX(200%)"});
                $(".gouwus").css({"transition":"transform 0.55s 0.25s ease-out"});
                $(".line1").css({"transform":"translate(0,10px) rotate(45deg)"});
                $(".line2").css({"transform":"translate(0,3px) rotate(-45deg)"});
                $()
                for(var i=0;i<$(".menu li").length;i++){
                    $(".menu li")[i].style.transition="transform 300ms linear "+0.2*i+"s";
                    $(".menu li")[i].style.transform="rotateX(0deg)";
                }



                flage=false;
            }else{
                $(".menu").slideToggle(1500);
                $("nav").css("top","0");
                $(".add").css("display","block");
                $(".gouwus").css({"transform":"translateX(0)"});
                $(".gouwus").css({"transition":"transform 0.55s 0.25s ease-out"});
                $(".line1").css("transform","translate(0,2px) rotate(0deg)");
                $(".line2").css("transform","translate(0,2px) rotate(0deg)");

                for(var i=0;i<$(".menu li").length;i++){
                    $(".menu li")[i].style.transition="transform 300ms linear "+(1.4-0.2*i)+"s";
                    $(".menu li")[i].style.transform="rotateX(90deg)";
                }

                flage=true;
            }
        })
        //轮播
        var times=4000;
        var currentNum=0;
        var netNum=0;
        var flag=true;
        var currentTime=0;
        $(".banner-b a:nth-child(1)").css("z-index",1);
        $(".banner-b a:nth-child(2)").css("z-index",0);
        $(".banner-b a:nth-child(3)").css("z-index",0);
        //自动轮播
        var t=setInterval(auto,times);
        function auto() {
            netNum++;
            if (netNum > $(".banner-b a").length - 1) {
                netNum = 0;
                flag=false;
            }
            //当前页面的变化
            $(".banner-b a").eq(currentNum).animate({width:"80%",height:"80%"},1500).css("z-index",0);
            //下一个页面的变化
            $(".banner-b a").eq(netNum).animate({left:0,zIndex:1},1500,function () {
                $(".banner-b a").eq(currentNum).animate({width:"100%",height:"100%",left:"100%"});
                currentNum=netNum;
            }).css("z-index",1);
            currentTime=0;
        }

        //按钮进度条
            var t1=setInterval(progress,50);
            function progress() {
                currentTime+=50;
                var bili=currentTime/times;
                if(bili>1){
                    bili=1;
                }
                $(".dian ul li a").eq(netNum).css("width",bili*100+"%");
                if(!flag){
                    // alert(1)
                    $(".dian ul li a").css("width",0);
                    flag=true;
                }
            }
    //按钮点击
    $(".dian ul li").click(function() {
        var index=$(this).index(".dian ul li");
        netNum=index;
        stop();
    })

    function stop() {
        clearInterval(t);
        clearInterval(t1);
        $(".dian ul li a").css("width",0).eq(netNum).css("width","100%");
        if(currentNum<netNum){
            //当前的
            $(".banner-b a").eq(currentNum).animate({width:"80%",height:"80%"});
            //下一张的运动
            $(".banner-b a").eq(netNum).animate({left:0},function () {
                $(".banner-b a").eq(currentNum).css({
                    width:"100%",height:"100%",left:"100%"
                })
                if(netNum==0){
                    flag=false;
                }
                currentNum=netNum;
                currentTime=0;
            }).css("zIndex",1);
            }else{
            $(".banner-b a").eq(currentNum).animate({left:"100%"}).css("z-index",1);
            $(".banner-b a").eq(netNum).css({
                left:0,top:0,width:"80%",height:"80%"
            }).animate({width:"100%",height:"100%"},function(){
                currentNum=netNum;
            })
        }
    }
    //按钮
    $(".leftBtn").click(function () {

        netNum--;
        if(netNum<0){
            netNum=$(".banner-b a").length-1;
        }
        $(".dian ul li a").css("width",0).eq(netNum).css("width","100%");
        clearInterval(t);
        clearInterval(t1);
        $(".banner-b a").eq(currentNum).css("z-index",5);
        $(".banner-b a").eq(currentNum).animate({left:"100%"},1500).css("z-index",5);
        $(".banner-b a").eq(netNum).css({left:0,width:"80%",height:"80%","z-index":3});
        $(".banner-b a").eq(netNum).animate({width:"100%",height:"100%"},function(){
            currentNum=netNum;
        })

    })
    $(".rightBtn").click(function () {
        netNum++;
        if(netNum>$(".banner-b a").length-1){
            netNum=0;
        }
        $(".dian ul li a").css("width",0).eq(netNum).css("width","100%");
        clearInterval(t);
        clearInterval(t1);
        $(".banner-b a").eq(currentNum).animate({width:"80%",height:"80%"},1500).css("z-index",1);
        //下一张的运动

        $(".banner-b a").eq(netNum).animate({left:0},1500,function () {
            $(".banner-b a").eq(currentNum).css({
                width:"100%",height:"100%",left:"100%"
            })
            if(netNum==0){
                flag=false;
            }
            currentNum=netNum;
            currentTime=0;
        }).css("zIndex",3);
    })

    //底部
    flags=true;
    $(".zibox h3").click(function () {
        if(flags){
            $(this).find(".jiahao").css({"transform":"rotate(45deg)"});
            flags=false;
        }else{
            $(this).find(".jiahao").css({"transform":"rotate(0deg)"});
            flags=true;
        }
        $(".listbox").eq($(".zibox h3").index(this)).slideToggle();
    })








})

// window.opcur=function(){
//
// }
// window.onfoucs=function () {
//
// }
// 3d








//seeting:在设置
// sourice