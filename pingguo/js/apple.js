$(function(){
        var flag1=true;
        window.onresize=function(){
            var clenth=$(window).height();
            var clentw=$(window).width();
            $(".menu").css("height",clenth);
            if(clentw>750){
                $(".menu").hide();
                $(".ad").css("display","block");
                $(".anniu .btn").css({
                    transform:"translate(0,0) rotate(0deg)"
                })
                $(".anniu .btn2").css({
                    transform:"rotate(0deg)"
                })
                 flag1=true;
            }
        }
        window.onresize();
        $(".anniu").click(function(){
            if(flag1){
                $(".ad").hide();
                $(".anniu .btn").css({
                    transform:"translate(0,12px) rotate(45deg)"
                })
                $(".anniu .btn2").css({
                    transform:"rotate(-45deg)"
                })
                $(".menu").slideToggle(1000);
                    flag1=false;
            }else{
                $(".ad").show();
                $(".anniu .btn").css({
                    transform:"translate(0,0) rotate(0deg)"
                })
                $(".anniu .btn2").css({
                    transform:"rotate(0deg)"
                })
                $(".menu").slideToggle(1000);
                flag1=true;
            }
        })
    
        // 轮播图
        var times=3000;
        var currentNum=0;//当前的下标
        var nextNum=0;//下一个的下标
        var currenttime=0;
        var t1,t2;
        t1=setInterval(move,times);
        var flag=true;
        function move(){
            nextNum++;
            if(nextNum>$(".list").length-1){
                nextNum=0;
            }
            $(".list").eq(currentNum).animate({width:"80%",height:"80%"}).css("z-index",0);
            $(".list").eq(nextNum).animate({left:0},function(){
                $(".list").eq(currentNum).css({width:"100%",height:"100%",left:"100%"}).css("z-index",0)
                if(nextNum==0){
                    flag=false;
                }
                currentNum=nextNum;
                currenttime=0;
            }).css("z-index",1)

        }
        t2=setInterval(progress,60);
    //进度条变化
        function progress(){
            currenttime+=60;
            var bili=currenttime/times;
            if(bili>1){
                bili=1;
            }
            $(".banner ul li div").eq(currentNum).css("width",bili*100+"%");
            if(!flag){
                $(".banner ul li div").css("width",0);
                flag=true;
            }
        }
        function stop(){
            clearInterval(t1);
            clearInterval(t2);
            $(".banner ul li div").css("width",0).eq(nextNum).css("width","100%");
        }
    //点击进度条
        $(".banner ul li").click(function(){
            var index=$(this).index();
            console.log(index);
            nextNum=index;
            stop();
            if (currentNum<nextNum){
                $(".list").eq(currentNum).animate({width:"80%",height:"80%"}).css("z-index",0);
                $(".list").eq(nextNum).animate({left:0},function(){
                    $(".list").eq(currentNum).css({width:"100%",height:"100%",left:"100%"}).css("z-index",0)
                    if(nextNum==0){
                        flag=false;
                    }
                    currentNum=nextNum;
                    currenttime=0;
                }).css("z-index",1)
            }else{
                 $(".list").eq(currentNum).animate({left:"100%"}).css("z-index",0);
                 $(".list").eq(nextNum).css({left:0,top:0,width:"80%",height:"80%"}).animate({width:"100%",height:"100%"},function(){
                    currentNum=nextNum;
                }).css("z-index",1)
            }
        })
    //点击左边的按钮
        $(".leftbtn").click(function(){
            nextNum--;
            if(nextNum<0){
                nextNum=$(".list").length-1;
            }
            $(".list").eq(currentNum).animate({left:"100%"}).css("z-index",1);
            $(".list").eq(nextNum).css({left:0,top:0,width:"80%",height:"80%"}).animate({width:"100%",height:"100%"},function(){
                currentNum=nextNum;
            })
            stop();
        })
    //点击右边的按钮
        $(".rightbtn").click(function(){
            nextNum++;
            if(nextNum>$(".list").length-1){
                nextNum=0;
            }
            $(".list").eq(currentNum).animate({width:"80%",height:"80%"}).css("z-index",0);
            $(".list").eq(nextNum).animate({left:0},function(){
                $(".list").eq(currentNum).css({width:"100%",height:"100%",left:"100%"})
                if(nextNum==0){
                    flag=false;
                }
                currentNum=nextNum;
                currenttime=0;
            }).css("z-index",1)
            stop();
        })
    window.onblur=function(){
        clearInterval(t1)
        clearInterval(t2)
    }
    window.onfocus=function(){
        t1=setInterval(move,times);
        t2=setInterval(progress,60);
    }


    //底部
    $(".sfooter ul li").click(function(){
        var index2=$(this).index();
        $(".jia").eq(index2).css({"transform": "rotate(45deg)"})
        $(".xiala").eq(index2).slideToggle(500);
    })

     })
    
//currentNum当前下标
//nextNum下一张下标