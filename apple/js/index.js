$(function(){
    var flag=true;	
	window.onresize=function() {
        var clientH = $(window).height();
        var clientW = $(window).width();
        $(".menu").css("height", clientH);
        if(clientW>765){
            $(".menu").css("display","none");
            flag=true;
            $(".btn span").eq(0).css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".btn span").eq(1).css({
                transform:"translate(0,0px) rotate(0deg)"
            })
        }
    }
    window.onresize();
	$(".btn").click(function(){
		if(flag){
		$(".btn span").eq(0).css({transform:"translate(0,0px) rotate(45deg)"});
		$(".btn span").eq(1).css({transform:"translate(0,-5px) rotate(135deg)"});
		flag=false;
		}else{
		$(".btn span").eq(0).css({transform:"translate(0,0px) rotate(0deg)"});
		$(".btn span").eq(1).css({transform:"translate(0,0px) rotate(0deg)"});	
		flag=true;
		}
		$(".menu").slideToggle(1000);					
	})
	
	
	
    var times=3000;
    var currentNum=0;
    var nextNum=0;
    var currentTime=0;
    var flag=true;
    var t1,t2;	
    t1=setInterval(auto,times)
    function auto(){
        nextNum++;
        if(nextNum>$(".wheel>ul li").length-1){
            nextNum=0;
        }
       //当前这一张
        $(".wheel>ul li").eq(currentNum).animate({
            width:"80%",height:"80%"
        })
       //下一张的运动方式
       $(".wheel>ul li").eq(nextNum).animate({
           left:0
       },function(){
           $(".wheel>ul li").eq(currentNum).css({
               width:"100%",height:"100%",left:"100%"
           })
           if(nextNum==0){
               flag=false;
           }
           currentNum=nextNum;
           currentTime=0;
       }).css("zIndex",1);
    }	
	
    t2=setInterval(progress,50);

    function progress(){
        currentTime+=50;
        var bili=currentTime/times;
        if(bili>1){
            bili=1;
        }
        $(".wheel-btn ul li").eq(currentNum).css("width",bili*100+"%");
        if(!flag){
            $(".wheel-btn ul li").css("width",0);
            flag=true;
        }
    }

   $(".wheel-btn ul").click(function(){
        var index=$(this).index(".wheel-btn ul");
        nextNum=index;
        stop();
    })

    function stop(){
        clearInterval(t1);
        clearInterval(t2);

        $(".wheel-btn>ul li").css("width",0).eq(nextNum).css("width","100%");

        if(currentNum<nextNum){
            //当前这一张
            $(".wheel>ul li").eq(currentNum).animate({
                width:"80%",height:"80%"
            })
            //下一张的运动方式
            $(".wheel>ul li").eq(nextNum).animate({
                left:0
            },function(){
                $(".wheel>ul li").eq(currentNum).css({
                    width:"100%",height:"100%",left:"100%"
                })
                if(nextNum==0){
                    flag=false;
                }
                currentNum=nextNum;
                currentTime=0;
            }).css("zIndex",1);
        }else{
           $(".wheel>ul li").eq(currentNum).animate({left:"100%"}).css("z-index",1);
            $(".wheel>ul li").eq(nextNum).css({
                left:0,top:0,width:"80%",height:"80%"
            }).animate({width:"100%",height:"100%"},function(){
                currentNum=nextNum;
            })
        }
    }

    $(".leftBtn").click(function(){
        nextNum--
        if(nextNum==-1){
            nextNum=$(".wheel>ul li").length-1;
        }
        stop();
    })

    $(".rightBtn").click(function(){
        nextNum++
        if(nextNum>$(".wheel>ul li").length-1){
            nextNum=0;
        }
        stop();
    })	
	
	
    $(".inner-list-item-title").click(function(){
        $(this).next("ul").toggle(300);
    })	
	
})