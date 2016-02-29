(function(){
	//声明一个参数储存定时器
	var timer=null;
	//获取到图片所在的div
	var oDiv=document.getElementById('roll');
	var oUl=oDiv.getElementsByTagName('ul')[0];			
	var oLi=oUl.getElementsByTagName('li');
	//复制图片
	oUl.innerHTML+=oUl.innerHTML;
	oUl.style.width=oLi[0].offsetWidth*oLi.length+'px';
	function run(){
				oUl.style.left=oUl.offsetLeft-10+'px';
      			//如果图片列已移动一半长度，将其拉回
				if(oUl.offsetLeft<-oUl.offsetWidth/2){
					oUl.style.left='-40px';
				}
				//或者反向运动时左边图片即将移动出，将其拉回
				else if(oUl.offsetLeft>0){
					oUl.style.Left=oUl.offsetWidth/2;
				}
			}
	timer=setInterval(run,30);
	//鼠标移动到图片上的时候，清空定时器，暂停移动
	oUl.onmouseover=function(){
		clearInterval(timer);
	};
	//鼠标离开图片，开启定时器，图片继续移动
	oUl.onmouseout=function(){
		timer=setInterval(run,30);
	};
})()