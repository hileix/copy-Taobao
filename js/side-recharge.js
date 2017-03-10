side_recharge();
function side_recharge(){
	var oRecharge = document.getElementsByClassName('recharge')[0];
	var aLi_1 = oRecharge.getElementsByClassName('li-1');
	var aLi_2 = oRecharge.getElementsByClassName('li-2');
	for(var i=0; i<aLi_1.length; i++){
		aLi_1[i].onmouseover = function(){
			for(var i=0; i<aLi_1.length; i++){
				addClass(aLi_1[i],'bottomStyle');
			}
		}
	} 
	// 一（鼠标移至充话费、充流量、充固话、冲宽带上时，切换不同功能的不同界面）
	// 充话费
	var oUl_2_1 = oRecharge.getElementsByClassName('ul-2-1')[0];
	var aLi_2_1 = oUl_2_1.getElementsByClassName('li-2');
	// 找到li-2下面的form
	var aform_1 = [];
	for(var i=0; i<aLi_2_1.length; i++){
		aform_1[i] = aLi_2_1[i].getElementsByTagName('form')[0];
	}
	for(var i=0; i<aform_1.length; i++){
		aLi_2_1[i].index = i;
		aLi_2_1[i].onmouseover = function(){
			for(var i=0; i< aform_1.length; i++){
				aform_1[i].style.display = 'none';
			}
			aform_1[this.index].style.display = 'block';

			for(var i=0; i< aLi_2_1.length; i++ ){
				removeClass(aLi_2_1[i],'act');
			}
			addClass(this,'act');
		}
	}
	// 游戏
	var oUl_2_2 = oRecharge.getElementsByClassName('ul-2-2')[0];
	var aLi_2_2 = oUl_2_2.getElementsByClassName('li-2');
	// 找到li-2下面的form、games
	var aform_2 = [];
	for(var i=0; i<aLi_2_2.length-1; i++){
		aform_2[i] = aLi_2_2[i].getElementsByTagName('form')[0];
	}
	aform_2.push(oUl_2_2.getElementsByClassName('games')[0]);
	for(var i=0; i<aform_2.length; i++){
		aLi_2_2[i].index = i;
		aLi_2_2[i].onmouseover = function(){
			for(var i=0; i< aform_2.length; i++){
				aform_2[i].style.display = 'none';
			}
			aform_2[this.index].style.display = 'block';

			for(var i=0; i< aLi_2_2.length; i++ ){
				removeClass(aLi_2_2[i],'act');
			}
			addClass(this,'act');
		}
	}
	// 旅行
	var oUl_2_3 = oRecharge.getElementsByClassName('ul-2-3')[0];
	var aLi_2_3 = oUl_2_3.getElementsByClassName('li-2');
	// 找到li-2下面的form
	var aform_3 = [];
	for(var i=0; i<aLi_2_3.length; i++){
		aform_3[i] = aLi_2_3[i].getElementsByTagName('form')[0];
	}
	for(var i=0; i<aform_3.length; i++){
		aLi_2_3[i].index = i;
		aLi_2_3[i].onmouseover = function(){
			for(var i=0; i< aform_3.length; i++){
				aform_3[i].style.display = 'none';
			}
			aform_3[this.index].style.display = 'block';

			for(var i=0; i< aLi_2_3.length; i++ ){
				removeClass(aLi_2_3[i],'act');
			}
			addClass(this,'act');
		}
	}
	// 保险
	var oUl_2_4 = oRecharge.getElementsByClassName('ul-2-4')[0];
	var aLi_2_4 = oUl_2_4.getElementsByClassName('li-2');
	// 找到li-2下面的form
	var aform_4 = [];
	for(var i=0; i<aLi_2_4.length; i++){
		aform_4[i] = aLi_2_4[i].getElementsByTagName('form')[0];
	}
	for(var i=0; i<aform_4.length; i++){
		aLi_2_4[i].index = i;
		aLi_2_4[i].onmouseover = function(){
			for(var i=0; i< aform_4.length; i++){
				aform_4[i].style.display = 'none';
			}
			aform_4[this.index].style.display = 'block';

			for(var i=0; i< aLi_2_4.length; i++ ){
				removeClass(aLi_2_4[i],'act');
			}
			addClass(this,'act');
		}
	}
	// 二（鼠标移至充话费、游戏、旅行、保险上时，下面的ul-2-1、ul-2-2、ul-2-3、ul-2-4display变为block）
	var oUlShow = oRecharge.getElementsByClassName('ul-show');
	var aText =oRecharge.getElementsByClassName('text');
	for(var i=0; i<aLi_1.length; i++){
		aLi_1[i].index = i;
		aLi_1[i].onmouseover = function(){
			for(var i=0; i<oUlShow.length; i++){
				oUlShow[i].style.display = 'none';
			}
			oUlShow[this.index].style.display = 'block';
			for(var i=0; i<aLi_1.length; i++){
				addClass(aLi_1[i],'bottomStyle');
				removeClass(aLi_1[i],'borderThree');
				removeClass(aText[i],'fun1Color');
			}
			removeClass(this,'bottomStyle');
			addClass(this,'borderThree');
			addClass(aText[this.index],'fun1Color');
		}
	}
	// 三 （按关闭按钮时，关闭充话费、游戏、旅行、保险的功能）
	var aClose = oRecharge.getElementsByClassName('close');
	for(var i=0; i<aClose.length; i++){
		aClose[i].index = i;
		aClose[i].onclick = function(){
			oUlShow[this.index].style.display = 'none';
			removeClass(aLi_1[this.index],'borderThree');
			removeClass(aText[this.index],'fun1Color');
			for(var i=0; i<aLi_1.length; i++){
				removeClass(aLi_1[i],'bottomStyle');
			}
		}
	}

	//添加class的函数addClass()
	function addClass(obj,newClass){
		var oldClass = obj.className;
		//当元素的class为空的时候
		if(oldClass == ""){
			obj.className = newClass;
			return false;
		}
		//当元素的class有的时候
		var arr = oldClass.split(" ");//将字符串变为数组，其中字符串是以空格隔开
		for(var i=0 ;i<arr.length;i++){
			if(newClass == arr[i]){
				return false;
			}
		}
		arr.push(newClass);
		obj.className = arr.join(" ");//join将数组变为字符串，每个元素以空格隔开
	}
	//删除class的函数removeClass
	function removeClass(obj,old){
		var oldClass = obj.className;
		var arr = oldClass.split(" ");//split将字符串变为数组，其中字符串是以空格隔开
		for(var i=0;i<arr.length;i++){
			if(arr[i] == old){
				arr.splice(i,1);
				break;
			}
		}	
		obj.className = arr.join(" ");//join将数组变为字符串，每个元素以空格隔开
	}
}
