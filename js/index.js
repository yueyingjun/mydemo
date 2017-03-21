$(function () {
    var t =setInterval(auto,3000);
    var now=0;
    var next=0;
    function auto () {
        next++;
        if(next>$('.largewheel-list').length-1){
            next=0;
        }
        $('.largewheel-list').eq(next).animate({left:0});
        $('.largewheel-list').eq(now).css("width",90+'%');
        $('.largewheel-list').eq(now).css("width",100+'%').animate({left:100+'%'});
        now=next;
    }
    $(".leftbtn").click(function () {
        next=now-1;
        if(next<0){
            next=$('.largewheel-list').length-1;
        }
        $('.largewheel-list').eq(next).animate({left:0});
        $('.largewheel-list').eq(now).animate({left:100+'%'});
        now=next;
    });
    $(".rightbtn").click(function () {
        next++;
        if(next>$('.largewheel-list').length-1){
            next=0;
        }
        $('.largewheel-list').eq(next).animate({left:0});
        $('.largewheel-list').eq(now).css("width",90+'%');
        $('.largewheel-list').eq(now).css("width",100+'%').animate({left:100+'%'});
        now=next;
    });
    var m=setInterval(pro,50);
    function pro () {
        $(".progress").eq(now).animate({width:100+'%'},3000,function () {
            if(now>$('.progress').length-1){
                $(".progress").css("width",0);
                now=0;
            }
        });
    }

    $(".rectbtn-list").click(function () {
        if(next>now){
            next++;
            if(next>$('.largewheel-list').length-1){
                next=0;
            }
            $('.largewheel-list').eq(next).animate({left:0});
            $('.largewheel-list').eq(now).css("width",90+'%');
            $('.largewheel-list').eq(now).css("width",100+'%').animate({left:100+'%'});
            now=next;
        }else{
            next=now-1;
            if(next<0){
                next=$('.largewheel-list').length-1;
            }
            $('.largewheel-list').eq(next).animate({left:0});
            $('.largewheel-list').eq(now).animate({left:100+'%'});
            now=next;
        }
    })


    $(".small-list").eq(0).click(function () {
        $(".hide").toggle();
    })
    $(".smallfoot").delegate("div","click",function () {
        $(this).find(".foothide").toggle();
    })
});
