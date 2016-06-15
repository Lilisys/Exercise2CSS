var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
console.log(span)

//Open the window, add the image on the fly
function modalOpen(text, source){
	modal.style.display='block';
	var newImg = document.createElement("img");
	document.getElementById('modal-text').innerHTML = text;
	document.getElementsByClassName('modal-img')[0].appendChild(newImg);
	newImg.src = source;
}

//Delete the newly created image elt so 
function clearImg(){
  var delImg = document.getElementsByClassName('modal-img')[0]
	console.log(delImg);
	delImg.removeChild(delImg.firstChild);
}

//When you click the x, the modal window closes
span.onclick = function() {
  modal.style.display='none';
  clearImg();
}

//When you click outside the modal window, it closes
window.onclick = function(event){
	if(event.target == modal){
		modal.style.display='none'
		console.log("clicked outside")
		clearImg();
	}
}
