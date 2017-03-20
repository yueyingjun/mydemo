$(function () {
// 导航栏菜单按钮
function main() {
    var flag=true;
    var bodyFlag=true;
    var clearH=$(window).height();
    var clearW=$(window).width();
    $(".header .container .row .meau").css({"height":clearH,"width":clearW});

    $(window).resize(function () {
        clearH=$(window).height();
        clearW=$(window).width();
        $(".header .container .row .meau").css({"height":clearH,"width":clearW});
        if(clearW>765){
            $(".header .container .row .btn .line1").css({transform:"translate(0,0) rotate(0deg)"});
            $(".header .container .row .btn .line2").css({transform:"translate(0,0) rotate(0deg)"});
            flag=true;
            $(".header .container .row .meau").css({"display":"none"});
        }
    });
    $("header .container .row .btn").click(function () {
        if(flag){
            $(".header .container .row .btn .line1").css({transform:"translate(0,4px) rotate(135deg)"});
            $(".header .container .row .btn .line2").css({transform:"translate(0,-3px) rotate(45deg)"});
            flag=false;
        }else{
            $(".header .container .row .btn .line1").css({transform:"translate(0,0) rotate(0deg)"});
            $(".header .container .row .btn .line2").css({transform:"translate(0,0) rotate(0deg)"});
            flag=true;
        }
        $(".header .container .row .meau").slideToggle("normal");
        if(bodyFlag){
            $(".topbox").css({"display":"none"});
            $("header").css({"background":"#000","font-size":"20px"});
            $("header .logo").css({"font-size":"18px"});
            $("html,body").css({"overflow":"hidden"});
            $(".sousuo").animate({right:"-50px"},"slow");
            bodyFlag=false;

        }else{
            $(".topbox").css({"display":"block"});
            $("header").css({"background":"#333333"});
            $("header .logo").css({"font-size":"14px"});
            $("html,body").css({"overflow-y": "auto"});
            $(".sousuo").animate({right:"0"},"slow");
            bodyFlag=true;
        }
    });
}
main();
// banner
function banner() {
    // 初始化banner宽度
    var clearW=$(window).width();
    $(".banner").width(clearW);
    $(window).resize(function () {
        clearW=$(window).width();
        $(".banner").width(clearW);
        var bannerbtnleftwidth=(clearW-180)/2;
        $(".banner .btnbox").css("left",bannerbtnleftwidth);
        $(".bannerpic").css({"left":clearW}).eq(0).css({"left":0});
    });
    // 设置按钮盒子左侧距离
    var bannerbtnleftwidth=(clearW-180)/2;
    $(".banner .btnbox").css("left",bannerbtnleftwidth);
    $(".bannerpic").css({"left":clearW}).eq(0).css({"left":0});
    // 自动轮播
    var times=3000;
    var t1=setInterval(move,times);
    var now=0;
    var next=0;
    var currentTime=0;
    var flag=true;
    function move() {
        next++;
        if(next>$(".bannerpic").length-1){
            next=0;
            flag=false;
        }
        //当前页面的变化
        $(".bannerpic").eq(now).animate({"width":"80%","height":"90%"},1000).css("z-index",1);
        //下一张的变化
        $(".bannerpic").eq(next).animate({"left":0},1000,function(){
            $(".bannerpic").eq(now).css({"left":clearW,"width":"100%","height":"100%"});
            now=next;
        }).css("z-index",99);
        currentTime=0;
    }
    // 选项卡进度条
    var t2=setInterval(progress,50);
    function progress() {
        currentTime+=50;
        var bili=currentTime/times;
        if(bili>1){
            bili=1;
        }
        $(".jindu").eq(next).css("width",bili*100+"%");
        if(!flag){
            $(".jindu").css("width",0);
            flag=true;
        }
    }
    // 进度条的点击事件
    $(".btnbox li").click(function(){
        next=$(this).index();
        if($(this).index()>now){
            //当前页面的变化
            $(".bannerpic").eq(now).animate({"width":"80%","height":"80%"},1000).css("z-index",0);
            //下一张的变化
            $(".bannerpic").eq($(this).index()).animate({"left":0},1000,function(){
                $(".bannerpic").eq(now).css({"left":clearW,"width":"100%","height":"100%"});
                now=$(this).index();
            }).css("z-index",1);
        }else if($(this).index()<now){
            $(".bannerpic").eq(now).animate({left:"100%"},1000);
            $(".bannerpic").eq($(this).index()).css({"left":0,"width":"80%","height":"80%"});
            $(".bannerpic").eq($(this).index()).animate({"width":"100%","height":"100%","zIndex":1},1000,function () {
                now=$(this).index();
            });
        }else if($(this).index()==now){
            $(".bannerpic").eq(now).css({"width":"80%","height":"80%"});
            $(".bannerpic").eq(now).animate({"width":"100%","height":"100%"});
        }
        $(".jindu").css("width",0).eq($(this).index()).css("width","100%");
        stop();
    })
    function stop(){
        clearInterval(t1);
        clearInterval(t2);
    }
    // 左右点击按钮
    $(".rightbtn").click(function () {
        next++;
        if(next>$(".bannerpic").length-1){
            next=0;
            flag=false;
        }
        //当前页面的变化
        $(".bannerpic").eq(now).animate({"width":"80%","height":"80%"},1000).css("z-index",0);
        //下一张的变化
        $(".bannerpic").eq(next).animate({"left":0},1000,function(){
            $(".bannerpic").eq(now).css({"left":clearW,"width":"100%","height":"100%"});
            now=next;
        }).css("z-index",1);
        $(".jindu").css("width",0).eq(next).css("width","100%");
        stop();
    })
    $(".leftbtn").click(function () {
        next--;
        if(next<0){
            next=$(".bannerpic").length-1;
            flag=false;
        }
        $(".bannerpic").eq(now).css({"z-index":2});
        $(".bannerpic").eq(now).animate({"left":clearW},1000);
        $(".bannerpic").eq(next).css({"left":0,"width":"80%","height":"80%","z-index":1});
        $(".bannerpic").eq(next).animate({"width":"100%","height":"100%","zIndex":1},1000,function () {
            now=$(this).index();
        });
        $(".jindu").css("width",0).eq(next).css("width","100%");
        stop();
    })
    window.onblur=function () {
        stop();
    }
    window.onfocus=function () {
        t1=setInterval(move,times);
        t2=setInterval(progress,50);
    }
}
banner();
// 底部点击效果
function footer() {
    var flag=true;
    $(".wdb_bottom").each(function (index) {
        $(".wdb_bottom").eq(index).click(function () {
            $(".wdb_bottom_js").eq(index).slideToggle("normal");

            if(flag){
                $(".wdb_bottom_btn").eq(index).css({transform:"translate(0,0) rotate(45deg)"});
                flag=false;
            }else{
                $(".wdb_bottom_btn").eq(index).css({transform:"translate(0,0) rotate(0deg)"});
                flag=true;
            }
        })

    })


}
footer()
});
