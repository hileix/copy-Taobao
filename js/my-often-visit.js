my_often_visit();
function my_often_visit(){
	var oSection = document.getElementsByClassName('section')[0];
	var oA_5 = document.getElementsByClassName('a-5')[0];
	var oWrapMove = oSection.getElementsByClassName('wrap-move')[0];
	oA_5.onmouseover = function(){
		startMove(oWrapMove,{
			top: 53
		},4,13);
	}
	oA_5.onmouseout = function(){
		startMove(oWrapMove,{
			top: 116
		},4,13);
	}
}
