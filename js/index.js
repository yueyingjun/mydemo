$(function () {
    // 小屏 下拉菜单
    function menu() {
        var flag=true;
        window.onresize=function(){  // 当浏览器发生变化时
            var clientW=$(window).width();
            var clientH=$(window).height();
            $("#menu").css("height",clientH);
            if(clientW>765){
                $("#menu").css("display","none")
                flag=true;
                $(".line1").css({
                    transform:"translate(0,0px) rotate(0deg)"
                })
                $(".line2").css({
                    transform:"translate(0,0px) rotate(0deg)"
                })
            }
        }
        window.onresize();

        $("#btn").click(function () {
            if(flag){
                $(".line1").css({
                    transform:"translate(0,6px) rotate(45deg)"
                });
                $(".line2").css({
                    transform:"translate(0,-6px) rotate(-45deg)"
                })
                flag=false;
            }else{
                $(".line1").css({
                    transform:"translate(0,0px) rotate(0deg)"
                })
                $(".line2").css({
                    transform:"translate(0,0px) rotate(0deg)"
                })
                flag=true;
            }
            $("#menu").slideToggle(800);
        })
    }

    menu(); // 运行下拉菜单



    // 轮播
    function lunbo() {
        var t=3000;
        var currentNum=0;
        var nextNum=0;
        var currentTime=0;
        var flag=true;
        var num=1500;
        var lis=$(".wheel_list li");
        var jindu=$(".wheel_line li div");
        var lineBtn=$('.wheel_line li');
        // 自动轮播
        var t1=setInterval(auto,t);
        function auto(){
            nextNum++;
            if(nextNum>lis.length-1){
                nextNum=0;
            }
        // 当前这一张
            lis.eq(currentNum).animate({width:'80%',height:'80%'})
        // 下一张的运动方式
            lis.eq(nextNum).animate({left:0},function () {
                lis.eq(currentNum).css({
                    left:'100%',width:'100%',height:'100%'
                });
                if(nextNum==0){
                    flag=false;
                }
                currentNum=nextNum;
                currentTime=0;
            }).css('z-index',1);

        }
        // 进度条的变化
        var t2=setInterval(progress,50);
        function progress() {
            currentTime+=60;
            var bili=currentTime/t;
            if (bili>1){
                bili=1;
            }
            jindu.eq(currentNum).css('width',bili*100+'%');
            if(!flag){
               jindu.css('width',0);
               flag=true;
            }
        }

        // 进度条的点击事件

        lineBtn.click(function(){
            var index=$(this).index(".wheel_line li");
            nextNum=index;
            stop();
        })

        function stop(){
            clearInterval(t1);
            clearInterval(t2);

           jindu.css("width",0).eq(nextNum).css("width","100%");

            if(currentNum<nextNum){
                //当前这一张

                lis.eq(currentNum).animate({
                    width:"80%",height:"80%"
                })

                //下一张的运动方式
                lis.eq(nextNum).animate({
                    left:0
                },function(){
                    lis.eq(currentNum).css({
                        width:"100%",height:"100%",left:"100%"
                    })
                    if(nextNum==0){
                        flag=false;
                    }

                    currentNum=nextNum;
                    currentTime=0;

                }).css("zIndex",1);
            }else{

                lis.eq(currentNum).animate({left:"100%"}).css("z-index",1);

                lis.eq(nextNum).css({
                    left:0,top:0,width:"80%",height:"80%"
                }).animate({width:"100%",height:"100%"},function(){
                    currentNum=nextNum;
                })


            }

        }


        $(".leftBtn span").click(function(){
            nextNum--;
            if(nextNum==-1){
                nextNum=lis.length-1;
            }
            stop();
        })

        $(".rightBtn span").click(function(){
            nextNum++;
            if(nextNum>lis.length-1){
                nextNum=0;
            }
            stop();
        })

    }

    lunbo();    // 运行轮播
})