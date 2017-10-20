window.onload = function(){

 	var a = document.getElementById("boundary1");

 	a.addEventListener("mouseover", function(){

 		a.setAttribute("class", "boundary youlose");

 	});	

 };
 
 function redWall(){


var ab=document.querySelectorAll("div#maze div.boundary");

for(var n;n<ab.lenght;n++){

  ab[n].setAttribute("class","boundary youlose")
}


}



 
 var ab =document.querySelectorAll("div#maze div.boundary");
  
  for(var n;n<ab.lenght;n++){
  	ab[n].addEventListener("mouseover", redWall);
  }
}
