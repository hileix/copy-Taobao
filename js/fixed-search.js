fixed_search();
function fixed_search(){
	var fixed_search = document.getElementsByClassName('fixed-search')[0];
	var aChoose = fixed_search.getElementsByClassName('choose');
	var aForm = fixed_search.getElementsByClassName('form');

	var aGoods = fixed_search.getElementsByClassName('goods');
	var aTmall = fixed_search.getElementsByClassName('Tmall');
	var aShop = fixed_search.getElementsByClassName('shop');
	//获取不同的搜索框
	var oBox_1 = fixed_search.getElementsByClassName('box-1')[0];
	var oBox_2 = fixed_search.getElementsByClassName('box-2')[0];
	var oBox_3 = fixed_search.getElementsByClassName('box-3')[0];
	var arrBox = [];
	// 将搜素框存入数组中
	arrBox.push(oBox_1);
	arrBox.push(oBox_2);
	arrBox.push(oBox_3);

	/*鼠标移入移出-显示隐藏*/
	for(var i=0; i<aChoose.length; i++){
		aChoose[i].index = i;
		aChoose[i].onmouseover = function(){
			aForm[this.index].style.overflow = 'visible';
		}
		aChoose[i].onmouseout = function(){
			aForm[this.index].style.overflow = 'hidden';
		}
	}
	/*单击切换搜索框*/
	for(var i=0; i<3; i++){
		aGoods[i].onclick = function(){
			for(var i=0; i<3; i++){
				arrBox[i].style.display = 'none';
			}
			arrBox[0].style.display = 'inline-block';
		}
	}
	for(var i=0; i<3; i++){
		aTmall[i].onclick = function(){
			for(var i=0; i<3; i++){
				arrBox[i].style.display = 'none';
			}
			arrBox[1].style.display = 'inline-block';
		}
	}
	for(var i=0; i<3; i++){
		aShop[i].onclick = function(){
			for(var i=0; i<3; i++){
				arrBox[i].style.display = 'none';
			}
			arrBox[2].style.display = 'inline-block';
		}
	}
	//使用事件监听，同一个事件绑定不同的事件处理函数（与fixed-nav）
	addEventListener("scroll",fn1,false);
	function fn1(){
		var scroll = document.documentElement.scrollTop || document.body.scrollTop;
		if(scroll >= 132){ 
			startMove(fixed_search,{
				top: 0
			},1.2)
		}else{ 
			startMove(fixed_search,{
				top: -49
			},1.2)
		}
	}
//	window.onscroll = function(){
//		var scroll = document.documentElement.scrollTop || document.body.scrollTop;
//		if(scroll >= 132){ 
//			startMove(fixed_search,{
//				top: 0
//			},1.2)
//		}else{ 
//			startMove(fixed_search,{
//				top: -49
//			},1.2)
//		}
//	}

}

