$(function(){
    // 导航
    var flag1=true;
    window.onresize=function(){
        var height=$(window).height();
        var width=$(window).width();
        $(".hxt-nav ul.navhidden").css("height",height);
        if(width>=765){
            $(".navhidden").css({"display":"none"});
            $(".hxt-nav ul.nav2 .line1").css({transform: "translate(0,0px) rotate(0deg)"});
            $(".hxt-nav ul.nav2 .line2").css({transform: "translate(0,0px) rotate(0deg)"});
            $(".hxt-nav").css("top","0px");
            $(".hxt-nav .nav2 li .gouwu").css("opacity","1");
            flag1=true;
        }
        if(width>=748){
            $(" .hxt-list ul.lists .linedown").hide();
            $(".hxt-list .lists .list").show();
        }else{
            $(".hxt-list .lists .list").hide();
            $(" .hxt-list ul.lists .linedown").show();
        }
        // 列表
        if(width<748){
            var flag=true;
            $(".hxt-list .listtitle").click(function(){
                if(flag){
                    $(this).next().slideDown(100);
                    $(this).find(".after").css({transform: "translate(0,0px) rotate(45deg)"});
                    flag=false;
                }else{
                    $(this).next().slideUp(100);
                    $(this).find(".after").css({transform: "translate(0,0px) rotate(0deg)"});
                    flag=true;
                }
            })
        }
    };
    window.onresize();

    $(".hxt-nav .nav2 li:eq(0)").click(function() {
        if (flag1) {
            $(".hxt-nav ul.nav2 .line1").css({transform: "translate(0,5px) rotate(45deg)"});
            $(".hxt-nav ul.nav2 .line2").css({transform: "translate(0,-2px) rotate(135deg)"});
            $(".hxt-nav").css("top","-44px");
            $(".hxt-nav .nav2 li .gouwu").css("opacity","0");
            flag1 = false;
        } else {
            $(".hxt-nav ul.nav2 .line1").css({transform: "translate(0,0px) rotate(0deg)"});
            $(".hxt-nav ul.nav2 .line2").css({transform: "translate(0,0px) rotate(0deg)"});
            $(".hxt-nav").css("top","0px");
            $(".hxt-nav .nav2 li .gouwu").css("opacity","1");
            flag1 = true;
        }
        $(".hxt-nav .navhidden").slideToggle(100);
    });


    window.onblur=function(){
        clearInterval(t);
        clearInterval(t2);
    };
    window.onfocus=function(){
        t=setInterval(move_banner,times);
        t2=setInterval(banner_progress,50);
    };

    // banner
    var banner_flag=true;
    var banner_now=0;
    var banner_next=0;
    var times=3000;
    var t=setInterval(move_banner,times);
    function move_banner(type){
        type = type || "r";
        if(type=="r"){
            banner_next = banner_now+1;
            if(banner_next>$(".hxt-banner .tablist li").length-1){
                banner_next=0;
            }
            $(".hxt-banner .img li").eq(banner_next).css({left:"100%"});
            $(".hxt-banner .img li").eq(banner_now).removeClass("first").animate({width:"100%",height:"100%"},500);

            $(".hxt-banner .img li").eq(banner_next).addClass("first").animate({left:"0"},500,function(){
                $(".hxt-banner .img li").eq(banner_now).css({width:"105%",height:"105%",left:"100%"});
                if(banner_next==0){
                    banner_flag=false;
                }
                banner_now = banner_next;
                pro=0;
            });
        }else if(type=="l"){
            banner_next = banner_now-1;
            if(banner_next<0){
                banner_next=$(".hxt-banner .tablist li").length-1;
            }
            $(".hxt-banner .img li").eq(banner_next).css({left:"-100%"});
            $(".hxt-banner .img li").eq(banner_now).animate({width:"100%",height:"100%"},500).removeClass("first");
            $(".hxt-banner .img li").eq(banner_next).addClass("first").animate({left:"0"},500,function(){
                $(".hxt-banner .img li").eq(banner_now).css({width:"105%",height:"105%",left:"-100%"});
                banner_now = banner_next;
            });
        }
    }
// 进度条
    var t2=setInterval(banner_progress,50);
    var pro=0;
    function banner_progress(){
        pro+=50;
        var bili=pro/times;
        if(bili>1){
            bili=1;
        }
        $(".hxt-banner .tablist li .progress").eq(banner_now).css({width:bili*100+"%"});
        if(!banner_flag){
            $(".hxt-banner .tablist li .progress").css("width",0);
            banner_flag=true;
        }
    }

    function stop(){
        clearInterval(t);
        clearInterval(t2);
    }

    // 左右按钮
    $(".hxt-banner .btn .left").click(function(){
        move_banner("l");
        $(".hxt-banner .tablist li .progress").css("width","0").eq(banner_next).css("width","100%");
        stop();
    });
    $(".hxt-banner .btn .right").click(function(){
        move_banner("r");
        $(".hxt-banner .tablist li .progress").css("width","0").eq(banner_next).css("width","100%");
        stop();
    });

// 点击按钮
    for(var i=0;i<$(".hxt-banner .tablist li").length;i++){
        (function(a){
            $(".hxt-banner .tablist li").eq(a).click(function(){
                stop();
                if(a>banner_now){
                    $(".hxt-banner .img li").eq(a).css("left","100%");

                    $(".hxt-banner .img li").eq(banner_now).animate({width:"100%",height:"100%"},500).removeClass("first");
                    $(".hxt-banner .img li").eq(a).addClass("first").animate({left:"0"},500,function(){
                        $(".hxt-banner .img li").eq(banner_now).css({width:"105%",height:"105%",left:"100%"});
                        $(".hxt-banner .tablist li .progress").css("width","0%").eq(a).css("width","100%");
                        banner_now = a;
                    });
                }else if(a<banner_now){
                    $(".hxt-banner .img li").eq(a).css("left","-100%");

                    $(".hxt-banner .img li").eq(banner_now).animate({width:"100%",height:"100%"},500).removeClass("first");
                    $(".hxt-banner .img li").eq(a).addClass("first").animate({left:"0"},500,function(){
                        $(".hxt-banner .img li").eq(banner_now).css({width:"105%",height:"105%",left:"-100%"});
                        $(".hxt-banner .tablist li .progress").css("width","0%").eq(a).css("width","100%");
                        banner_now = a;
                    });
                }
            })
        })(i)
    }

});