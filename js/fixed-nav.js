fixed_nav();
function fixed_nav(){
	var fixed_nav = document.getElementsByClassName('fixed-nav')[0];
	var oTop = fixed_nav.getElementsByClassName('top')[0];
	var timer = null;
	//滚动事件
	window.onscroll = function(){
		var scroll = document.documentElement.scrollTop || document.body.scrollTop;
		//顶部按钮的出现与隐藏
		if(scroll >= 690){ 
			oTop.style.display         = "inline-block";
			fixed_nav.style.background = '#fff';
		}else{ 
			oTop.style.display = "none";
		}
		
		if(scroll >= 464){
			fixed_nav.style.position = 'fixed';
			fixed_nav.style.top      = '28px';
		}else{ 
			fixed_nav.style.position = 'absolute';
			fixed_nav.style.top      = '489px';
		}
	}
	//返回顶部
	var oFixed_nav = document.getElementsByClassName('fixed-nav')[0];
	returnTop();
	function returnTop(){
		var oTop = oFixed_nav.getElementsByClassName('top')[0];
		var iSpeed = 0;
		oTop.onclick = function(){
			clearInterval(timer);
			timer = setInterval(function(){
				var scroll = document.documentElement.scrollTop || document.body.scrollTop;
				iSpeed = scroll / 6;
				document.documentElement.scrollTop -= iSpeed;
				document.body.scrollTop -= iSpeed;
				var scroll = document.documentElement.scrollTop || document.body.scrollTop;
				if(scroll == 0){
					clearInterval(timer);
				}
			},13)
		}
	}
	
	//返回我常逛的
	returnOftenVisit();
	function returnOftenVisit(){
		var oOften = oFixed_nav.getElementsByClassName('often')[0];
		var oMy_often_visit = document.getElementsByClassName('my-often-visit')[0];
	
		var my_often_visit_PosTop = getPos(oMy_often_visit).top;
		var iTarget = my_often_visit_PosTop - 56;
		oOften.onclick = function(){
			clearInterval(timer);
			var iSpeed = 0;
			var iCur = 0;
			timer = setInterval(function(){
				iCur = document.documentElement.scrollTop || document.body.scrollTop;
				iSpeed = (iTarget - iCur)/6;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				document.documentElement.scrollTop += iSpeed;
				document.body.scrollTop += iSpeed;
				var scroll = document.documentElement.scrollTop || document.body.scrollTop;
				if(scroll == iTarget){
					clearInterval(timer);
				}
			},13);
		}
	}
	
	//返回时尚爆料王
	returnFashion();
	function returnFashion(){
		var oFashion = oFixed_nav.getElementsByClassName('fashion')[0];
		var oiFashion = document.getElementById('ifashtion');
		var oiFashion_PosTop = getPos(oiFashion).top;
		var iTarget = oiFashion_PosTop - 56;
		oFashion.onclick = function(){
			clearInterval(timer);
			var iSpeed = 0;
			var iCur = 0;
			timer = setInterval(function(){
				iCur = document.documentElement.scrollTop || document.body.scrollTop;
				iSpeed = (iTarget - iCur)/6;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				document.documentElement.scrollTop += iSpeed;
				document.body.scrollTop += iSpeed;
				var scroll = document.documentElement.scrollTop || document.body.scrollTop;
				if(scroll == iTarget){
					clearInterval(timer);
				}
			},13);
		}
	}

	//返回品质生活家
	returnQuality();
	function returnQuality(){
		var oQuality = oFixed_nav.getElementsByClassName('quality')[0];
		var oiQuality = document.getElementById('quality');
		var oiQuality_PosTop = getPos(oiQuality).top;
		var iTarget = oiQuality_PosTop - 56;
		oQuality.onclick = function(){
			clearInterval(timer);
			var iSpeed = 0;
			var iCur = 0;
			timer = setInterval(function(){
				iCur = document.documentElement.scrollTop || document.body.scrollTop;
				iSpeed = (iTarget - iCur)/6;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				document.documentElement.scrollTop += iSpeed;
				document.body.scrollTop += iSpeed;
				var scroll = document.documentElement.scrollTop || document.body.scrollTop;
				if(scroll == iTarget){
					clearInterval(timer);
				}
			},13);
		}
	}
	//返回特色玩味控
	returnFeature();
	function returnFeature(){
		var oFeature = oFixed_nav.getElementsByClassName('feature')[0];
		var oiFeature = document.getElementById('feature');
		var oiFeature_PosTop = getPos(oiFeature).top;
		var iTarget = oiFeature_PosTop - 56;
		oFeature.onclick = function(){
			clearInterval(timer);
			var iSpeed = 0;
			var iCur = 0;
			timer = setInterval(function(){
				iCur = document.documentElement.scrollTop || document.body.scrollTop;
				iSpeed = (iTarget - iCur)/6;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				document.documentElement.scrollTop += iSpeed;
				document.body.scrollTop += iSpeed;
				var scroll = document.documentElement.scrollTop || document.body.scrollTop;
				if(scroll == iTarget){
					clearInterval(timer);
				}
			},13);
		}
	}
	//返回实惠专业户
	returnBenefits();
	function returnBenefits(){
		var oBenefits = oFixed_nav.getElementsByClassName('benefits')[0];
		var oiBenefits = document.getElementById('benefits');
		var oiBenefits_PosTop = getPos(oiBenefits).top;
		var iTarget = oiBenefits_PosTop - 56;
		oBenefits.onclick = function(){
			clearInterval(timer);
			var iSpeed = 0;
			var iCur = 0;
			timer = setInterval(function(){
				iCur = document.documentElement.scrollTop || document.body.scrollTop;
				iSpeed = (iTarget - iCur)/6;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				document.documentElement.scrollTop += iSpeed;
				document.body.scrollTop += iSpeed;
				var scroll = document.documentElement.scrollTop || document.body.scrollTop;
				if(scroll == iTarget){
					clearInterval(timer);
				}
			},13);
		}
	}
	//返回猜你喜欢
	returnGuessYouLike();
	function returnGuessYouLike(){
		var oGuess_like = oFixed_nav.getElementsByClassName('guess-like')[0];
		var oiGuessYouLike = document.getElementById('guessYouLike');
		var oiGuessYouLike_PosTop = getPos(oiGuessYouLike).top;
		var iTarget = oiGuessYouLike_PosTop - 56;
		oGuess_like.onclick = function(){
			clearInterval(timer);
			var iSpeed = 0;
			var iCur = 0;
			timer = setInterval(function(){
				iCur = document.documentElement.scrollTop || document.body.scrollTop;
				iSpeed = (iTarget - iCur)/6;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				document.documentElement.scrollTop += iSpeed;
				document.body.scrollTop += iSpeed;
				var scroll = document.documentElement.scrollTop || document.body.scrollTop;
				if(scroll == iTarget){
					clearInterval(timer);
				}
			},13);
		}
	}
	
	//计算出元素到页面顶端的距离的函数
	function getPos(obj){
		var pos = { left: 0,top: 0 };//引入json
		while(obj){
			pos.left += obj.offsetLeft;
			pos.top  += obj.offsetTop;
			obj      = obj.offsetParent;
		}
		return pos;
	}
}


			

