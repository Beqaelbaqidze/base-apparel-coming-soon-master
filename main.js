const inpt = document.getElementById('email');
const errortxt = document.getElementById('error-text');

function checker (){
 if(document.getElementById("email").value !== ""){
    document.getElementById("error").style.display = "block";
    document.getElementById("error-text").style.display = "block";
    document.querySelector(".btn").style.border = "2px solid red";
    document.querySelector(".btn").style.opcity = 0;
    
 }    
}



