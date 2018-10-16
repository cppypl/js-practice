// JavaScript Document
/*** get style begin**/
function getStyle(obj,atrr)
{
	if(obj.currentStyle){
		return obj.currentStyle[atrr];
	}else{
		return getComputedStyle(obj,false)[atrr];
	}
}
/*** get style end**/

/****show move begin***/
function showMove(obj,json,fn){
	clearInterval(obj.timer);
	/****** setInterval begin*******/
	
	obj.timer=setInterval(function(){
		var flag=true;
		for(var atrr in json)
		{
			if(atrr=="opacity"){
				var iCur=parseInt(parseFloat(getStyle(obj,atrr))*100);
			}else{
				var iCur=parseInt(getStyle(obj,atrr));
			}
			var speed=(json[atrr]-iCur)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(iCur!=json[atrr])
			{
				flag=false;
			}
			if(atrr=="opacity"){
				obj.style.opacity=(iCur+speed)/100;
				obj.style.filter="alpha(opacity="+(iCur+speed)+")"
			}else{
				obj.style[atrr]=iCur+speed+"px";
			}
			
		}
			if(flag)
			{
				clearInterval(obj.timer);
				if(fn)
				{
					fn();
				}else{
					return false;
				}
			}
		},30);
		/****** setInterval end*******/
	
}
/****show move end***/


/**** getByClass begin****/
function getByClass(obj,className)
{
	var result=[];
	var oObj=obj.getElementsByTagName("*");
	for(var i=0;i<oObj.length;i++)
	{
		if(oObj[i].className==className)
		{
			result.push(oObj[i]);
		}
	}
	return result;
	
}
/**** getByClass end****/