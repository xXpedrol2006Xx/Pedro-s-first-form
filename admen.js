/* Adame Page*/

let user
let pass

document.getElementById("LoginBTN").onclick = function(){
     user = document.getElementById("UserTEXT").value;
     pass = document.getElementById("PassTEXT").value;

     if (user == 'pedro24' && pass == '2006'){
          window.confirm("are you sure you want to enter admen ")
          window.open("mainpage.html")
          
     }
}

