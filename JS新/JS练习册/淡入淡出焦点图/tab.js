
window.onload=function()
{
	
	
	var liWidth=83;    //83是 li的宽带+边框+margin;
	var nowShowLi=2;   //小图片一次性显示几个？
	
	
	var oDiv=document.getElementById('product-img');	
	var oSmallUl=document.getElementById('smallul');	
	var oBigUl=document.getElementById('bigul');
	var aSmallLi=oSmallUl.getElementsByTagName('li');
	var oLeft=document.getElementById('left');
	var oRight=document.getElementById('right');
	oSmallUl.style.width=aSmallLi.length*liWidth+'px';
	var i=0;
	for(i=0; i<aSmallLi.length; i++)
	{
		aSmallLi[i].index=i;
		aSmallLi[i].onmouseover=function()
		{
			var oBigImg=oBigUl.getElementsByTagName('img')[0];	
			var oSmallImg=this.getElementsByTagName('img')[0];	
			oBigImg.src=oSmallImg.src;
		}	
	}
	oLeft.onclick=function()
	{
		if(oSmallUl.offsetLeft<=-((aSmallLi.length-nowShowLi)*liWidth))
		{
			startMove(oSmallUl,{left:0})	
		}
		else
		{
			startMove(oSmallUl,{left:(oSmallUl.offsetLeft-liWidth)})	
		}
	}
	
	oRight.onclick=function()
	{
		
		if(oSmallUl.offsetLeft>=0)
		{
			startMove(oSmallUl,{left:-((aSmallLi.length-nowShowLi)*liWidth)})	
		}
		
		else
		{
			startMove(oSmallUl,{left:(oSmallUl.offsetLeft+liWidth)})	
		}
	}
	
}
function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}

function startMove(obj, json, fn)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//这一次运动就结束了——所有的值都到达了
		for(var attr in json)
		{
			//1.取当前的值
			var iCur=0;
			
			if(attr=='opacity')
			{
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				iCur=parseInt(getStyle(obj, attr));
			}
			
			//2.算速度
			var iSpeed=(json[attr]-iCur)/8;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			//3.检测停止
			if(iCur!=json[attr])
			{
				bStop=false;
			}
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr]=iCur+iSpeed+'px';
			}
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
			
			if(fn)
			{
				fn();
			}
		}
	}, 30)
}
