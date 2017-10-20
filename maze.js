window.onload = function(){

 	var a = document.getElementById("boundary1");

 	a.addEventListener("mouseover", function(){

 		a.setAttribute("class", "boundary youlose");

 	});	

 };
 
 function redWall(){


 var flag = false;


window.onload = function(){  
  

  var b = document.getElementById("end"); 


 
    b.addEventListener("mouseover", gameEnd); 


var ab = document.querySelectorAll("div#maze div.boundary");

 
 for(var n=0; n<ab.lenght; n++){

  ab[n].setAttribute("class", "boundary youlose")
}
for (var n= 0; n < ab.length; n++){ 


 		        ab[n].addEventListener("mouseover", redWall); 





}

function redWall(){
	flag= true;

 
 var ab = document.querySelectorAll("div#maze div.boundary");
  
  for(var n=0; n< ab.lenght; n++){
  	
  	ab[n].setAttribute("class", "boundary youlose");
  }
}
  


 function gameEnd(){

  if (flag){
	
	alert("Sorry, You lost");


}else {

	
	alert("Good Job! You win");

}

}
 
 function gameStart(){
  
  flag= false;
 
  var ab = document.querySelectorAll("div#maze div.boundary");
  
  for(var n=0; n< ab.lenght; n++){
 

  	ab[n].setAttribute("class", "boundary");


}
