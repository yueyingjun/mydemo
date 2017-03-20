$(function(){
	$(window).blur(function(){		//浏览器最小化 失去焦点 暂停时间函数
		clearInterval(t1);
		clearInterval(t2);
	})
	
    var flag=true;
    window.onresize=function() {
        var clientH = $(window).height();
        var clientW = $(window).width();
        $(".menu").css("height", clientH);
        if(clientW>765){
            $(".menu").css("display","none");
            flag=true;
            $(".line1").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".line2").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            if($(".top").attr("style")=="display: none;"){		//当顶部广告栏隐藏、隐藏菜单显示时，改变尺寸到大于小屏，将顶部广告恢复
        		$(".top").css("display","block");				
        		$(".small .con").css("background","#333");		//恢复小屏导航栏背景颜色
        		$(".large").show();								//顶部广告栏隐藏、隐藏菜单显示时，改变尺寸到大于小屏，将其他部分显示
				$(".wheel").show();
				$(".container").show();
				$("footer").show();
       		 }
        }
    }
    window.onresize();
    $(".small .con .btn").click(function(){
        if(flag){
            $(".line1").css({
                transform:"translate(0,5px) rotate(45deg)"
            })
            $(".line2").css({
                transform:"translate(0,-3px) rotate(-45deg)"
            })
			
            flag=false

        }else{
            $(".line1").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".line2").css({
                transform:"translate(0,0px) rotate(0deg)"
            })

            flag=true
        }
		$(".top").slideToggle(500,function(){				//顶部广告栏，单击隐藏，再次单击出现
//				alert($(".top").height())
			if($(".top").attr("style")=="display: none;"){	//当顶部隐藏时，隐藏菜单显示时，改变导航菜单背景颜色
				$(".small .con").css("background","#000");
//				$(".large").hide();
				$(".wheel").hide();
				$(".container").hide();
				$("footer").hide();
			}else{
				$(".small .con").css("background","#333");
//				$(".large .con").hide();
				$(".wheel").show();
				$(".container").show();
				$("footer").show();
			}
		});
        $(".menu").slideToggle(1000,"linear");
   })
// 轮播图
    var times=3000;
    var currentNum=0;
    var nextNum=0;
    var currentTime=0;
    var flag=true;
    var t1,t2;
    //自动轮播
    t1=setInterval(auto,times)
    function auto(){
        nextNum++;
        if(nextNum>$(".wheel-list").length-1){
            nextNum=0;
            $()
        }
       //当前这一张
        $(".wheel-list").eq(currentNum).animate({
            width:"80%",height:"80%"
        }).css("zIndex",0);
       //下一张的运动方式
       $(".wheel-list").eq(nextNum).animate({
           left:0
       },function(){
           $(".wheel-list").eq(currentNum).css({
               width:"100%",height:"100%",left:"100%"
           })
           if(nextNum==0){
               flag=false;
           }
           currentNum=nextNum;
           currentTime=0;
       }).css("zIndex",1);
    }
    //按钮的进度条
    t2=setInterval(progress,50);
    function progress(){
        currentTime+=50;
        var bili=currentTime/times;
        if(bili>1){
            bili=1;
        }
        $(".progress").eq(currentNum).css("width",bili*100+"%");
        if(!flag){
            $(".progress").css("width",0);
            flag=true;
        }
    }
    $(window).focus(function(){			//浏览器获取焦点，继续两个时间函数
		t1=setInterval(auto,times);
		t2=setInterval(progress,50);
	})
    //点击按钮操作轮播图
    $(".btns .btn").click(function(){
        var index=$(this).index(".btns .btn");
        nextNum=index;
        stop();
    })
    function stop(){
        clearInterval(t1);
        clearInterval(t2);
        $(".btns .btn .progress").css("width",0).eq(nextNum).css("width","100%");
        if(currentNum<nextNum){
            //当前这一张
            $(".wheel-list").eq(currentNum).animate({
                width:"80%",height:"80%"
            })
            //下一张的运动方式
            $(".wheel-list").eq(nextNum).animate({
                left:0
            },function(){
                $(".wheel-list").eq(currentNum).css({
                    width:"100%",height:"100%",left:"100%"
                })
                if(nextNum==0){
                    flag=false;
                }
                currentNum=nextNum;
                currentTime=0;
            }).css("zIndex",1);
        }else{
           $(".wheel-list").eq(currentNum).animate({left:"100%"}).css("z-index",1);

            $(".wheel-list").eq(nextNum).css({
                left:0,top:0,width:"80%",height:"80%"
            }).animate({width:"100%",height:"100%"},function(){
                currentNum=nextNum;
            })
        }
    }
    $(".leftBtn").click(function(){
        nextNum--
        if(nextNum==-1){
            nextNum=$(".wheel-list").length-1;
        }
        stop();
    })
    $(".rightBtn").click(function(){
        nextNum++
        if(nextNum>$(".wheel-list").length-1){
            nextNum=0;
        }
        stop();
    })
    
    //底部 展开 收回
    $("div.list h5").click(function(){
    	$(this).next("ul").slideToggle();
    })
})