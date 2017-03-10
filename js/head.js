head();
function head(){
	var oHead = document.getElementById('head');
	var aHot = oHead.getElementsByClassName('hot');
	var aN = oHead.getElementsByClassName('n');
	var oDaoHang = oHead.getElementsByClassName('navigation')[0];
	var oUl_1 = oHead.getElementsByClassName('ul-1')[0];

	var arr = [];
	var timer = null;
	for(var i=0; i<aHot.length; i++){
		arr.push(aHot[i]);
	}
	for(var i=0; i<aN.length; i++){
		arr.push(aN[i]);
	}
	// 当鼠标移至导航元素上时，背景图片开始跳动
	oDaoHang.onmouseover = jump();
	// oUl_1.onmouseover = jump();
	// oDaoHang.onmouseout = function(){
	// 	clearInterval(timer);
	// }
	function jump(){
		// 通过设置flag,再根据flag的值来进行背景图片位置的切换，从而时背景图片实现上下跳动的动态效果
		var flag = true;
		clearInterval(timer);
		timer = setInterval(function(){
			if(flag){
				for(var i=0; i<aHot.length; i++){
					arr[i].style.background = 'url(img/head/hot.png) no-repeat right 2px'
				}
				for(var i=aHot.length-1; i<arr.length; i++){
					arr[i].style.background = 'url(img/head/n.png) no-repeat right 2px'
				}
				flag = false;
			}else{
				for(var i=0; i<aHot.length; i++){
					arr[i].style.background = 'url(img/head/hot.png) no-repeat right top'
				}
				for(var i=aHot.length-1; i<arr.length; i++){
					arr[i].style.background = 'url(img/head/n.png) no-repeat right top'
				}
				flag = true;
			}
		},500);
	}
}
