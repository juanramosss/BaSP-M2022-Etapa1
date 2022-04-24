window.onload = function(){
    console.log('algo esta llegando');
    var signUpButton = document.getElementsByClassName("sign-up");
    signUpButton[0].onclick = function(){
        window.location = 'sign-up.html';
    }
    var loginButton = document.getElementsByClassName("login");
    loginButton[0].onclick = function(){
        window.location = 'login.html';
    }




}


