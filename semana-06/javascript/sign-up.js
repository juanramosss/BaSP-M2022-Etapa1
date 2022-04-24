window.onload = function(){    
    var homeButton = document.getElementsByClassName("home");  
    console.log(homeButton);  
    homeButton[0].onclick=function(){
        console.log('algo esta llegando');
        window.location= 'index.html';
    }




}


