/**
 * Created by HouKai on 2017/3/17.
 */
$(function () {
    //导航点击
    var newval="x";
	$(".nav-s-3 a").click(function(){
		var oldval=$(this).html();
		if(newval!=oldval){
			$(this).html(newval);
		}
		console.log(oldval)
		if(oldval=="="){
			$(".main .nav-display").css({display:"block"});
		}else{
			$(".main .nav-display").css({display:"none"});
		}
		newval=oldval;

    //banner
        var t1,t2;
        var btime=3000;
        var curNum=0;
        var nextNum=0;
        var prostart=100;
        var flag1=true;
        var flagb=true;
        t1=setInterval(move,btime);
        function move(type) {
            if(!flagb){
                return;
            }
            flagb=false;
            var type=type||"right";
            if(type=="right"){
                nextNum=curNum+1;
                if(nextNum>$(".banner .img li").size()-1){
                    nextNum=0;
                }
                $(".banner .img li").eq(curNum).css("zIndex","0").animate({"height":"100%","left":"-10%"});
                $(".banner .img li").eq(nextNum).css("zIndex","1").animate({"left":"0"},600,function () {
                    $(".banner .img li").eq(curNum).css({"height":"110%","left":"100%"});
                    curNum=nextNum;
                    prostart=100;
                    if(curNum==0){
                        flag1=false;
                    }
                    flagb=true;
                });
            }else if(type=="left"){
                nextNum=curNum-1;
                if(nextNum<0){
                    nextNum=$(".banner .img li").size()-1;
                }
                $(".banner .img li").eq(curNum).css("zIndex","1").animate({"left":"100%"});
                $(".banner .img li").eq(nextNum).css({"zIndex":"0","height":"100%","left":"-10%"}).animate({"left":"0","height":"110%"},function (){
                    $(".banner .img li").eq(curNum).css({"zIndex":"0","height":"110%"});
                    curNum=nextNum;
                    flagb=true;
                })
            }
        }
        //进度条
        var bili;
        t2=setInterval(movepro,50)
        function movepro() {
            prostart+=50;
            bili=prostart/btime;
            if(bili>1){
                bili=1;
            }
            $(".banner .btns li .progress").eq(curNum).css("width",bili*100+"%");
            if(!flag1){
                flag1=true;
                $(".banner .btns li .progress").css("width",0);
            }
        }

        //小按钮
        $(".banner .btns li").click(function () {
            var index=$(this).index();
            clearInterval(t1);
            clearInterval(t2);
            $(".banner .btns li .progress").css("width","0").eq(index).css("width","100%");
            if(index>curNum){
                $(".banner .img li").eq(curNum).css("zIndex","0").animate({"height":"100%","left":"-10%"});
                $(".banner .img li").eq(index).css("zIndex","1").animate({"left":"0"},function () {
                    $(".banner .img li").eq(curNum).css({"height": "110%", "left": "100%"});
                    curNum=index;
                });
            }else if(index<curNum){
                $(".banner .img li").eq(curNum).css("zIndex","1").animate({"left":"100%"});
                $(".banner .img li").eq(index).css({"zIndex":"0","height":"100%","left":"-10%"}).animate({"left":"0","height":"110%"},function () {
                    curNum=index;
                    $(".banner .img li").eq(curNum).css("zIndex","1").animate({"height":"110%"});
                });
            }

        });
        //左右按钮
        $(".banner .leftBtn li").click(function () {
            clearInterval(t1);
            clearInterval(t2);
            move("left");
            $(".banner .btns li .progress").css("width","0").eq(nextNum).css("width","100%");
        })
        $(".banner .rightBtn li").click(function () {
            clearInterval(t1);
            clearInterval(t2);
            move();
            $(".banner .btns li .progress").css("width","0").eq(nextNum).css("width","100%");
        })
	})
    
    
    
    
    
    
    
    
    
    
    // 底部点击
	

	// alert($(".bottom .row .bt-r").length)
	
	
	$(".bottom .row .bt-r").each(function(index){
		
		var newval="x";
		$(".bottom .row .bt-r").eq(index).click(function(){
			var oldval=$(".bottom .row .bt-r .jiahao").eq(index).html();
			if(newval!=oldval){
				$(".bottom .row .bt-r .jiahao").eq(index).html(newval);
			}
			newval=oldval;
		})
		
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