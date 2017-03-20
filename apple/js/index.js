$(function(){
	//header-begin
	var flag4=true;
	window.onresize=function(){
		var clienh=$(window).height();
        var clienw=$(window).width();
        $(".showmenu").css("height",clienh);
        if(clienw>767){
        	$(".showmenu").css("display","none");
        	$(".footermune").css("display","none");
        	$(".linetop").css({transform:"translate(0,0px) rotate(0deg)"});
			$(".linebot").css({transform:"translate(0,0px) rotate(0deg)"});
			flag4=true;
        } 
   }
	window.onresize();
	var menu=$(".listin.menu");
	menu.click(function(){
		menu.css("z-index",300);
		if(flag4){
			$(".linetop").css({transform:"translate(0,5px) rotate(45deg)"});
			$(".linebot").css({transform:"translate(0,-4px) rotate(-45deg)"});
			$(".showmenu").slideToggle(1000);
			$(".banner").css("display","none");
			$(".ads").css("display","none");
			$(".footer").css("display","none");
			flag4=false;
		}else{
			$(".banner").css("display","block");
			$(".ads").css("display","block");
			$(".footer").css("display","block");
			$(".linetop").css({transform:"translate(0,0) rotate(0deg)"});
			$(".linebot").css({transform:"translate(0,0) rotate(0deg)"});
			
			$(".showmenu").slideToggle(1000);
			flag4=true;
		}		
	})	
	//??高度过高，还有点击马叉
	//header-end
	
	
	// banner-begin
	var now=0;
	var next=0;
	var times=3000;
	var imgs=$(".bannerimg li");
	var box=$(".banner");
	var flag=true;
	//进度条重新开始
	var flag1=true;
	//轮播不允许点击太快
	var nowtime=0;
	var t1=setInterval(move,times);
	//运动的时间函数
	function move(){
		if(!flag1){
			return;
		}
		flag1=false;
		next=now+1;
		if(next>imgs.length-1){
			next=0;
		}
		imgs.eq(now).animate({width:"100%",height:"100%"}).css("zIndex",0);
		imgs.eq(next).animate({left:0},function(){
			imgs.eq(now).css({width:"110%",height:"110%",left:"100%"});
			if(next==0){
				flag=false;
			}
			flag1=true;
			nowtime=0;
			now=next;
		}).css("zIndex",1);	
	}
	var t2=setInterval(progress,40);
	//进度条
	function progress(){
		nowtime+=60;
		var bili=nowtime/times;
		if(bili>1){
			bili=1;
		}	
		$(".progress").eq(now).css("width",bili*100+"%");	
		if(!flag){
			$(".progress").css("width",0);
			flag=true;
		}
	}
	//进度条不准确
	//点击进度条
	function stop(){
			clearInterval(t1);
			clearInterval(t2);
			$(".progress").css("width",0).eq(next).css("width","100%");
			console.log("stop");
	}
	$(".bannero li").click(function(){
		if(!flag1){
			return;
		}
		flag1=false;
		var index=$(this).index();
		next=index;
		stop();	
		if(now<next){
			imgs.eq(now).animate({width:"100%",height:"100%"}).css("zIndex",0);
			imgs.eq(next).animate({left:0},function(){
				imgs.eq(now).css({width:"110%",height:"110%",left:"100%"});
				flag1=true;
				nowtime=0;
				now=next;
			}).css("zIndex",1);
		}else if(now>next){ 
			imgs.eq(now).animate({left:"100%"}).css("zIndex",1);
			imgs.eq(next).css({
				left:0,height:"100%",width:"100%"
			}).animate({height:"110%",width:"110%"},function(){
				now=next;
				flag1=true;
			}).css("z-index",0);
		}else{
			flag1=true;
			return;
		}
	})
	//左按钮
	$(".banleftin").click(function(){
		if(!flag1){
			return;
		}
		flag1=false;
		next=now-1;
		if(next<0){
			next=imgs.length-1;
		}
		imgs.eq(next).css({
			left:"-100%"
		})
		imgs.eq(now).animate({left:"100%"}).css("zIndex",1);
		imgs.eq(next).css({
			left:0,height:"100%",width:"100%"
		}).animate({height:"110%",width:"110%"},function(){
			now=next;
			flag1=true;
		}).css("z-index",0);
		stop();
	})
	//右按钮
	$(".banrightin").click(function(){
		move();
		stop();
	})
	//针对进度条在浏览器缩小后不变：浏览器最小化--》浏览器认为失去焦点--》时间函数在走，但是内容不刷新
	window.onblur=function(){
		clearInterval(t1);
		clearInterval(t2);
	}
	window.onfocus=function(){
		t1=setInterval(move,times);
		t2=setInterval(progress,50);
	}
	// 轮播结束
	
	//footer-begin
	$(".add").click(function(){
		if(!$(this).parents("li").find(".footermune").hasClass("ok")){
			$(this).css({transform:"rotate(45deg)"});
			$(this).parents("li").find(".footermune").slideToggle("normal").addClass("ok");
		}else{
			$(this).css({transform:"rotate(0deg)"});
			$(this).parents("li").find(".footermune").slideToggle("normal").removeClass("ok");
		}		
	})
	//footer-end
	
})
