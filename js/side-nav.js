side_nav();
function side_nav(){
	var oMarket = document.getElementById('market');
	var arrLi = oMarket.getElementsByClassName('_li');
	var arrRight = oMarket.getElementsByClassName('right');
	//鼠标移入，右边的菜单显示出来
	for(var i=0; i<arrLi.length; i++){
		arrLi[i].index = i;
		arrLi[i].onmouseover = function(){
			arrRight[this.index].style.display = 'block';
			startMove(arrRight[this.index],{
				opacity:100
			},10);
		}
		arrLi[i].onmouseout = function(){
			startMove(arrRight[this.index],{
				opacity:0
			},9);
			arrRight[this.index].style.display = 'none';
		}
	}
}
