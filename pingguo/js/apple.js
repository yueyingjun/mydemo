$(document).ready(function(){
	var flag=true;
	window.onresize=function(){
		var width=$(window).width();
		var height=$(window).height();
		$(".menu").css("height",height);
		if(width>765){
			$(".menu").css("display","none");
			$(".line1").css({"transform":"translate(0,0px) rotate(0deg)"});
			$(".line2").css({"transform":"translate(0,0px) rotate(0deg)"});
			flag=true;
		}
		$(".wheel").css("max-width",width)
	}
	
	window.onresize();
	$(".btn").click(function(){
		if(flag){
			$(".menu").slideToggle();
			$(".line1").css({"transform":"translate(0,3.5px) rotate(45deg)"})
			$(".line2").css({"transform":"translate(0,-3.5px) rotate(-45deg)"})
			flag = false;
		}else{
			$(".menu").slideToggle();
			$(".line1").css({"transform":"translate(0,0px) rotate(0deg)"})
			$(".line2").css({"transform":"translate(0,0px) rotate(0deg)"})
			flag=true;
		}

	})
	
	
	
	//banner轮播
//	var times=3000;
//	var tt=setInterval(move,times);
//	var now=0;
//	var next=0;
//	var flag1=true;
//	var currentTime=0;
//	function move(){	
//		next++;
//		if(next>$("wheel-lists").length-1){
//			next=0;
//			flag1=false;
//		}
//		//轮播开始当前这张的变化
//		$(".wheel-lists").eq(now).animate({width:"80%",height:"80%"},1500).css("z-index",0)
//		//下一张的变化
//		$("wheel-lists").eq(next).animate({width:0},1500,function(){
//			$("wheel-lists").eq(now).css({left:"100%",width:"100%",height:"100%"})
//			now=next;
//		}).css("z-index",1);
//		currentTime=0;
//		
//	}
//	var t2=setInterval(progress,50);
//	function progress(){
//		currentTime+=50;
//		var bili=currentTime/times;
//		if(bili>1){
//			bili=1;
//		}
//		$(".cox").eq(next).css("width",bili*100+"%");
//		if(!flag1){
//			$(".cox").css("width",0);
//			flag1=true;
//		}
//	}
//	//轮播条的点击事件
//	$(".rect-btn").click(function(){
//		next=$(this).index();
//		if($(this).index()>now){
//			$(".wheel-lists").eq(now).animate({width:"80%",height:"80%"},1500).css("z-index",0);
//			$(".wheel-lists").eq($(this).index()).animate({left:0},1500,function(){
//				$(".wheel-lists").eq(now).css({left:"100%",width:"100%",height:"100%"});
//				now=$(this).index();
//			}).css("z-index",1);
//		}else if($(this).index()<now){
//			$(".wheel-lists").eq(now).animate({left:"100%"},1500);
//			$(".wheel-lists").eq($(this).index()).css({left:0,width:"80%",height:"80%"});
//			$(".wheel-lists").eq($(this).index()).animate({width:"100%",height:"100%",zIndex:1},1500,function(){
//				now=$(this).index();
//			})
//		}else if($(this).index()==now){
//			$(".wheel-lists").eq(now).css({width:"80%",height:"80%"});
//			$(".wheel-lists").eq(now).animate({width:"100%",height:"100%"});
//		}
//		$(".cox").css("width",0).eq($(this).index()).css("width","100%");
//		stop();		
//	})
//	function stop(){
//		clearInterval(tt);
//		clearInterval(t2);
//	}
//	//左右点击按钮
//	$(".rightBtn").click(function(){
//		next++;
//		if(next>$(".wheel-lists").length-1){
//			next=0;
//			flag1=false;
//		}
//		$(".wheel-lists").eq(now).animate({width:"80%",height:"80%"},1500).css("z-index",0);
//		$(".wheel-lists").eq(next).animate({left:0},1500,function(){
//			$(".wheel-lists").eq(now).css({left:"100%",width:"100%",height:"100%"});
//			now=next;
//		}).css("z-index",1);
//		$(".cox").css("width",0).eq(next).css("width","100%");
//		stop();
//	})
//	$(".leftBtn").click(function(){
//		next--;
//		if(next<0){
//			next=$(".wheel-lists").length-1;
//			flag1=false;
//		}
//		$(".wheel-lists").eq(now).css({"z-index":2});
//      $(".wheel-lists").eq(now).animate({left:"100%"},1500);
//      $(".wheel-lists").eq(next).css({left:0,width:"80%",height:"80%","z-index":1});
//      $(".wheel-lists").eq(next).animate({width:"100%",height:"100%",zIndex:1},1500,function () {
//          now=$(this).index();
//      });
//      $(".cox").css("width",0).eq(next).css("width","100%");
//      stop();
//	})




	/*左右按钮*/
    var times=3000;
    var t1=setInterval(move,times);
    var now=0;
    var next=0;
    var currentTime=0;
    var flag1=true;
    function move() {
        next++;
        if(next>$(".wheel-lists").length-1){
            next=0;
            flag1=false;
        }
        //当前页面的变化
        $(".wheel-lists").eq(now).animate({width:"80%",height:"80%"},1500).css("z-index",0);
        //下一张的变化
        $(".wheel-lists").eq(next).animate({left:0},1500,function(){
            $(".wheel-lists").eq(now).css({left:"100%",width:"100%",height:"100%"});
            now=next;
        }).css("z-index",1);
        currentTime=0;
    }
    //进度条的变化
    var t2=setInterval(progress,50);
    function progress() {
        currentTime+=50;
        var bili=currentTime/times;
        if(bili>1){
            bili=1;
        }
        $(".cox").eq(next).css("width",bili*100+"%");
        if(!flag1){
            $(".cox").css("width",0);
            flag1=true;
        }
    }
    // 进度条的点击事件
    $(".rect-btn").click(function(){
        next=$(this).index();
        if($(this).index()>now){
            //当前页面的变化
            $(".wheel-lists").eq(now).animate({width:"80%",height:"80%"},1500).css("z-index",0);
            //下一张的变化
            $(".wheel-lists").eq($(this).index()).animate({left:0},1500,function(){
                $(".wheel-lists").eq(now).css({left:"100%",width:"100%",height:"100%"});
                now=$(this).index();
            }).css("z-index",1);
        }else if($(this).index()<now){
            $(".wheel-lists").eq(now).animate({left:"100%"},1500);
            $(".wheel-lists").eq($(this).index()).css({left:0,width:"80%",height:"80%"});
            $(".wheel-lists").eq($(this).index()).animate({width:"100%",height:"100%",zIndex:1},1500,function () {
                now=$(this).index();
            });
        }else if($(this).index()==now){
            $(".wheel-lists").eq(now).css({width:"80%",height:"80%"});
            $(".wheel-lists").eq(now).animate({width:"100%",height:"100%"});
        }
        $(".cox").css("width",0).eq($(this).index()).css("width","100%");
        stop();
    })
    function stop(){
        clearInterval(t1);
        clearInterval(t2);
    }
    // 左右点击按钮
    $(".rightBtn").click(function () {
        next++;
        if(next>$(".wheel-lists").length-1){
            next=0;
            flag1=false;
        }
        //当前页面的变化
        $(".wheel-lists").eq(now).animate({width:"80%",height:"80%"},1500).css("z-index",0);
        //下一张的变化
        $(".wheel-lists").eq(next).animate({left:0},1500,function(){
            $(".wheel-lists").eq(now).css({left:"100%",width:"100%",height:"100%"});
            now=next;
        }).css("z-index",1);
        $(".cox").css("width",0).eq(next).css("width","100%");
        stop();
    })
    $(".leftBtn").click(function () {
        next--;
        if(next<0){
            next=$(".wheel-lists").length-1;
            flag1=false;
        }
        $(".wheel-lists").eq(now).css({"z-index":2});
        $(".wheel-lists").eq(now).animate({left:"100%"},1500);
        $(".wheel-lists").eq(next).css({left:0,width:"80%",height:"80%","z-index":1});
        $(".wheel-lists").eq(next).animate({width:"100%",height:"100%",zIndex:1},1500,function () {
            now=$(this).index();
        });
        $(".cox").css("width",0).eq(next).css("width","100%");
        stop();
    })
	
})
