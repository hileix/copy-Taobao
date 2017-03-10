QR();
function QR(){
	var oQR = document.getElementsByClassName('QR-code')[0];
	var oClose = oQR.getElementsByClassName('close')[0];
	oClose.onclick = function(){
		oQR.style.display = 'none';
	}
}

