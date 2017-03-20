$(document).ready(function(){
    //导航栏
    var flag=true;
    var width;
    window.onresize=function(){
        width=$(".imgbox").width();
        //这里获取轮播宽度的值，凡是涉及会变化的，都应该写在这个里面。
        var h=$(window).height();
        //这里和$(document).height()。是不一样的，可以看笔记。
        var c=$(window).width();
        $(".hide").css("height",h);
        if(c>765){
            // $(".hide").slideToggle(); 这里如果写这句话会出现问题。会存储起来一直出。
            $(".hide").css("display","none")
            $(".fuhao:nth-child(1)").css("transform","translate(0,0px) rotate(0deg)");
            $(".fuhao:nth-child(2)").css("transform","translate(0,0px) rotate(0deg)");
            flag=true;
        }
    }
    window.onresize();
      //不加这句话第一次调动不了这个函数，因为没有动。
      $(".menu").click(function(){
          if(flag){
              flag=false;
              $(".hide").slideToggle();
              $(".fuhao:nth-child(1)").css("transform","translate(0,4px) rotate(45deg)");
              $(".fuhao:nth-child(2)").css("transform","translate(0,-4px) rotate(-45deg)");
          }else{
              $(".hide").slideToggle();
              $(".fuhao:nth-child(1)").css("transform","translate(0,0px) rotate(0deg)");
              $(".fuhao:nth-child(2)").css("transform","translate(0,0px) rotate(0deg)");
              flag=true;
          }

      })
//    双下标轮播
//     var imgs=$(".imgbox>a");
//     var btns=$(".anniubox>div");
//     //获取的宽度写到onresize里面的了，因为尺寸一变化，他的宽度也是会变化的。
//     var now=0;
//     // console.log(now)
//     var next=0;
//     // console.log(next)
//     var times=1500;
//     var ptimes=0;
//     var t1=setInterval(move,times);
//     var flag1=true;
//     function move(type){
//         var type=type||"r";
//         if(type=="r"){
//             next=now+1;
//             if(next>imgs.length-1){
//                 next=0;
//             }
//             imgs.eq(next).css("left",width);
//             imgs.eq(now).animate({left:-width},500);
//             // $(".progress").eq(now).animate({width:"100%"},1500)
//             imgs.eq(next).animate({left:0},500,function(){flag1=true})
//         }
//         if(type=="l"){
//             next=now-1;
//             if(next<0){
//                 next=imgs.length-1;
//             }
//             imgs.eq(next).css("left",-width);
//             imgs.eq(now).animate({left:width},500);
//             imgs.eq(next).animate({left:0},500,function(){flag1=true})
//         }
//         btns.removeClass().eq(next).addClass("first");
//         now=next;
//     }
// //    静止
//         $(".banner").hover(function(){
//             clearInterval(t1);
//         },function(){
//             t1=setInterval(move,1500)
//         })
// //    左右点击
//         $(".leftbtn,.rightbtn").on("click",function(){
//             if($(this).attr("class")=="leftbtn"){
//                 if(flag1){
//                     flag1=false;
//                     move("l")
//                 }
//             }else if($(this).attr("class")=="rightbtn"){
//                 if(flag1){
//                     flag1=false;
//                     move("r")
//                 }
//             }
//         })
// //    下边点击
//         btns.on("click",function(){
//             if($(this).index()>now){
//                 imgs.eq($(this).index()).css("left",width);
//                 imgs.eq(now).animate({left:-width},500,function(){flag=true})
//                 imgs.eq($(this).index()).animate({left:0},500,function(){flag=true})
//             }else if($(this).index()<now){
//                 imgs.eq($(this).index()).css("left",0);
//                 imgs.eq(now).animate({left:width},500,function(){flag=true})
//                 imgs.eq($(this).index()).animate({left:0},500,function(){flag=true})
//             }
//             btns.removeClass().eq($(this).index()).addClass("first");
//             now=$(this).index();
//         })




    //苹果轮播
    var times=3000;
    var t1=setInterval(move,times);
    var now=0;
    var next=0;
    var currentTime=0;
    var flag1=true;
    function move() {
        next++;
        if(next>$(".imgbox a").length-1){
            next=0;
            flag1=false;
        }
        //当前页面的变化
        $(".imgbox a").eq(now).animate({width:"80%",height:"80%"},1500).css("z-index",0);
        //层级也必须加.以为这里的层级还是按照定位的时候来算的，最后的，也就是说最后一张的层级是最高的，只是移动了一下位置到了 left；0，但是并不影响它的层级。如果不设置层级的话，第一轮是没有问题的，但是第二轮开始的的时候，由于最后一张的层级是最高的，所以会盖住后面的的图片。
        //下一张的变化
        $(".imgbox a").eq(next).animate({left:0},1500,function(){
            $(".imgbox a").eq(now).css({left:"100%",width:"100%",height:"100%"});
            now=next;
            //这里必须得写到这里
        }).css("z-index",1);
        currentTime=0;
        //这里必须得写到这里。写到 下面会越来越短。写到上面也会有问题。

    }
    //进度条的变化
    var t2=setInterval(progress,50);
    function progress() {
        currentTime+=50;
        var bili=currentTime/times;
        if(bili>1){
            bili=1;
        }
        $(".progress").eq(next).css("width",bili*100+"%");
        //这里必须是next
        if(!flag1){
            $(".progress").css("width",0);
            flag1=true;
        }
    }
    // 进度条的点击事件
    $(".anniubox div").click(function(){
        next=$(this).index();
        if($(this).index()>now){
            //当前页面的变化
            $(".imgbox a").eq(now).animate({width:"80%",height:"80%"},1500).css("z-index",0);
            //下一张的变化
            $(".imgbox a").eq($(this).index()).animate({left:0},1500,function(){
                $(".imgbox a").eq(now).css({left:"100%",width:"100%",height:"100%"});
                now=$(this).index();

            }).css("z-index",1);
        }else if($(this).index()<now){
            $(".imgbox a").eq(now).animate({left:"100%"},1500);
            $(".imgbox a").eq($(this).index()).css({left:0,width:"80%",height:"80%"});
            $(".imgbox a").eq($(this).index()).animate({width:"100%",height:"100%",zIndex:1},1500,function () {
                now=$(this).index();

            });
        }else if($(this).index()==now){
            $(".imgbox a").eq(now).css({width:"80%",height:"80%"});
            $(".imgbox a").eq(now).animate({width:"100%",height:"100%"});
        }
        $(".progress").css("width",0).eq($(this).index()).css("width","100%");
        stop();
    })
    function stop(){
        clearInterval(t1);
        clearInterval(t2);
    }
    window.onblur=function(){
        stop();
    }
    function start(){
        t2=setInterval(progress,50);
        t1=setInterval(move,times);
    }
    window.onfocus=function(){
        start()
    }
    // 左右点击按钮
    $(".rightbtn").click(function () {
        next++;
        if(next>$(".imgbox a").length-1){
            next=0;
            flag1=false;
        }
        //当前页面的变化
        $(".imgbox a").eq(now).animate({width:"80%",height:"80%"},1500).css("z-index",0);
        //下一张的变化
        $(".imgbox a").eq(next).animate({left:0},1500,function(){
            $(".imgbox a").eq(now).css({left:"100%",width:"100%",height:"100%"});
            now=next;
        }).css("z-index",1);
        $(".progress").css("width",0).eq(next).css("width","100%");
        stop();
    })
    $(".leftbtn").click(function () {
        next--;
        if(next<0){
            next=$(".imgbox a").length-1;
            flag1=false;
        }
        $(".imgbox a").eq(now).css({"z-index":2});
        $(".imgbox a").eq(now).animate({left:"100%"},1500);
        $(".imgbox a").eq(next).css({left:0,width:"80%",height:"80%","z-index":1});
        $(".imgbox a").eq(next).animate({width:"100%",height:"100%",zIndex:1},1500,function () {
            now=next;
        });
        $(".progress").css("width",0).eq(next).css("width","100%");
        stop();
    })

    //服务栏动画效果
    $(".s_small>div").click(function(){
        $(this).find(".hidden").slideToggle();
        if(!$(".s_small span").eq($(this).index()).attr("ok")){
            $(".s_small span").eq($(this).index()).css("transform","rotate(45deg)");
            $(".s_small span").eq($(this).index()).attr("ok","ok");
        }else{
            $(".s_small span").eq($(this).index()).css("transform","rotate(0deg)");
            $(".s_small span").eq($(this).index()).removeAttr("ok");
        }
    })

})