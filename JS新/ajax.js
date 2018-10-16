// JavaScript Document

function ajax(url,fnSu,fn)
{
	//1、创建ajax，判断是否是IE6
	var oAjax=null;
	if(window.XMLHttpRequest)
	{
		oAjax=new XMLHttpRequest();	
	}	
	else
	{
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");	
	}
	
	//2、连接服务器
	oAjax.open('GET',url,true)
	
	//3、发送请求
	oAjax.send();
	
	//4、接收返回
	
	oAjax.onreadystatechange=function()
	{
		if(oAjax.readyState==4)
		{
			if(oAjax.status==200)
			{
				fnSu(oAjax.responseText)
			}	
			else
			{
				if(fn)
				{
					fn();
				}	
			}
		}	
	}	
}