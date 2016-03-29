$(function(){
	var s="";
	for(var i=0;i<20;i++){
		for(var j=0;j<20;j++){
			var id=i+"_"+j;
			s+='<div id="'+id+'" class="block"></div>'
		}
	}
	$("#sence").html(s);

	var she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
	var data={'0_0':true,'0_1':true,'0_2':true};
	var huashe=function(){
		$.each(she,function(index,value){
			$("#"+value.x+"_"+value.y).css({backgroundSize:"29px 29px",backgroundImage:"url(./imgs/4.jpg)"});
			// $(she[0]).css({border:"1px solid #000",backgroundImage: "url(./imgs/w.png)",backgroundSize: "29px 29px"});
		})
	}
	
	huashe();

	var dropfood=function(){
		var x=Math.floor(Math.random()*20);
		var y=Math.floor(Math.random()*20);
		while(data[x+"_"+y]){
			x=Math.floor(Math.random()*20);
			y=Math.floor(Math.random()*20);
		}
		$("#"+x+"_"+y).css({width:"29px",height:"29px",backgroundImage:"url(./imgs/1.gif)",backgroundSize:"29px 29px"});
		return {x:x,y:y};
	}

			var score=0;
			var ss=$('#score').text("   "+score);
	var food=dropfood();

	// $("#0_0").css({backgroundImage: "url(./imgs/w.png)",backgroundSize: "29px 29px"});
			$("#0_2").css({backgroundSize:"29px 29px",backgroundImage:"url(./imgs/5.png)"});
	var fx=39;
	var move=function(){
		var oldtou=she[she.length-1];
			$("#"+oldtou.x+"_"+oldtou.y).css({backgroundSize:"29px 29px",backgroundImage:"url(./imgs/4.jpg)"});

		if(fx==39){
			var xintou={x:oldtou.x,y:oldtou.y+1};
			$("#"+xintou.x+"_"+xintou.y).css({backgroundSize:"29px 29px",backgroundImage:"url(./imgs/5.png)"});
		}
		if(fx==38){
			var xintou={x:oldtou.x-1,y:oldtou.y};
			$("#"+xintou.x+"_"+xintou.y).css({backgroundSize:"29px 29px",backgroundImage:"url(./imgs/5s.png)"});
		}
		if(fx==40){
			var xintou={x:oldtou.x+1,y:oldtou.y};
			$("#"+xintou.x+"_"+xintou.y).css({backgroundSize:"29px 29px",backgroundImage:"url(./imgs/5x.png)"});
		}
		if(fx==37){
			var xintou={x:oldtou.x,y:oldtou.y-1};
			$("#"+xintou.x+"_"+xintou.y).css({backgroundSize:"29px 29px",backgroundImage:"url(./imgs/5z.png)"});
		}
		if(xintou.x<0||xintou.y<0||xintou.x>19||xintou.y>19||data[xintou.x+"_"+xintou.y]){
			
			clearInterval(time);
			var ab=confirm("再试一次？");

			if(ab){
				location.reload();

			}
			else{
				return false;
			}
			return;
		}
		if((xintou.x==food.x)&&(xintou.y==food.y)){
			food=dropfood();			
				score+=10;
				ss=$('#score').text(" "+score);
		}
		else{
			var weiba=she.shift();


			
			delete data[weiba.x+"_"+weiba.y];
			// $("#"+weiba.x+"_"+weiba.y).css({backgroundImage: "url(./imgs/w.png)",backgroundSize: "29px 29px"});
			$("#"+weiba.x+"_"+weiba.y).css({backgroundImage: "url(./imgs/2.jpg)",backgroundSize: "29px 29px"});
			
			// $(she[0]).css({backgroundImage: "url(./imgs/2.jpg)",backgroundSize: "29px 29px"});
		}
		she.push(xintou);
		
		data[xintou.x+"_"+xintou.y]=true;
	}
	var time;
	$("#start").click(function(){
		 time=setInterval(move,200);
		this.style.display="none";
	})
	$(document).keydown(function(e){
		if(Math.abs(fx-e.keyCode)==2){
			return;
		}
		if(!(e.keyCode>=37&&e.keyCode<=40)){
			return;
		}
		fx=e.keyCode;
	})

})