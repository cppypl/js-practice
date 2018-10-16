// JavaScript Document

function myAddEvent(obj,sEvent,fn)
{
	if(obj.attachEvent)
	{
		obj.attachEvent('on'+sEvent,fn);	
	}
	else
	{
		obj.addEventListener(sEvent,fn,false);	
	}
}
//选项卡
function tab(obj,obj1,obj2){
	var aLi=document.getElementById(obj).getElementsByTagName(obj2);
	var aLi1=document.getElementById(obj1).getElementsByTagName(obj2);
	
	for(var i=0; i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			for(var j=0;j<aLi1.length;j++){
				aLi1[j].style.display='none';
				aLi[j].className='';	
			}
			this.className='select_li';
			aLi1[this.index].style.display='block';	
			
		}	
	}
}
tab('ul','intro','li');


//滚动条
function Fn_drag(obj,obj1,obj2,obj3)
{
	
	var oDiv=document.getElementById(obj);	
	var oDiv1=document.getElementById(obj1);	
	var oDiv2=document.getElementById(obj2);	
	var oCon=document.getElementById(obj3);	
	
	function wheel(ev)
	{
		var oEvent=ev||event;
		var bDown=true;
		bDown=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
		
		if(bDown)
		{
			setTop(oDiv1.offsetTop+10)
			
				
		}	
		else 
		{
			setTop(oDiv1.offsetTop-10)
		
		}
		if(oEvent.preventDefault)
		{
			oEvent.preventDefault();
		}
		return false;
	}	
	myAddEvent(oDiv,'mousewheel',wheel)
	myAddEvent(oDiv,'DOMMouseScroll',wheel)
	myAddEvent(oDiv2,'mousewheel',wheel)
	myAddEvent(oDiv2,'DOMMouseScroll',wheel)
	
	oDiv1.onmousedown=function(ev)
	{
		var oEvent=ev||event;
		var disY=oEvent.clientY-oDiv1.offsetTop;
		document.onmousemove=function(ev)
		{
			var oEvent=ev||event;
			var t=oEvent.clientY-disY;
			setTop(t)
		}
		
		document.onmouseup=function()
		{
			document.onmousemove=null;
			document.onmouseup=null;	
		}
		return false;
		
	}
	function setTop(t)
	{
		
			if(t<0)
			{
				t=0	
			}
			else if(t>oDiv.offsetHeight-oDiv1.offsetHeight)
			{
				t=oDiv.offsetHeight-oDiv1.offsetHeight;
			}
			var bili=t/(oDiv.offsetHeight-oDiv1.offsetHeight);
			var top1=parseInt(-(oCon.offsetHeight-oDiv2.offsetHeight)*bili);
			oCon.style.top=top1+'px';
			//document.title=top1;
			//startMove(oCon,{top:top1})
			oDiv1.style.top=t+'px';	
	}
	
}
Fn_drag('div1','div2','div3','con')
Fn_drag('div1_1','div2_1','div3_1','con_1')
Fn_drag('div1_2','div2_2','div3_2','con_2')
Fn_drag('div1_3','div2_3','div3_3','con_3')
Fn_drag('div1_4','div2_4','div3_4','con_4')
Fn_drag('div1_5','div2_5','div3_5','con_5')
