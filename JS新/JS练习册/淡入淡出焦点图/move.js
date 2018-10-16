// JavaScript Document
function getStyle(obj,attr)
{
	if(obj.currentStyle)//如果是IE（IE只认识currentStyle）
	{
		return obj.currentStyle[attr];	
	}else//如果是FF（FF只认识getComputedStyle）
	{
		return getComputedStyle(obj,false)[attr]	
	}
}
function startMove(obj,json,fn)
{
	clearInterval(obj.timer)
	obj.timer=setInterval(function(){
		var bStop=true;
		for(attr in json)
		{
			//1、取当前的值
			if(attr=='opacity')
			{
				var iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
			}
			else
			{
				var iCur=parseInt(getStyle(obj,attr));
			}
			//2、算速度
			var iSpend=(json[attr]-iCur)/8;	
			iSpend=iSpend>0?Math.ceil(iSpend):Math.floor(iSpend);
			//3、检查停止与否	
			if(iCur!=json[attr])
			{
				bStop=false;	
			}
				if(attr=='opacity')
				{
					obj.style.filter='alpha(opacity='+(iCur+iSpend)+')'
					obj.style.opacity=(iCur+iSpend)/100;
				}
				else
				{
					obj.style[attr]=iCur+iSpend+'px'
				}
		}
		if(bStop)
		{
			clearInterval(obj.timer)	
				if(fn)
				{
					fn();
				}		
		}
	},30)	
}