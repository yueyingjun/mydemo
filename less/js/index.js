$(function(){
//	下拉
	var flag=true;
	$(".header .row div").eq(0).click(function(){
		if(flag==true){
			$(".header .row .lineg .line1").css({
                transition: "transform 0.5s ease",
                transform: "translate(0,4px) rotate(45deg)"
            })
            $(".header .row .lineg .line2").css({
                transition: "transform 0.5s ease",
                transform: "translate(0,-4px) rotate(-45deg)"
            })
			$(".erji").animate({
				height:"300px"
			},500)
			$(".erji div").animate({
				height:"42px",
				opacity:"1"
			},500,function(){
				flag=false;
			})
		}
		if(flag==false){
			$(".header .row .lineg .line1").css({
                transition: "transform 0.5s ease",
                transform: "translate(0,0px) rotate(0deg)"
            })
            $(".header .row .lineg .line2").css({
                transition: "transform 0.5s ease",
                transform: "translate(0,0px) rotate(0deg)"
            })

			$(".erji").animate({
				height:"0"
			},500)
			$(".erji div").animate({
				height:"0",
				opacity:"0"
			},500,function(){
				flag=true;
			})
		}
		
	})

//	轮播
	var flag1=true;
	var flag2=true;
	var flag3=true;
	var now=0;
	var next=0;
	var w=50;
	var t=setInterval(move,3000);
	var btn=$(".banner .btn .b-b div");
	// 轮播
	function move(type){
		flag1=false;
		type=type||"right";
		if (type=="right") {
			   next++;
		    if (next>=3) {
			    next=0;
			    flag2=false;
			    flag3=false;
		    }
			$(".banner .pic div").eq(now).animate({"width":"80%","height":"80%"},1000).css({"zIndex":2});
			$(".banner .pic div").eq(next).css({"width":"100%","height":"100%","left":"100%","zIndex":3}).animate({
				left:"0%"
			},1000,function(){
				flag1=true;
				if (flag2==false) {
					$(".banner .pic div").eq(2).css({"zIndex":1});
					flag2=true;
				}
			})
			now=next;
		}else if(type=="left"){
			   next--;
		    if (next<0) {
			    next=2;
			    flag=false;
		    }
			$(".banner .pic div").eq(now).animate({"width":"100%","height":"100%","left":"100%"},1000).css({"zIndex":3});
			$(".banner .pic div").eq(next).css({"width":"80%","height":"80%","left":"0%","zIndex":2}).animate({
				"width":"100%","height":"100%",
				left:"0%"
			},1000,function(){
				flag1=true;
				if (flag2==false) {
					$(".banner .pic div").eq(2).css({"zIndex":1});
					flag2=true;
				}
			})
			now=next;
		}
	}

	var t2=setInterval(zi,50);

	function zi(){
		w+=50;
		z=(w/3000)*100;
		if (z==100) {
			w=0;
		}
		$(".banner .btn .b-b").eq(now).find("div").css({"width":z+"%"});
		if (flag3==false) {
			$(".banner .btn .b-b div").css({"width":0});
			flag3=true;
		}
	}
	// 左右按钮显现
	$(".banner .leftbtn").hover(function(){
		$(".banner .leftbtn .left").animate({
			opacity:"1"
		},500)
	},function(){
		$(".banner .leftbtn .left").animate({
			opacity:"0"
		},500)
	})
	$(".banner .rightbtn").hover(function(){
		$(".banner .rightbtn .right").animate({
			opacity:"1"
		},500)
	},function(){
		$(".banner .rightbtn .right").animate({
			opacity:"0"
		},500)
	})
	// 左右按钮点击
	$(".banner .rightbtn .right").click(function(){
		clearInterval(t);
		clearInterval(t2);
		$(".banner .btn .b-b div").css({"width":0});
		var next2=next;
		next2++;
		if (next2>2) {
			next2=0;
		}
		$(".banner .btn .b-b div").eq(next2).css({"width":"100%"});
		if (flag1==true) {
			move("right");
		}
	})
	$(".banner .leftbtn .left").click(function(){
		clearInterval(t);
		clearInterval(t2);
		$(".banner .btn .b-b div").css({"width":0});
		var next2=next;
		next2--;
		if (next2<0) {
			next2=2;
		}
		$(".banner .btn .b-b div").eq(next2).css({"width":"100%"});
		if (flag1==true) {
			move("left");
		}
	})

	$(".banner .btn .b-b").click(function(){
		clearInterval(t);
		clearInterval(t2);
		var index=$(this).index(".banner .btn .b-b");
        next=index;
        if (next>now) {
        	$(".banner .btn .b-b div").css({"width":0});
			$(".banner .btn .b-b div").eq(next).css({"width":"100%"});
        	$(".banner .pic div").eq(now).animate({"width":"80%","height":"80%"},1000).css({"zIndex":2});
			$(".banner .pic div").eq(next).css({"width":"100%","height":"100%","left":"100%","zIndex":3}).animate({
				left:"0%"
			},1000,function(){
				flag1=true;
				if (flag2==false) {
					$(".banner .pic div").eq(2).css({"zIndex":1});
					flag2=true;
				}
			})
			now=next;
        }else if (next<now) {
        	$(".banner .btn .b-b div").css({"width":0});
			$(".banner .btn .b-b div").eq(next).css({"width":"100%"});
        	$(".banner .pic div").eq(now).animate({"width":"100%","height":"100%","left":"100%"},1000).css({"zIndex":4});
			$(".banner .pic div").eq(next).css({"width":"80%","height":"80%","left":"0%","zIndex":3}).animate({
				"width":"100%","height":"100%",
				left:"0%"
			},1000,function(){
				flag1=true;
				if (flag2==false) {
					// $(".banner .pic div").eq(1).css({"zIndex":1});
					flag2=true;
				}
			})
			now=next;
        }else {
        	return;
        }
	});


	
// 底部点击
	

	// alert($(".bottom .row .bt-r").length)
	
	$(".bottom .row .bt-r").each(function(index){
		$(".bottom .row .bt-r").eq(index).click(function(){
			if($(".bottom .row .bt-l").eq(index).css("display")=="none"){
				$(".bottom .row .bt-l").eq(index).css({"display":"block"});
				var l=$(".bottom .row .bt-l").eq(index).find("li").length+1;    //获取每一行的子元素个数
				var h=l*34;														//获取高度
				$(".bottom .row .bt-r").eq(index).animate({						//设置高度
					"height":h+"px"
				},500)
				$(".bottom .row .bt-l").eq(index).find("li").animate({			// 字体显现
					opacity:1
				},500);
			}else 
			if ($(".bottom .row .bt-l").eq(index).css("display")=="block") {		//反之
				$(".bottom .row .bt-r").eq(index).animate({
					"height":"34px"
				},500)
				$(".bottom .row .bt-l").eq(index).find("li").animate({
					opacity:0
				},500);
				$(".bottom .row .bt-l").eq(index).css({"display":"none"}).delay(500);
			}
		})


	})






})
