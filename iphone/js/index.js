$(function(){
//顶部小屏
    window.onresize=function(){
        var clienth=$(window).height()-44;
        $(".pull").css("height",clienth);
    }
    window.onresize();
    var flag=true;
    $(".line").click(function(){
        $(".pull").slideToggle();
        if(flag==true){
            flag=false;
            $(".line1").css("transform","translate(0,6px) rotate(135deg)");
            $(".line2").css("transform","translate(0,-4px) rotate(-135deg)");
        }else if(flag==false){
            flag=true;
            $(".line1").css("transform","translate(0,0) rotate(0deg)");
            $(".line2").css("transform","translate(0,0) rotate(0deg)");
        }
    })
//轮播
    var now=0;
    var next=0;
    var times=2000;
    var nowtime=0;
    var t=setInterval(move,times);
    function move(type){
        var type=type||"right";
        if(type=="right"){
            next=now+1;
            if(next>$(".banner .lunbo").length-1){
                next=0;
            }
            $(".banner .lunbo").eq(next).css({width:"110%",height:"110%"});
            $(".banner .lunbo").eq(now).animate({width:"100%",height:"100%"},500,function(){
                $(".banner .lunbo").eq(now).css("left","100%")
            }).css("z-index",0);
            $(".banner .lunbo").eq(next).css("z-index",1).animate({left:0},500,function(){
                now=next;
            })
        }else if(type=="left"){
            next=now-1;
            if(next==-1){
                next=$(".banner .lunbo").length-1;
            }
            $(".banner .lunbo").eq(next).css("left","-100%");
            $(".banner .lunbo").eq(now).animate({left:"100%"},500).css("z-index",1);
            $(".banner .lunbo").eq(next).css({left:0,width:"100%",height:"100%"}).animate({width:"110%",height:"110%"},500,function(){
                now=next;
            }).css("z-index",0);
        }
        $(".progress").eq(now).css("width",0);
        $(".progress").eq(next).css("width","100%");
    }
//横条自动
    var t2=setInterval(progress,50);
    function progress(){
        nowtime=nowtime+50;
        var bili=nowtime/times;
        if(bili>=0.99){
            bili=0;
            nowtime=0;
        }
        if(next==0){
            $(".progress").css("width",0);
        }else{
            $(".progress").eq(now).css("width",100+"%");
        }
        $(".progress").eq(next).css("width",bili*100+"%");
    }
//左右按钮
    $(".leftb").click(function(){
        move("left");
    })
    $(".rightb").click(function(){
        move("right");
    })
//横条按钮
    $(".kuang").click(function(){
        var index=$(this).index();
        next=index;
        if(next==now){
            return;
        }
        if(next>now){
            $(".banner .lunbo").eq(next).css({width:"100%",height:"100%"});
        }else{
            $(".banner .lunbo").eq(next).css({left:"-100%",width:"100%",height:"100%"});
        }
        $(".progress").eq(now).css("width",0);
        $(".progress").eq(next).css("width","100%");
        $(".banner .lunbo").eq(now).animate({width:"80%",height:"80%"},500,function(){
            $(".banner .lunbo").eq(now).css("left","100%")
        }).css("z-index",0);
        $(".banner .lunbo").eq(next).css("z-index",1).animate({left:0},500,function(){
            now=next;
        })
    })
//鼠标移入banner动画停止
    $(".banner").hover(function(){
        clearInterval(t);
        clearInterval(t2);
    },function(){
        t=setInterval(move,times);
        t2=setInterval(progress,50);
        nowtime=0;
    })
//    浏览器最小化之后的bug
    window.onblur=function(){
        clearInterval(t);
        clearInterval(t2);
    }
    window.onfocus=function(){
        t=setInterval(move,times);
        t2=setInterval(progress,50);
        nowtime=0;
    }




//底部小屏
    var flag1=true;
    $(".smallFooter li").each(function(index){
        $(this).click(function(){
            $(".son").eq(index).slideToggle();
            if(flag1==true) {
                flag1=false;
                $("span").eq(index).css("transform", "rotate(45deg)");
            }else if(flag1==false){
                flag1=true;
                $("span").eq(index).css("transform", "rotate(0deg)");
            }
        })
    })



})