side_announcement();
function side_announcement(){
	var oAnnouncement = document.getElementsByClassName('announcement')[0];
	var arrLi_1 = oAnnouncement.getElementsByClassName('li-1');
	var aUl_2 = oAnnouncement.getElementsByClassName('ul-2');
	var timer = null;
	// 当鼠标悬停在第一级菜单200ms后，显示出其下面的二级菜单
	for(var i=0; i<arrLi_1.length; i++){
		arrLi_1[i].index = i;
		arrLi_1[i].onmouseover = function(){
			clearInterval(timer);
			var This = this;
			var index = this.index;
			timer = setTimeout(function(){
				//一级菜单显示情况
				for(var i=0; i<arrLi_1.length; i++){
					removeClass(arrLi_1[i],'active-1');
				}
				addClass(This,'active-1');
				//二级菜单显示情况
				for(var i=0; i<aUl_2.length; i++){
					removeClass(aUl_2[i],'show')
				}
				addClass(aUl_2[index],'show');
				},300)	
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
