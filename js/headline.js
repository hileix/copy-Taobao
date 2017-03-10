headline();
function headline(){
	var oHeadline = document.getElementById('headline');
	var oWrap = oHeadline.getElementsByClassName('wrap')[0];
	var oContent = oHeadline.getElementsByClassName('content')[0];
	var num = 0;
	var timer = null;
	var flag = true;
	timer = setInterval(function(){
		startMove(oWrap,{ top: -num*60 },7,13);
		if(flag){//正序
			if(num < 2){
				num ++;
			}else{
				num --;
				flag = false;
			}
		}else{//反序
			if(num>0){
				num --;
			}else{
				num ++;
				flag = true;
			}
		}
	},2000)
	oContent.onmouseover = function(){
		clearInterval(timer);
	}
	oContent.onmouseout = function(){
		timer = setInterval(function(){
			startMove(oWrap,{ top: -num*60 },7,13);
			if(flag){//正序
				if(num < 2){
					num ++;
				}else{
					num --;
					flag = false;
				}
			}else{//反序
				if(num>0){
					num --;
				}else{
					num ++;
					flag = true;
				}
			}
		},2000)
	}
}