search();
function search(){
	var oSearch = document.getElementsByClassName('search')[0];
	var oGoods = oSearch.getElementsByClassName('goods')[0];
	var oTmall = oSearch.getElementsByClassName('tmall')[0];
	var oStore = oSearch.getElementsByClassName('store')[0];

	var oBox_1 = oSearch.getElementsByClassName('box-1')[0];
	var oBox_2 = oSearch.getElementsByClassName('box-2')[0];
	var oBox_3 = oSearch.getElementsByClassName('box-3')[0];

	var val = null;//用于存储上次输入框里面的文字
	//获取三个输入框
	var aText = oSearch.getElementsByClassName('text');
	//设输入框一打开页面就获得焦点
	aText[0].focus();
	//切换输入框
	oGoods.onclick = function(){
		removeClass(oTmall,'active');
		removeClass(oTmall,'active-2');
		removeClass(oStore,'active');
		addClass(oGoods,'active');
		oBox_1.style.display = 'block';
		oBox_2.style.display = 'none';
		oBox_3.style.display = 'none';
		aText[0].focus();
		aText[0].value = val;
		if(aText[0].value != ''){
			aText[0].style.background = '#fff';
		}else{
			aText[0].style.background = 'url(img/search/1.png) no-repeat 13px 11px';
		}
	}
	oTmall.onclick = function(){
		removeClass(oGoods,'active');
		removeClass(oStore,'active');
		addClass(oTmall,'active');
		addClass(oTmall,'active-2');
		oBox_1.style.display = 'none';
		oBox_2.style.display = 'block';
		oBox_3.style.display = 'none';
		aText[1].focus();
		aText[1].value = val;
		if(aText[1].value != ''){
			aText[1].style.background = '#fff';
		}else{
			aText[1].style.background = 'url(img/search/2.png) no-repeat 13px 11px';
		}
	}
	oStore.onclick = function(){
		removeClass(oGoods,'active');
		removeClass(oTmall,'active');
		removeClass(oTmall,'active-2');
		addClass(oStore,'active');
		oBox_1.style.display = 'none';
		oBox_2.style.display = 'none';
		oBox_3.style.display = 'block';
		aText[2].focus();
		aText[2].value = val;
		if(aText[2].value != ''){
			aText[2].style.background = '#fff';
		}else{
			aText[2].style.background = 'url(img/search/2.png) no-repeat 13px 11px';
		}
	}
	//当输入框有文字的时候，清楚输入框里面的默认背景
	for(var i=0; i<aText.length; i++){
		aText.index = i;
		aText[i].onkeyup = function(){
			if(this.value != ''){
				val = this.value
				this.style.background = '#fff';
			}else{
				val = this.value;
				if(this.index == 0){
					this.style.background = 'url(img/search/1.png) no-repeat 13px 11px'//后面不要加分号，加了分号就不能将这个样式加上去了
				}else{
					this.style.background = 'url(img/search/2.png) no-repeat 13px 11px'
				}
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