guessYouLike();
function guessYouLike(){
	var oGuess = document.getElementById('guessYouLike');
	var aImg = oGuess.getElementsByTagName('img');
	for(var i=0; i<aImg.length; i++){
		aImg[i].src = 'img/guessYouLike/'+ (i+1) + '.png';
	}
}
