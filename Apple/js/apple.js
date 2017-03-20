/**
 * Created by Administrator on 2017/3/17/017.
 */
$(function () {
    var flag=true;
    var clientH=$("window").height();
    var clientW=$("window").width();
    $(".select").css({"height":"clientH","width":"clientW"});
    $("window").resize(function(){
        var clientH=$("window").height();
        var clientW=$("window").width();
        $(".select").css({"height":"clientH","width":"clientW"});
        if(clearH>765){
            $(".smallist .btn .line1").css({transfrom:"translate(0,0) rotate(0deg)"});
            $(".smallist .btn .line2").css({transfrom:"translate(0,0) rotate(0deg)"});
            flag=true;
            $(".select").css({"display":"none"});
        }
    })

    $(".smallist .btn").click(function(){
        if(flag){
            flag=false;
            $(".btn .line1").css(
                "transform", "translate(0,8px) rotate(45deg)"
            )
            $(".btn .line2").css(
                "transform", "translate(0,-5px) rotate(-45deg)"
            )
            flag=true;
        }else{

            $(".btn .line1").css(
                "transform", "translate(0,0px) rotate(45deg)"
            )
            $(".btn .line2").css(
                "transform", "translate(0,0px) rotate(-45deg)"
            )
            flag=true;
        }
    })

    //轮播
    var t=setInterval(move,2000);
    var currentnum=0;
    var nextnum=0;
    function move(){
        nextnum=currentnum+1;
        if (nextnum>$(".banner .bannerz-list").length-1){
            nextnum=0;
        }
        $(".banner .bannerz-list").eq(currentnum).animate({width:"80%",height:"80%",left:"0"},2000).css({"z-index":0,"left":"100%"});
        $(".banner .bannerz-list").eq(nextnum).animate({"left":0},2000,function(){
            currentnum=nextnum;
        }).css({"z-index":1,"width":"100%","height":"100%"});
    }
    $(".leftBox .left").click(function(){
        var nextnum=currentnum-1;
        if (nextnum<0){
            nextnum=$(".banner .bannerz-list").length-1;
        }
        $(".banner .bannerz-list").eq(currentnum).animate({width:"100%",height:"100%","left":"100%"},2000).css({"z-index":1,"left":0});
        $(".banner .bannerz-list").eq(nextnum).animate({width:"100%",height:"100%"},2000,function(){
            currentnum=nextnum;
        }).css({"z-index":0,"width":"80%","height":"80%","left":0});
    })
    $(".rightBox .right").click(function(){
            move();
    })
    $(".leftBox").mouseover(function(){
        $(".leftBox .left").css("display","block");
    })
    $(".leftBox").mouseout(function(){
        $(".leftBox .left").css("display","none");
    })
    $(".rightBox").mouseover(function(){
        $(".rightBox .right").css("display","block");
    })
    $(".rightBox").mouseout(function(){
        $(".rightBox .right").css("display","none");
    })
    $(".banner").on("mouseover",function(){
        clearInterval(t);
    })
    $(".banner").on("mouseout",function(){
        t=setInterval(move,2000);
    })
    // 进度条
    var t2=setInterval(prograss,1000);
    var current=0;
    function prograss(){
        current+=50;
        var bili=current/2000;
        if (bili>1){
            bili=1;
        }
        $(".sbtn .sbtnm").eq(nextnum).css("width",bili*100+"%");
        if(!flag){
            $(".sbtnm").css("width",0);
            flag=true;
        }
    }
    // 底部下拉
    var flag3=true;
    // console.log($(".content .zi").length)
    $(".content .zi").each(function(index){
        $(this).click(function(){
            $(".zi ul ").eq(index).slideToggle();
            if (flag3){
                flag3=false;
                $(".content .zi span").eq(index).css("transform","rotate(45deg)");
            }else{
                flag3=true;
                $(".content .zi span").eq(index).css("transform","rotate(0deg)");
            }
        })
    })
})