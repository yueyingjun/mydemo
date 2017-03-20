$(function(){
	var star = {
		dangqian: 0,
		next: null
	};

	var run=$('.banner .movb');
	var btnL=$('.btnL a');
	var btnR=$('.btnR a');
	var lis=$('.dianji a');
	var dark=$('.dianji li');
	var flag=true;

	console.log(lis);

	var move = function(){
			star.next = (star.dangqian + 1 > 2) ? 0 : star.dangqian + 1;
			run.removeClass('ri ro zj zt');
			lis.removeClass('djb');
			run.eq(star.dangqian).addClass('zt').delay(1000).queue(function(){
				$(this).removeClass('zt').dequeue();
			});
			run.eq(star.next).addClass('ri');
			lis.eq(star.next).addClass('djb');
			star.dangqian=star.next;
		}


	var prev = function(){
			star.next = (star.dangqian - 1 < 0) ? 2 : star.dangqian - 1;
			run.removeClass('ri ro zj zt');
			lis.removeClass('djb');
			run.eq(star.dangqian).addClass('ro').delay(1000).queue(function(){
				$(this).removeClass('ro').dequeue();
			});
			run.eq(star.next).addClass('zj');
			lis.eq(star.next).addClass('djb');
			star.dangqian=star.next;
		}

	btnL.on('click',function(){
		prev();
	})
	btnR.on('click',function(){
		move();
	})
	var t;
	t=setInterval(move,5000);

	btnL.on('mouseover',function(){
		clearInterval(t);
	})

	btnL.on('mouseout',function(){
		setInterval(move,5000);
	})


	// run.on('animationend',function(){
	// 	$(this).removeClass('ri ro zj zt');
	// })


	dark.on('click',function(){
		var i=$(this).index();
		var qq=Math.abs(i-star.dangqian);
		if(i>star.dangqian){
			dotime(qq,move);
		}else if(i<star.dangqian){
			dotime(qq,prev);
		}
	})



	dotime=function(num,fn){
		var count = 1;
		if (num === 0) {
			return;
		}
		fn();
		var t=setInterval(function(){
			if (num === count) {
				clearInterval(t);
				return;
			}
			fn();
			count+=1;
		},300);
	}
})