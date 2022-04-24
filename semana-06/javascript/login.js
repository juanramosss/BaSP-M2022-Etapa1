window.onload = function(){
    var homeButton = document.getElementsByClassName("home");
    homeButton[0].onclick = function(){
        window.location = 'index.html';
    }
    var input = document.getElementsByClassName("erase");
    input[0].onclick = function(){
        input[0].setAttribute('value', ' ');
    }
    input[1].onclick = function(){    
        input[1].setAttribute('value', ' ');
    }

    var userName = document.getElementById("user");
    userName.blur = function(){
        if(userName.length<10){
            alert("error"); 
        }
    }



}