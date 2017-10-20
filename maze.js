var tes = false; //keep track if the user hit any maze walls. 


 
  


 
 window.onload = function() { 


 
     var t= document.getElementById("end");

 
     t.addEventListener("mouseover",gameEnd);

      var y = document.getElementById("start"); 

      y.addEventListener("click", gameStart); 



 
     var a = document.querySelectorAll("div#maze div.boundary");  
     for (var ab = 0; ab< a.length; ab++){ 



 
		       a[ab].addEventListener("mouseover", redWall);

 
     } 


 
 }; 


 
 


 
 function redWall() {


 
 	tes = true; 

 
      var a = document.querySelectorAll("div#maze div.boundary"); 


 
    
    for (var ab = 0; ab < a.length; ab++){  


 
         a[ab].setAttribute("class", "boundary youlose"); 

 
     } 


  } 


 



 function gameEnd(){
 


 
     if(tes) { 


 
        
     alert("Sorry, You lost"); 


    } else { 


 
       alert("Good Job! You win");


 
      } 


 
  }
  function gameStart() { 


 
  flag = false; 


 
    var a = document.querySelectorAll("div#maze div.boundary"); 


 
  for (var ab= 0; ab < a.length; ab++){ 


 
         a[ab].setAttribute("class", "boundary"); 


 
      } 
  
}


 


