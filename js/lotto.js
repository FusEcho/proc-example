var data=['IPhone5','Ipad','acer','佳能照相机','三星笔记本','太阳镜','充电宝','谢谢惠顾！','小米4','50元手机充值卡'];
    timer=null;
    flag=0;
window.onload=function(){
	var play=document.getElementById('play');
	var end=document.getElementById('end');
	//开始抽奖
	play.onclick=playFun;
	//结束抽奖
	end.onclick=endFun;
	//键盘事件
	document.onkeyup=function(event){
		event=event||window.event;
		console.log(event.keyCode);
		if(event.keyCode==13){
			if(flag==0)
			{
				playFun();
				flag=1;
			}else{
				endFun();
				flag=0;
			}
		}
	}
}
function playFun(){
	var title=document.getElementById('title');
	clearInterval(timer);
	timer=setInterval(function(){
		var random=Math.floor(Math.random()*data.length);
		//console.log(random);
		title.innerHTML=data[random];
	},50);     //call the function every 50ms
	play.style.background='#999';
}
function endFun(){
	clearInterval(timer);
	play.style.background='green';
}