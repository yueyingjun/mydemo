/**
 * Created by Administrator on 2017/3/17.
 */
$(function () {
    var flag=true;
   $(".small_menuicon label").on("click",function () {
       if(flag){
           $(this).css("transform","rotate(90deg)");
           $(this).find(".top").css({"transition":"transform 0.25s 0.2s cubic-bezier(0.4, 0.01, 0.165, 0.99), -webkit-transform 0.25s 0.2s cubic-bezier(0.4, 0.01, 0.165, 0.99);","transform":"rotate(45deg)"});
           $(this).find(".top .top_line").css("transform","translateY(0)");
           $(this).find(".bottom").css({"transition":"transform 0.25s 0.2s cubic-bezier(0.4, 0.01, 0.165, 0.99), -webkit-transform 0.25s 0.2s cubic-bezier(0.4, 0.01, 0.165, 0.99);","transform":"rotate(-45deg)"});
           $(this).find(".bottom .bottom_line").css({"transition":"transform 0.2s, -webkit-transform 0.2s;","transform":"translateY(0)"});
           /*下拉*/

           $("body").css({"height":"100%","overflow":"hidden"});
           $("nav").css({"height": "100%","max-height":"none","background":"#000"});
           $(".nav_list").css({"visibility":"visible","transition-delay": "0s"}).find(".ac_menu").css({"opacity":1,"transform":"none"});


           flag=false;
       }else{
           $(this).css("transform","rotate(0deg)");
           $(this).find(".top").css({"transform":"rotate(0deg)"});
           $(this).find(".top .top_line").css("transform","translateY(-3px)");
           $(this).find(".bottom").css({"transform":"rotate(0deg)"});
           $(this).find(".bottom .bottom_line").css({"transform":"translateY(3px)"});
           //下拉
           $("body").css({"height":"","overflow":"auto"});
           $("nav").css({"height": "","background":""})
           $(".nav_list").find(".ac_menu").css({"opacity":0,"transform":"scale(1.1) translateY(-24px)"});
           $(".nav_list").css("visibility","hidden");
           flag=true;
       }

   });
    var flag_change=true;
   $(".footer_nav").bind("click",function () {
       $(this).find(".footer_nav_wrap").slideToggle();
        if(flag_change){
            $(this).find("dt").addClass("change");
            flag_change=false;
        }else{
            $(this).find("dt").removeClass("change");
            flag_change=true;
        }
   })
 //轮播
   var t1,t2;
   var currentIndex=0;
   var nextIndex=0;
   var currentTime=0;
   var banner_flag=true;
   t1=setInterval(move,3000);
   t2=setInterval(move1,50);
   window.onblur=function () {
       clearInterval(t1);
       clearInterval(t2);
   }
   window.onfocus=function () {
       t1=setInterval(move,3000);
       t2=setInterval(move1,50);
   }
   function move(type) {
       var type=type||"left"; //设置轮播朝哪个方向走
       if(type=="left"){
           nextIndex=currentIndex+1;
           if(nextIndex>$(".gallery-item").length-1){
               nextIndex=0;
               banner_flag=false;  //如果大于图片数量的长度，则让开关为FALSE。
           }
           $(".gallery-item").eq(currentIndex).children().eq(0).animate({width:"90%",height:"90%"},1000).end().end().css("z-index","0");

           $(".gallery-item").eq(nextIndex).children().eq(0).animate({width:"100%",height:"100%"}).end().end().animate({left:"0%"},1000,function () {

               $(".gallery-item").eq(currentIndex).animate({left:"100%"});
               currentIndex=nextIndex;
               currentTime=0;
               banner_flag=true;
           }).css("z-index",2);
       }else if(type=="right"){
           nextIndex=currentIndex-1;
           if(nextIndex<0){
               nextIndex=$(".gallery-item").length-1;
           }
           $(".gallery-item").eq(currentIndex).animate({left:"100%"},1000).css("z-index","2");//设置当前图片层级为2
           $(".gallery-item").eq(nextIndex).css({left:"0%"}).children().eq(0).css({width:"90%",height:"90%"}).animate({width:"100%",height:"100%"},1000,function () {
               $(".gallery-item").eq(currentIndex).css("z-index","0");//当下一个完成时，设置当前图片的层级为0;
               currentIndex=nextIndex;
           });
               // $(".gallery-item").eq(currentIndex).animate({left:"100%"})

               // currentTime=0;
               // banner_flag=true;
           // });
       }

   }
   /*进度条*/
   function move1() {
       if(banner_flag) {
           currentTime += 50;
           var pro = currentTime / 3000;
           if (pro > 1) {
               pro = 1;
           }
           $(".progress").eq(currentIndex).css("width", pro * 100 + "%");
       }else{
            $(".progress").css("width","0%"); //清除进度条
        }
   }

   /*轮播图点击点*/
   $(".btns li").on("click",function () {
       nextIndex=$(this).index();
       console.log(nextIndex,currentIndex);
       stop();
   })
   /*左右按钮*/
   $(".rightButton .button_con").bind("click",function () {
       stop();
       $(".progress").css("width","0%");
       move("left");
       $(".progress").eq(nextIndex).css("width","100%");
   })
   $(".leftButton .button_con").on("click",function () {
       stop();
       $(".progress").css("width","0%");
       move("right");
       $(".progress").eq(nextIndex).css("width","100%");
   })
        


   //停止进度条与轮播
    function stop() {
        clearInterval(t2);
        clearInterval(t1);

        /*设置点击进度条后的样式*/
        $(".progress").css("width","0%").eq(nextIndex).css("width","100%");
        if(nextIndex>currentIndex){
            $(".gallery-item").eq(currentIndex).children().eq(0).animate({width:"90%",height:"90%"},1000).end().end().css("z-index","0");

            $(".gallery-item").eq(nextIndex).children().eq(0).animate({width:"100%",height:"100%"}).end().end().animate({left:"0%"},1000,function () {

                $(".gallery-item").eq(currentIndex).animate({left:"100%"})
                currentIndex=nextIndex;
                currentTime=0;
                banner_flag=true;
            }).css("z-index",2);
        }else if(nextIndex<currentIndex){
            $(".gallery-item").eq(currentIndex).animate({left:"100%"},1000).css("z-index","0");
            $(".gallery-item").eq(nextIndex).css({left:"0%"}).children().eq(0).css({width:"90%",height:"90%"}).animate({width:"100%",height:"100%"},1000,function () {
                currentIndex=nextIndex;
            }).css("z-index",2);
        }

    }

})