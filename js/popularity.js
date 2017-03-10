popularity();
function popularity(){
	var oPopularity = document.getElementsByClassName('popularity')[0];
	var aImgBg = oPopularity.getElementsByClassName('img-bg');
	//使用js对背景图片进行初始化，这样可以省很多css代码
	for(var i=0; i<aImgBg.length; i++){
		aImgBg[i].style.background = 'url(img/popularity/' + (i+1) + '.jpg)';
	}
}
