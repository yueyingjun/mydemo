$(function(){
//	menu
	var flag1=true;
	window.onresize=function(){
		var clientH=$(window).height();
		var clientW=$(window).width();
		$(".menu").css("height",clientH);
		if(clientW>750){
			$(".menu").hide();
			$(".line1").css({
				transform:"translate(0,0)rotate(0deg)"
			})
			$(".line2").css({
				transform:"translate(0,0)rotate(0deg)"
			})
			flag1=true;
		}
	}
	window.onresize();
	$(".nav .zuo").click(function(){
		$(".top").hide();
		if(flag1){
			$(".line1").css({
				transform:"translate(0,6px)rotate(45deg)"
			})
			$(".line2").css({
				transform:"translate(0,-5px)rotate(-45deg)"
			})
			$(".menu").slideToggle("slow");
			flag1=false;
		}else{
			$(".top").show();
			$(".line1").css({
				transform:"translate(0,0)rotate(0deg)"
			})
			$(".line2").css({
				transform:"translate(0,0)rotate(0deg)"
			})
			$(".menu").slideToggle("slow");
			flag1=true;
		}
	})
	
//	banner
	var times=3000;
    var currentNum=0;
    var nextNum=0;
    var currentTime=0;
    var flag=true;
    var t1,t2;
    t1=setInterval(move,times);
    function move(){
        nextNum++;
        if(nextNum>$(".wheel-list").length-1){
            nextNum=0;
        }
        $(".wheel-list").eq(currentNum).animate({
            width:"80%",height:"80%"
        }).css("z-index",0);
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

    //进度条
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


    //点击按钮
    $(".btns .btn").click(function(){
        var index=$(this).index(".btns .btn");
        nextNum=index;
        stop();
    })
    function stop(){
        clearInterval(t1);
        clearInterval(t2);
        $(".btns .btn .progress").css("width",0).eq(nextNum).css("width","100%");     
    }
    $(".leftbtn").click(function(){
        nextNum--
        if(nextNum<0){
        	nextNum=$(".wheel-list").length-1;
        }
           $(".wheel-list").eq(currentNum).animate({left:"100%"}).css("z-index",1);
            $(".wheel-list").eq(nextNum).css({
                left:0,top:0,width:"80%",height:"80%"
            }).animate({width:"100%",height:"100%"},function(){
                currentNum=nextNum;
            })
        stop();
    })

    $(".rightbtn").click(function(){
		auto();
        stop();
    })
    
//  失去焦点的时候进度条的问题
    window.blur(function () {
        clearInterval(t1);
         clearInterval(t2);
    })
    window.focus(function () {
       t1=setInterval(move,times);
       t2=setInterval(progress,50);
    })
    
//  footer
	$(".xp li").click(function () {
	 	var index=$(this).index();
        if(!$(".jia").eq(index).hasClass("yes")){
            $(".jia").eq(index).css({"transform": "rotate(45deg)"}).addClass("yes");
        }else{
            $(".jia").eq(index).css({"transform": "rotate(0deg)"}).removeClass("yes");
        }
        $(".menu2").eq(index).slideToggle();
    })
})
