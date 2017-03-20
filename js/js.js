$(function(){
	var flag=true;
	$(".lable").on("click",function(){
		if(flag){
			$(".buttom").css({
                transform:"translate(0,3px) rotate(45deg)"
            })
            $(".top").css({
                transform:"translate(0,-3px) rotate(-45deg)"
            })
			var height=$("body").height();
			$(".aclist").css('height',height+'px');
			$(".aclist").css({"position":"relative","top":"0"});
			$("body").css("overflow-y","hidden");
			$(".aclist").show(200);
			$(".globlnav").css("background","#000");
			$(".wrapper").css("display","none");
			flag=false;
		}
		else{
			$(".buttom").css({
                 transform:"translate(0,0px) rotate(0deg)"
            })
            $(".top").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
			var height=$("body").height();
			$(".aclist").css('height',height+'px');
			$(".aclist").css({"position":"absolute"});
			$(".aclist").hide(200);
			$("body").css("overflow-y","auto");
			$(".wrapper").css("display","block");
			flag=true;
		}
	})
	//轮播
	var currentNum=0;  //当前一个
	var nextNum=0;  //后一个
	var time=3000;
	var t=setInterval(banner,time);
	var t,t1;
	var flag=true;
	var currentTime=0;
	function banner(type){
		var type=type||"next";
		if(type=="next"){
			nextNum=currentNum+1;
			if(nextNum>$(".slide-item").length-1){
				nextNum=0;
				flag=false;
			}
			$(".slide-item").eq(currentNum).animate({"width":"80%","height":"80%"}).css("z-index","0");
			$(".slide-item").eq(nextNum).animate({"width":"100%","height":"100%","left":"0"},500,function(){
				$(".slide-item").eq(currentNum).animate({"left":"100%"});
				currentNum=nextNum;
				currentTime=0;
				flag=true;
			}).css("z-index","1");
		}else if(type="pre"){
			nextNum=currentNum+1;
			if(nextNum<0){
				nextNum=$("slide-item").length-1;
			}
			$(".slide-item").eq(currentNum).animate({"width":"100%","height":"100%","left":"100%"});
			$(".slide-item").eq(nextNum).animate({"left":"0"},css({"width":"80%","height":"80%"}).animate({"width":"100","height":"100%"}),500,function(){
				currentNum=nextNum;
			}).css("z-index","1");
		}
	}
	t1=setInterval(move,50);
	function move(){
		if(flag){
			currentTime+=50;
			var pro=currentTime/time;
			if(pro>1){
				pro=1;
			}
			$(".dashnav-progress").eq(currentNum).css({"width":pro*100+"%","background":"gray"});
		}else{
			$(".dashnav-progress").css("width","0%");
		}
	}
	$(".tablist li").on("click",function(){
		nextNum=$(this).index();
		stop();
	})
	function stop(){
		clearInterval(t);
		clearInterval(t1);
		$(".dashnav-progress").css("width","0").eq(nextNum).css({"width":"100%","background":"gray"});
		if(nextNum>currentNum){
			$(".slide-item").eq(currentNum).animate({"width":"80%","height":"80%"}).css("z-index","0");
			$(".slide-item").eq(nextNum).animate({"width":"100%","height":"100%","left":"0"},500,function(){
				$(".slide-item").eq(currentNum).animate({"left":"100%"});
				currentNum=nextNum;
				currentTime=0;
				flag=true;
			}).css("z-index","1");
		}else if(nextNum<currentNum){
			$(".slide-item").eq(currentNum).animate({"left":"100%"});
			$(".slide-item").eq(nextNum).css("left","0").css({"width":"80%","height":"80%"}).animate({"left":"0","width":"100%","height":"100%"},500,function(){
				currentNum=nextNum;
			}).css("z-index","1");
		}
	}
	 $(".paddlenav-arrow-container-previous").click(function(){
        nextNum--
        if(nextNum==-1){
            nextNum=$(".slide-item").length-1;
        }
        stop();
    })

    $(".paddlenav-arrow-container-next").click(function(){
        nextNum++
        if(nextNum>$(".slide-item").length-1){
            nextNum=0;
        }
        stop();
    })
    window.onfocus=function(){
    	clearInterval(t);
    }
})
