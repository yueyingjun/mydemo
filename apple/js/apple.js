$(function(){
    var flag=true;
    window.onresize=function() {
        var clientH = $(window).height();
        var clientW = $(window).width();
        $(".menu").css("height", clientH);
        if(clientW>765){
            $(".menu").hide();
            flag=true;
            $(".line1").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".line2").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
        }
    };
    window.onresize();
    $(".btn").click(function(){
        if(flag){
            $(".line1").css({
                transform:"translate(0,5px) rotate(45deg)"
            })
            $(".line2").css({
                transform:"rotate(-45deg)"
            })

            flag=false

        }else{
            $(".line1").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".line2").css({
                transform:"rotate(0deg)"
            })

            flag=true
        }


        $(".menu").slideToggle(600);
    });

function banner() {
    var time = 4000;
    var now = 0;
    var next = 0;
    var flag = true;
    var flag1 = true;
    var t1 = setInterval(auto, time);

   function auto(type) {
       type=type||"ll";
       if(type=="ll") {
           next++;
           if (next >= $(".banner ul li").length) {
               next = 0;
               flag = false;
           }
           $(".banner ul li").eq(next).css({width: "110%", height: "110%",left: "100%"});
           $(".banner ul li").eq(now).animate({width: "100%", height: "100%"}, 900, function () {
               $(".banner ul li").eq(now).css({left: "100%"});
           }).css({zIndex: 0});
           $(".banner ul li").eq(next).animate({left: 0}, 900, function () {
               flag = true;
               now = next;
           }).css({zIndex: 1});
       }else if(type=="rr"){
           next--;
           if (next < 0) {
               next = $(".banner ul li").length-1;
           }
           $(".banner ul li").eq(next).css({left:0});
           $(".banner ul li").eq(now).animate({width: "100%", height: "100%",left:"100%"}, 900).css({zIndex: 3});
           $(".banner ul li").eq(next).animate({width:"110%",height:"110%",left:0}, 900).css({zIndex: 1});
           now=next;
       }
    }

    var currTime = 0;
    var t2 = setInterval(progress, 50);

    function progress() {
        currTime = currTime + 50;
        var bili = currTime / time;
        if (bili >= 1) {
            bili = 0;
            currTime = 0;
        }
        if (!flag) {
            $(".progress").css({width: 0});
        }

        $(".progress").eq(next).css({width: bili * 100 + "%"});

    }

    $(".rbtn").click(function () {
        clearInterval(t1);
        clearInterval(t2);
        clickBtn();
        auto("ll");
    })
    $(".lbtn").click(function () {
        clearInterval(t1);
        clearInterval(t2);
        clickBtn();
        auto("rr");

    })

    $(".btns").click(function(){
        clearInterval(t1);
        clearInterval(t2);
        $(".progress").css({width:0});
        next=$(this).index();

        if(next>now){
            $(".banner ul li").eq(next).css({width: "110%", height: "110%",left: "100%"});
            $(".banner ul li").eq(now).animate({width: "100%", height: "100%"}, 900, function () {
                $(".banner ul li").eq(now).css({left: "100%"});
            }).css({zIndex: 0});
            $(".banner ul li").eq(next).animate({left: 0}, 900).css({zIndex: 1});
        }else if(next<now){
            $(".banner ul li").eq(next).css({left:0});
            $(".banner ul li").eq(now).animate({width: "100%", height: "100%",left:"100%"}, 900).css({zIndex: 3});
            $(".banner ul li").eq(next).animate({width:"110%",height:"110%",left:0}, 900).css({zIndex: 1});
        }
        $(".btns").eq($(this).index()).css({background: "#666"});
        $(".btns").eq(now).css({background: ""});
        now=next;
    });

    function clickBtn(){
        $(".progress").eq(now).css({width:"100%"}).animate({opacity:0},100);
        $(".progress").eq(next).animate({opacity:1},100).css({width:"100%"});
    }
    //清除浏览器带来的时间进程的影响
    window.onblur=function(){
        clearInterval(t1);
        clearInterval(t2);
    }
    window.onfocus=function(){
        t1 = setInterval(auto, time);
        t2 = setInterval(progress, 50);
        currTime=0;
    }
}
banner();
//底部
    var flag2=true;
    $(".smallFooter li").each(function(index){
        $(this).click(function(){
            $(".son").eq(index).slideToggle();
            if(flag2==true) {
                flag2=false;
                $("span").eq(index).css("transform", "rotate(45deg)");
            }else if(flag2==false){
                flag2=true;
                $("span").eq(index).css("transform", "rotate(0deg)");
            }
        })
    })

});