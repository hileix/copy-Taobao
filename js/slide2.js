slide2();
function slide2(){
	// 核心代码在函数changeLeftAndRight里面；自动切换、圆点切换，都是从那些代码改变而来（最原来在html+css2实战课里面12集那里写无缝切换）
	var oSlide = document.getElementsByClassName('slide2')[0];
	var oTitle = document.getElementsByClassName('title')[0];
	var oImg = oSlide.getElementsByClassName('img')[0];
	var arrLi = oImg.getElementsByTagName('li');
	var arr = [];
	var num = 0;
	var iNow = 0;
	var timer = null;
	var bgNum = 1;
	var flag = 1;
	// 获取两个左右两个按钮
	var oBtnL = oSlide.getElementsByClassName('btnL')[0];
	var oBtnR = oSlide.getElementsByClassName('btnR')[0];
	// 获取圆点按钮
	var oBtn = oSlide.getElementsByClassName('btn')[0];
	var arrBtn = oBtn.getElementsByTagName('li');
	var oText = oSlide.getElementsByClassName('num')[0];
	var oH2 = oTitle.getElementsByTagName('h2')[0];
	// bgChange();
	// function bgChange(){
	// 	for(var i=0; i<1000; i++){
	// 		setTimeout(function(){
	// 			oH2.style.display = 'url(img/slide2/'+ bgNum + '.png) no-repeat';
	// 			if(flag){//正序
	// 				bgNum ++;
	// 				if(bgNum==6){
	// 					flag = 0
	// 				}
	// 			}else{//逆序
	// 				bgNum --;
	// 				if(bgNum==0){
	// 					flag  = 1;
	// 				}
	// 			}
	// 		},30)
	// 	}		
	// }
	oImg.innerHTML += oImg.innerHTML;
	oImg.style.width = arrLi.length*arrLi[0].offsetWidth + 'px';

	changeBtnLAndRightCss();
	// 鼠标悬停在图片上时，左右按钮样式的变化
	function changeBtnLAndRightCss(){
		// 鼠标悬停在图片上时，左右两个按钮显示出来的
		oImg.onmouseover = function(){
			clearInterval(timer);
			oBtnL.style.display = 'block';
			oBtnR.style.display = 'block';
			oBtnL.style.opacity = '0.3';
			oBtnR.style.opacity = '0.3';
		}
		// 鼠标没有悬停在图片上时，左右两个按钮隐藏
		oImg.onmouseout = function(){
			autoPlay();
			oBtnL.style.display = 'none';
			oBtnR.style.display = 'none';
		}
		//鼠标悬停在左右的按钮上时，按钮的透明度发生变化
		oBtnL.onmouseover = function(){
			clearInterval(timer);
			oBtnL.style.opacity = '0.8';
			oBtnL.style.display = 'block';
			oBtnR.style.display = 'block';
		}
		oBtnR.onmouseover = function(){
			clearInterval(timer);
			oBtnR.style.opacity = '0.8';
			oBtnL.style.display = 'block';
			oBtnR.style.display = 'block';
		}
		oBtnL.onmouseout = function(){
			autoPlay();
			oBtnL.style.display = 'none';
			oBtnR.style.display = 'none';
		}
		oBtnR.onmouseout = function(){
			autoPlay();
			oBtnL.style.display = 'none';
			oBtnR.style.display = 'none';
		}
		oBtn.onmouseover = function(){
			clearInterval(timer);
			oBtnL.style.display = 'block';
			oBtnR.style.display = 'block';
			oBtnL.style.opacity = '0.3';
			oBtnR.style.opacity = '0.3';
		}
	}
	changeLeftAndRight();// 左右无缝切换
	function changeLeftAndRight(){
		// 当按下左、右按钮时
		
		oBtnL.onclick = function(){
			num --;
			if(num < 0){	//用于改变圆点按钮的className值
				num = 5;
			}
			// ----------
			if(iNow == 0){
				iNow = arrLi.length/2;
				oImg.style.left = -oImg.offsetWidth/2 + 'px';
			}
			move(oImg,-iNow*arrLi[0].offsetWidth,-(iNow-1)*arrLi[0].offsetWidth);
			iNow --;
			// ----------
			for(var i=0; i<arrBtn.length; i++){
				arrBtn[i].className = '';
			}
			arrBtn[num].className = 'active';
			oText.innerHTML = num+1;
		};
		oBtnR.onclick = function(){	
			num ++;
			if(num > 5){	//用于改变圆点按钮的className值
				num =0;
			}
			// ----------
			if(iNow == arrLi.length/2){
				iNow = 0;
				oImg.style.left = 0;
			}
			move(oImg,-iNow*arrLi[0].offsetWidth,-(iNow+1)*arrLi[0].offsetWidth);
			iNow ++;
			// ----------
			for(var i=0; i<arrBtn.length; i++){
				arrBtn[i].className = '';
			}
			arrBtn[num].className = 'active';
			oText.innerHTML = num+1;
		};
	}
	autoPlay();// 自动播放
	function autoPlay(){
		clearInterval(timer);	
		timer = setInterval(function(){
			num ++;
			if(num > 5){	//用于改变圆点按钮的className值
				num =0;
			}
			// ----------
			if(iNow == arrLi.length/2){
				iNow = 0;
				oImg.style.left = 0;
			}
			move(oImg,-iNow*arrLi[0].offsetWidth,-(iNow+1)*arrLi[0].offsetWidth);
			iNow ++;
			// ----------
			for(var i=0; i<arrBtn.length; i++){
				arrBtn[i].className = '';
			}
			arrBtn[num].className = 'active';
			oText.innerHTML = num+1;
		},3000);		
	}
	function move(obj,old,now){	// 改变元素left值的运动函数
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){	
			var iSpeed = (now - old)/5;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			if(now == old){
				clearInterval(obj.timer);
			}else{
				old += iSpeed;
				obj.style.left = old + 'px';
			}	
		},15);
	}
	dotChange();// 点击圆点按钮切换图片
	function dotChange(){
		for(var i=0; i<arrBtn.length; i++){
		arrBtn[i].index = i;
		arrBtn[i].onclick = function(){
			if(this.index > num){
				var numBtn = num + 1; // 记录num-1的值
				num += (this.index-num);
				if(num > 5){	//用于改变圆点按钮的className值
					num =0;
				}
				// ----------
				if(iNow == arrLi.length/2){
					iNow = 0;
					oImg.style.left = 0;
				}
				move(oImg,-iNow*arrLi[0].offsetWidth,-(iNow+(this.index-numBtn+1))*arrLi[0].offsetWidth);
				iNow += (this.index-numBtn+1);
				// ----------
				for(var i=0; i<arrBtn.length; i++){
					arrBtn[i].className = '';
				}
				arrBtn[num].className = 'active';
			}
			if(this.index < num){
				var numBtn = num - 1;// 记录num-1的值
				num -= (numBtn-this.index+1);
				if(num < 0){	//用于改变圆点按钮的className值
					num = 5;
				}
				// ----------
				if(iNow == 0){
					iNow = arrLi.length/2;
					oImg.style.left = -oImg.offsetWidth/2 + 'px';
				}
				move(oImg,-iNow*arrLi[0].offsetWidth,-(iNow-1-(numBtn-this.index))*arrLi[0].offsetWidth);
				iNow -= (numBtn-this.index+1);
				// ----------
				for(var i=0; i<arrBtn.length; i++){
					arrBtn[i].className = '';
				}
				arrBtn[num].className = 'active';
			}	
			oText.innerHTML = num+1;			
		}
	}
	}
}
