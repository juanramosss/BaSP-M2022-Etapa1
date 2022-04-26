window.onload = function(){
    var homeButton = document.getElementsByClassName("home");
    homeButton[0].onclick = function(){
        window.location = 'index.html';
    }
    
    //EMAIL VALIDATION
    function emailValidation(){
        var userName = document.getElementById("user").value;
        if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(userName)){
            return userName;               
        }else{
            document.getElementsByClassName("error")[0].style.visibility = "visible";
            document.getElementById("user").classList = "red";
                return false;        
        }  
    }
    var box = document.getElementById("user");
    var userName = box.value;
    var error = document.getElementsByClassName("error");
    box.addEventListener("blur", emailValidation);
    box.onfocus = function(){
        error[0].style.visibility = "hidden";
        document.getElementById("user").classList -= "red";
    }
    //PASSWORD VALIDATION
    function pwdValidation(){        
        var pwd = document.getElementById("pwd").value;
        var letters = 0;
        var numbers = 0;
        for (i = 0; i < pwd.length; i++){
            var char = pwd[i];
            if(isNaN(char)){   
                letters++;
            }
            if(!isNaN(char)){
                numbers++;
            }
        }        
        if(letters>0 && numbers>0){
            console.log(numbers + letters);
            return pwd;
        }else{
            document.getElementsByClassName("error")[1].style.visibility = "visible";
            document.getElementById("pwd").classList = "red";
            return false;
        }
    }
    var pwdBox = document.getElementById("pwd");
    var pwd = pwdBox.value;
    pwdBox.addEventListener("blur", pwdValidation); 
    pwdBox.onfocus = function(){
        error[1].style.visibility = "hidden";
        document.getElementById("pwd").classList -= "red";
    }
    //LOGIN BUTTON (SUBMIT)

    const errorArray = [];
    var go = document.getElementById("login-button");
    go.onclick = function(){
        var mail = emailValidation();
        var pass = pwdValidation();
        var eMessage = 'E-mail: '+mail;
        var pMessage = 'Password: '+pass; 
        if(!mail){
            eMessage = 'Error in the e-mail you entered';
        }
        if(!pass){
            pMessage = 'Error in the password you entered';
        }
        if(!mail && !pass){
            alert("Errors in both fields");
        }else if(!mail || !pass){
            alert(eMessage + " - " +pMessage);
        }
        else{
            alert("Welcome! Email: '" + mail+ "' Password: '" + pass+"'");
        }
    }
    //FORGOT PASSWORD
    var forgotpass = document.getElementById("forgot-password");
    forgotpass.onclick = function(){
        userName = document.getElementById("user").value;
        if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(userName)){
            alert("New password has been sent to your email adress: " + userName);   
        }else{
            alert("Please write a valid email adress so we can send you a new password!");
        }
    }


}