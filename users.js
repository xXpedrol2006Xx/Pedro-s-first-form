/* User Page*/

let user
let pass
let reember_pass

document.getElementById("LoginBTN").onclick = function(){
     user = document.getElementById("UserTEXT").value;
     pass = document.getElementById("PassTEXT").value;
     reember_pass = document.getElementById("rmp").value

     if (user == user && pass == pass){
          window.open("mainpage.html")     
          
     }

     else if (user == user && pass == pass && reember_pass == reember_pass){
          window.confirm("Are you sure you want to save")
          window.open("mainpage.html")
     }
}