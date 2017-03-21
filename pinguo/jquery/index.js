$(function(){
    // 导航
    var flag1=true;
    window.onresize=function(){
        var height=$(window).height();
        var width=$(window).width();
        $(".menu").css("height",height);
        if(width>=765){
            $(".menu").css({"display":"none"});
            $(".small-list .line1").css({transform: "translate(0,0px) rotate(0deg)"});
            $(".small-list .line2").css({transform: "translate(0,0px) rotate(0deg)"});
            $(".small").css("top","0px");
           
            flag1=true;
        }
        if(width>=748){
            $(" .xun-list ul.lists .linedown").hide();
            $(".xun-list .lists .list").show();
        }else{
            $(".xun-list .lists .list").hide();
            $(" .xun-list ul.lists .linedown").show();
        }
        // 列表
        if(width<748){
            var flag=true;
            $(".xun-list .listtitle").click(function(){
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

    $(".small-list .btn").click(function() {
        if (flag1) {
            $(".small-list .line1").css({transform: "translate(0,5px) rotate(45deg)"});
            $(".small-list .line2").css({transform: "translate(0,-2px) rotate(135deg)"});
            $(".small").css("top","-44px");
          
            flag1 = false;
        } else {
            $(".small-list .line1").css({transform: "translate(0,0px) rotate(0deg)"});
            $(".small-list .line2").css({transform: "translate(0,0px) rotate(0deg)"});
            $(".small").css("top","0px");
            flag1 = true;
        }
        $(".menu").slideToggle(100);
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
            if(banner_next>$(".xun-banner .tablist li").length-1){
                banner_next=0;
            }
            $(".xun-banner .img li").eq(banner_next).css({left:"100%"});
            $(".xun-banner .img li").eq(banner_now).removeClass("first").animate({width:"100%",height:"100%"},500);

            $(".xun-banner .img li").eq(banner_next).addClass("first").animate({left:"0"},500,function(){
                $(".xun-banner .img li").eq(banner_now).css({width:"105%",height:"105%",left:"100%"});
                if(banner_next==0){
                    banner_flag=false;
                }
                banner_now = banner_next;
                pro=0;
            });
        }else if(type=="l"){
            banner_next = banner_now-1;
            if(banner_next<0){
                banner_next=$(".xun-banner .tablist li").length-1;
            }
            $(".xun-banner .img li").eq(banner_next).css({left:"-100%"});
            $(".xun-banner .img li").eq(banner_now).animate({width:"100%",height:"100%"},500).removeClass("first");
            $(".xun-banner .img li").eq(banner_next).addClass("first").animate({left:"0"},500,function(){
                $(".xun-banner .img li").eq(banner_now).css({width:"105%",height:"105%",left:"-100%"});
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
        $(".xun-banner .tablist li .progress").eq(banner_now).css({width:bili*100+"%"});
        if(!banner_flag){
            $(".xun-banner .tablist li .progress").css("width",0);
            banner_flag=true;
        }
    }

    function stop(){
        clearInterval(t);
        clearInterval(t2);
    }

    // 左右按钮
    $(".xun-banner .btn .left").click(function(){
        move_banner("l");
        $(".xun-banner .tablist li .progress").css("width","0").eq(banner_next).css("width","100%");
        stop();
    });
    $(".xun-banner .btn .right").click(function(){
        move_banner("r");
        $(".xun-banner .tablist li .progress").css("width","0").eq(banner_next).css("width","100%");
        stop();
    });

// 点击按钮
    for(var i=0;i<$(".xun-banner .tablist li").length;i++){
        (function(a){
            $(".xun-banner .tablist li").eq(a).click(function(){
                stop();
                if(a>banner_now){
                    $(".xun-banner .img li").eq(a).css("left","100%");

                    $(".xun-banner .img li").eq(banner_now).animate({width:"100%",height:"100%"},500).removeClass("first");
                    $(".xun-banner .img li").eq(a).addClass("first").animate({left:"0"},500,function(){
                        $(".xun-banner .img li").eq(banner_now).css({width:"105%",height:"105%",left:"100%"});
                        $(".xun-banner .tablist li .progress").css("width","0%").eq(a).css("width","100%");
                        banner_now = a;
                    });
                }else if(a<banner_now){
                    $(".xun-banner .img li").eq(a).css("left","-100%");

                    $(".xun-banner .img li").eq(banner_now).animate({width:"100%",height:"100%"},500).removeClass("first");
                    $(".xun-banner .img li").eq(a).addClass("first").animate({left:"0"},500,function(){
                        $(".xun-banner .img li").eq(banner_now).css({width:"105%",height:"105%",left:"-100%"});
                        $(".xun-banner .tablist li .progress").css("width","0%").eq(a).css("width","100%");
                        banner_now = a;
                    });
                }
            })
        })(i)
    }

});