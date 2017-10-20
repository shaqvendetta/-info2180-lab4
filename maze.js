window.onload = function () {
	var a = document.querySelectorAll("div#maze div.boundary"); 


 
for (var ab = 0; ab< a.length; ab++){ 



		a[ab].addEventListener("mouseover", redWall); 


 
	} 


 
} 


 
 function redWall() { 


 
    var a = document.querySelectorAll("div#maze div.boundary"); 


 
    for (var ab = 0; ab < a.length; ab++){ 


 
       a[ab].setAttribute("class", "boundary youlose"); 


 
    } 
}