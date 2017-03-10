hotSale();
function hotSale(){
	var oHotSale = document.getElementById('hotSale');
	var oGoods2 = oHotSale.getElementsByClassName('goods2');
	var oGoods3 = oHotSale.getElementsByClassName('goods3');

	var oShade2 = oHotSale.getElementsByClassName('shade2');
	var oShade3 = oHotSale.getElementsByClassName('shade3');

	var oP2 = oHotSale.getElementsByClassName('shade-p2');
	var oP3 = oHotSale.getElementsByClassName('shade-p3');

	var oA2 = oHotSale.getElementsByClassName('shade-a2');
	var oA3 = oHotSale.getElementsByClassName('shade-a3');
	//2
	for(var i=0; i<oGoods2.length; i++){
		oGoods2[i].index = i;
		oShade2[i].index = i;
		oP2[i].index = i;
		oA2[i].index = i;
		oGoods2[i].addEventListener('mouseover',function(){
			oShade2[this.index].style.display = 'block';
			oP2[this.index].style.display = 'block';
			oA2[this.index].style.display = 'block';
		},false);	

		oShade2[i].addEventListener('mouseover',function(){
			oShade2[this.index].style.display = 'block';
			oP2[this.index].style.display = 'block';
			oA2[this.index].style.display = 'block';
		},false);
		oP2[i].addEventListener('mouseover',function(){
			oShade2[this.index].style.display = 'block';
			oP2[this.index].style.display = 'block';
			oA2[this.index].style.display = 'block';
		},false);
		oA2[i].addEventListener('mouseover',function(){
			oShade2[this.index].style.display = 'block';
			oP2[this.index].style.display = 'block';
			oA2[this.index].style.display = 'block';
		},false);
		oShade2[i].addEventListener('mouseout',function(){
			oShade2[this.index].style.display = 'none';
			oP2[this.index].style.display = 'none';
			oA2[this.index].style.display = 'none';
		},false); 
	}

	//2
	for(var i=0; i<oGoods3.length; i++){
		oGoods3[i].index = i;
		oShade3[i].index = i;
		oP3[i].index = i;
		oA3[i].index = i;
		oGoods3[i].addEventListener('mouseover',function(){
			oShade3[this.index].style.display = 'block';
			oP3[this.index].style.display = 'block';
			oA3[this.index].style.display = 'block';
		},false);	

		oShade3[i].addEventListener('mouseover',function(){
			oShade3[this.index].style.display = 'block';
			oP3[this.index].style.display = 'block';
			oA3[this.index].style.display = 'block';
		},false);
		oP3[i].addEventListener('mouseover',function(){
			oShade3[this.index].style.display = 'block';
			oP3[this.index].style.display = 'block';
			oA3[this.index].style.display = 'block';
		},false);
		oA3[i].addEventListener('mouseover',function(){
			oShade3[this.index].style.display = 'block';
			oP3[this.index].style.display = 'block';
			oA3[this.index].style.display = 'block';
		},false);
		oShade3[i].addEventListener('mouseout',function(){
			oShade3[this.index].style.display = 'none';
			oP3[this.index].style.display = 'none';
			oA3[this.index].style.display = 'none';
		},false); 
	}
}
