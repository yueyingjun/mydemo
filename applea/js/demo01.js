$(function(){
	var flag=true;
	window.onresize=function(){
		
		clienh=$(window).height();
		clienw=$(window).width();
		$(".meau").css("height","clienh");
		if(clienw>765){
			$(".meau").css("display","none");
			
			$(".blt .line1").css("transform","rotate(0deg)");
			$(".blt .line2").css("transform","rotate(0deg)");
			flag=true;
		}                          
	}
	window.onresize();

	$(".blt").click(function(){
		if(flag){			
			$(".blt .line1").css("transform","translate(0,7px) rotate(45deg)");
			$(".blt .line2").css("transform","rotate(-45deg)");
			
			flag=false;
		}else{
			$(".blt .line1").css("transform"," rotate(0deg)");
			$(".blt .line2").css("transform","rotate(0deg)");
			flag=true;
		}
		$(".meau").slideToggle(1000);
		
	})
//	bannerLunbo
	var now=0;
	var next=0;
	var flag=true;
	var nowtime=0;
	var times=3000;
	var t=setInterval(move,times);
	function move(){
		next++;		
		if(next>$(".box a").length-1){
			next=0;
			flag=true;
		}		
		$(".box a").eq(now).animate({width:"80%",height:"80%"}).css("z-index",80);
		$(".box a").eq(next).css("z-index",88).animate({left:0},function(){
		$(".box a").eq(now).css({width:"100%",height:"100%",left:"100%"});
			if(next==0){
				flag=false
			}
		now=next;
		nowtime=0
		})
		
	}

	var t1=setInterval(go,50);
	function go(){
		nowtime+=50;
		var bili=nowtime/times;
		if(bili!==1){bili==1};
		$(".pro").eq(now).css("width",bili*100+"%");
		if(!flag){
			$(".pro").css("width",0)
			flag=true
		}
	}	
	function stop(){
		clearInterval(t);
		clearInterval(t1)
	}	
	$(".blt_a").click(function(){
		$(".pro").css("width",0).eq($(this).index()).css("width","100%")
		stop();
		
		if($(this).index()>now){
			$(".box a").eq(now).animate({width:"80%",height:"80%"});
			$(".box a").eq($(this).index()).css("z-index",1).animate({left:0},function(){
			$(".box a").eq(now).css({width:"100%",height:"100%",left:"100%"});
				if(next==0){
					flag=false
				}
			    now=$(this).index();
			})
		}else if($(this).index()<now){
			$(".box a").eq(now).animate({left:"100%"});
			$(".box a").eq($(this).index()).css({width:"80",height:"80%",left:"0"}).animate({width:"100%",height:"100%"},function(){
			    now=$(this).index();						
			})			
		}else{
			flag=false
		}
	})
	
	$(".wheel_left").click(function(){
		stop();
		move();
		$(".pro").css("width",0)
		
	})
	$(".wheel_right").click(function(){
		stop();
		next--;		
		if(next<0){
			next=$(".box a").length-1;
			flag=true;
		}		
		$(".box a").eq(now).animate({width:"80%",height:"80%"}).css("z-index",87);
		$(".box a").eq(next).animate({left:0},function(){
		$(".box a").eq(now).css({width:"100%",height:"100%",left:"100%"}).css("z-index",88);
			if(next==0){
				flag=false
			}
		now=next;
		nowtime=0
		})
		$(".pro").css("width",0)
		
	})
	
	
	
	$(".new ul").each(function(index,dom){
   					$(dom).find(".one .t").click(function(){
   						$(dom).find(".new_lie").slideDown();
   						$(this).css("display","none");
   						$(dom).find(".one .t2").css("display","block");
   					})
   					$(dom).find(".one .t2").click(function(){
   						$(dom).find(".new_lie").slideUp();
   						$(this).css("display","none");
   						$(dom).find(".one .t").css("display","block");
   					})
   				})
})







