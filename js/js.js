
$(function () {
    window.onblur=function(){
        clearInterval(t1);
        clearInterval(t2);
    };
    window.onfocus=function(){
        t1=setInterval(move,3000);
        t2=setInterval(protime,50);
    };

 	var flag=true;
    window.onresize=function() {
        var clientH = $(window).height();
        var clientW = $(window).width();
        $(".menu").css("height", clientH);
        if(clientW>765){
//          $(".menu").css("display","none");
            flag=true;
            $(".line1").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".line2").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
        }



        if(clientW<748){
            var flag=true;
            $(".list .listtitle").click(function(){
                if(flag){
                    $(this).next().slideDown(100);
                    $(this).find(".after").css({transform: "translate(0,0px) rotate(45deg)"});
                    flag=false;
                }else{
                    $(this).next().slideUp(100);
                    $(this).find(".after").css({transform: "translate(0,0px) rotate(0deg)"});
                    flag=true;
                }
            })
        }



    }
    window.onresize();

    $(".btn").click(function(){
     // if(flag){
     //     $(".line1").css({
     //         transform:"translate(0,5px) rotate(45deg)"
     //     })
     //     $(".line2").css({
     //         transform:"translate(0,-2px) rotate(-45deg)"
     //     })
     //
     //     flag=false
     //
     // }else{
     //     $(".line1").css({
     //         transform:"translate(0,0px) rotate(0deg)"
     //     })
     //     $(".line2").css({
     //         transform:"translate(0,0px) rotate(0deg)"
     //     })
     //
     //     flag=true
     // }
        $(".menu").slideToggle(1000);
    })
    
    
    
	//轮播图
    var now=0;
    var next=0;
    var t1=setInterval(move,3000);
    var flag=true;
    function  move() {
        next++;
        if(next>$(".wheel-list").length-1){
            next=0;
            flag=false;
        }
		$(".wheel-list").eq(now).animate({width:"70%",height:"70%"}).css({zIndex:0});
        $(".wheel-list").eq(next).css({zIndex:1}).animate({left:0},   			function(){    				$(".wheel-list").eq(now).css({left:"100%"}).animate({width:"100%",height:"100%"});
        		if(next==0){
        			flag=false;
        		}
            	now=next;
            	t2time=0;
        	});

    }
    //进度条
    var t2=setInterval(protime,50); 
    var t2time=0;
    var t1time=3000;
    function protime() {
        t2time+=50;
        var bili=t2time/t1time;
        if(bili>1){
        	bili=0;
        }
        $(".progress").css({width:0}).eq(now).css({width:bili*100+"%"});
        if(!flag){
            $(".progress").css({width:0});
            flag=true;
        }
    }
	
	//进度条点击
	$(".smallbtns").click(function(){
		var next=$(this).index();
		if(next>now){
			$(".wheel-list").eq(now).animate({width:"70%",height:"70%"}).css({zIndex:0});
        $(".wheel-list").eq(next).css({zIndex:1}).animate({left:0},   			function(){    				$(".wheel-list").eq(now).css({left:"100%"}).animate({width:"100%",height:"100%"});
            	now=next;
        });
		}
		if(next<now){ 
			$(".wheel-list").eq(now).css({zIndex:0}).animate({left:"100%"});
			$(".wheel-list").eq(next).css({left:0,width:"70%",height:"70%"}).animate({width:"100%",height:"100%"},function(){
            	now=next;
			});
		}
		$(".progress").css({width:0}).eq(next).css({width:100+"%"});
		clearInterval(t1);
		clearInterval(t2);
	})
	
	//左右按钮
	$(".leftBtn").click(function(){
        next--;
        if(next==-1){
            next=$(".wheel-list").length-1;
        }  
		$(".wheel-list").eq(now).animate({left:"100%"});
		$(".wheel-list").eq(next).css({left:0,width:"70%",height:"70%"}).animate({width:"100%",height:"100%"},function(){
			
            	now=next;
			});
		$(".progress").css({width:0}).eq(next).css({width:100+"%"});
        clearInterval(t1);
		clearInterval(t2);
    })

    $(".rightBtn").click(function(){
        next++;
        if(next>$(".wheel-list").length-1){
            next=0;
            flag=false;
        }
		$(".wheel-list").eq(now).animate({width:"70%",height:"70%"}).css({zIndex:0});
        $(".wheel-list").eq(next).css({zIndex:1}).animate({left:0},   			function(){    				$(".wheel-list").eq(now).css({left:"100%"}).animate({width:"100%",height:"100%"});
        		
            	now=next;
            	
				$(".progress").css({width:0}).eq(next).css({width:100+"%"});
            	
        	});
        clearInterval(t1);
		clearInterval(t2);
    })

});