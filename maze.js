window.onload = function () {
	var a =document.getElementById("boundary1");
	a.addEventListener("mouseover", redWall);
	}

function redWall () {
	var a = document.getElementById("boundary1");
	a.setAttribute("class", "boundary youlose");

}