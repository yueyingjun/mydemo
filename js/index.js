$(function(){
	let flag=true;
	$(".btn").click(function(){
		if(flag){
			$(".line1").css("transform","translateY(7px) rotateZ(45deg)")
		    $(".line2").css("transform","rotateZ(-45deg)")
		    $(".smlist").slideToggle(500)
		    flag=false;
		}else{
			$(".line1").css("transform","translateY(0) rotateZ(0deg)")
		    $(".line2").css("transform","rotateZ(0deg)")
		    $(".smlist").slideToggle(500)
		    flag=true;
		}
	})
	var times=3000;
	var now=0;
	var next=0;
	t1=setInterval(move,times)
	function move(){
		next++
		if(next>=$(".clear li").length){
			next=0;
		}
		if(now==0){
			$(".pro").css("width","0px")
		}
		$(".pro").eq(now).animate({"width":"100%"},1000,function(){
            $(".clear li").eq(now).animate({"width":"95%","height":"95%"},800,function(){
			$(this).css({"left":"100%","width":"105%","height":"105%","z-index":"0"})
		    })
		    $(".clear li").eq(next).animate({"left":"0"},700).css("z-index","2")		    
		    now=next;
		})
	}
	$(".container-fluid1").mouseover(function(){
		clearInterval(t1)
	})
	$(".container-fluid1").mouseout(function(){
		t1=setInterval(move,times)
	})
	$(".leftbtn").click(function(){
		next--
		if(next<0){
			next=$(".clear li").length-1

		}
		$(".clear li").eq(next).css({"left":"0","width":"95%","height":"95%"})
		    $(".pro").css("width","0px").eq(next).css("width","100%")	
            $(".clear li").eq(now).animate({"left":"100%"},800,function(){
			$(this).css({"width":"95%","height":"95%","z-index":"2"})
		    })
		    $(".clear li").eq(next).animate({"width":"105%","height":"105%"},700).css("z-index","0")		    
		    now=next;
	   })
	$(".rightbtn").click(function(){
		next++
		if(next>=$(".clear li").length){
			next=0;
		}
	   if(now==0){
		$(".pro").css("width","0px")
		}
	    $(".clear li").eq(next).css({"left":"100%","width":"105%","height":"105%"})
		$(".pro").eq(now).css({"width":"100%"})
            $(".clear li").eq(now).animate({"width":"95%","height":"95%"},800,function(){
			$(this).css({"left":"100%","width":"105%","height":"105%","z-index":"0"})
		    })
		    $(".clear li").eq(next).animate({"left":"0"},700).css("z-index","2") 
		    now=next;	    
	})
var flag12=true;
    $(".smallFooter li").each(function(index){
        $(this).click(function(){
            $(".son").eq(index).slideToggle();
            if(flag12==true) {
                flag12=false;
                $("span").eq(index).css("transform", "rotate(45deg)");
            }else if(flag12==false){
                flag12=true;
                $("span").eq(index).css("transform", "rotate(0deg)");
            }
        })
    })
})