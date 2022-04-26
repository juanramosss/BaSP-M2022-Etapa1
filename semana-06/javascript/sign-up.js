window.onload = function(){    
    var homeButton = document.getElementsByClassName("home");      
    homeButton[0].onclick=function(){
        window.location= 'index.html';
    }
    
    //values
    var name = (document.getElementById("name").value);
    var lastName = (document.getElementById("last-name").value);
    var dni = (document.getElementById("id").value);
    var birthDate = (document.getElementById("birth-date").value);
    var phone = (document.getElementById("phone").value);
    var adress = (document.getElementById("adress").value);
    var locality = (document.getElementById("locality").value);
    var postalCode = (document.getElementById("postal-code").value);
    var email = (document.getElementById("email").value);
    var password = (document.getElementById("password").value);
    var repeatPassword = (document.getElementById("repeat-password").value);

    //validations
    var nameV = moreThanThreeLettersValidation(document.getElementById("name").value);
    var lastNameV = moreThanThreeLettersValidation(document.getElementById("last-name").value);
    var dniV = identityCardValidation(document.getElementById("id").value);
    var birthDateV = dateValidation(document.getElementById("birth-date").value);
    var phoneV = phoneValidation(document.getElementById("phone").value);
    var adressV = adressValidation(document.getElementById("adress").value);
    var localityV = localityValidation(document.getElementById("locality").value);
    var postalCodeV = postalCodeValidation(document.getElementById("postal-code").value);
    var emailV = emailValidation(document.getElementById("email").value);
    var passwordV = passwordValidation(document.getElementById("password").value);
    var repeatPasswordV = passwordValidation(document.getElementById("repeat-password").value);
   
    //boxes
    var nameBox = (document.getElementById("name"));
    var lastNameBox = (document.getElementById("last-name"));
    var dniBox = (document.getElementById("id"));
    var birthDateBox = (document.getElementById("birth-date"));
    var phoneBox = (document.getElementById("phone"));
    var adressBox = (document.getElementById("adress"));
    var localityBox = (document.getElementById("locality"));
    var postalCodeBox = (document.getElementById("postal-code"));
    var emailBox = (document.getElementById("email"));
    var passwordBox = (document.getElementById("password"));
    var repeatPasswordBox = (document.getElementById("repeat-password"));

    nameBox.addEventListener('blur', function(){
        if (!moreThanThreeLettersValidation(document.getElementById("name").value)){
            document.getElementsByClassName("error")[0].style.visibility = "visible";
            nameBox.classList = "red";
        } 
    } )
    nameBox.addEventListener('focus', function(){
        document.getElementsByClassName("error")[0].style.visibility = "hidden";
        nameBox.classList -= "red";
    })

    lastNameBox.addEventListener('blur', function(){
        if(!moreThanThreeLettersValidation(document.getElementById("last-name").value)){
            document.getElementsByClassName("error")[1].style.visibility = "visible";
            lastNameBox.classList = "red";
        }
    })
    lastNameBox.addEventListener('focus', function(){
        document.getElementsByClassName("error")[1].style.visibility = "hidden";
        lastNameBox.classList -= "red";
    })

    dniBox.addEventListener('blur', function(){
        if(!identityCardValidation(document.getElementById("id").value)){
            document.getElementsByClassName("error")[2].style.visibility = "visible";
            dniBox.classList = "red";
        }
    })
    dniBox.addEventListener('focus', function(){
        document.getElementsByClassName("error")[2].style.visibility = "hidden";
        dniBox.classList -= "red";
    })
    
    birthDateBox.addEventListener('blur', function(){
        if (!dateValidation(document.getElementById("birth-date").value)){
            document.getElementsByClassName("error")[3].style.visibility = "visible";
            birthDateBox.classList = "red";
        }
    })
    birthDateBox.addEventListener('focus', function(){
        document.getElementsByClassName("error")[3].style.visibility = "hidden";
        birthDateBox.classList -= "red";
    })

    phoneBox.addEventListener('blur', function(){
        if (!phoneValidation(document.getElementById("phone").value)){
            document.getElementsByClassName("error")[4].style.visibility = "visible";
            phoneBox.classList = "red";
        }
    })
    phoneBox.addEventListener('focus', function(){
        document.getElementsByClassName("error")[4].style.visibility = "hidden";
        phoneBox.classList -= "red";
    })

    adressBox.addEventListener('blur', function(){
        if (!adressValidation(document.getElementById("adress").value)){
            document.getElementsByClassName("error")[5].style.visibility = "visible";
            adressBox.classList = "red";
        }
    })
    adressBox.addEventListener('focus', function(){
        document.getElementsByClassName("error")[5].style.visibility = "hidden";
        adressBox.classList -= "red";
        
    })

    localityBox.addEventListener('blur', function(){
        if (!localityValidation(document.getElementById("locality").value)){
            document.getElementsByClassName("error")[6].style.visibility = "visible";
            localityBox.classList = "red";
        }
    })
    localityBox.addEventListener('focus', function(){
        document.getElementsByClassName("error")[6].style.visibility = "hidden";
        localityBox.classList -= "red";
    })

    postalCodeBox.addEventListener('blur', function(){
        if (!postalCodeValidation(document.getElementById("postal-code").value)){
            document.getElementsByClassName("error")[7].style.visibility = "visible";
            postalCodeBox.classList = "red";
        }
    })
    postalCodeBox.addEventListener('focus', function(){
        document.getElementsByClassName("error")[7].style.visibility = "hidden";
        postalCodeBox.classList -= "red";
    })

    emailBox.addEventListener('blur', function(){
        if (!emailValidation(document.getElementById("email").value)){
            document.getElementsByClassName("error")[8].style.visibility = "visible";
            emailBox.classList = "red";
        }
    })
    emailBox.addEventListener('focus', function(){
        document.getElementsByClassName("error")[8].style.visibility = "hidden";
        emailBox.classList -= "red";
    })

    passwordBox.addEventListener('blur', function(){
        if (!passwordValidation(document.getElementById("password").value)){
            document.getElementsByClassName("error")[9].style.visibility = "visible";
            passwordBox.classList = "red";
        }
    })
    passwordBox.addEventListener('focus', function(){
        document.getElementsByClassName("error")[9].style.visibility = "hidden";
        passwordBox.classList -= "red";
    })
    
    repeatPasswordBox.addEventListener('blur', function(){
        if (!passwordValidation(document.getElementById("repeat-password").value)){
            document.getElementsByClassName("error")[10].style.visibility = "visible";
            repeatPasswordBox.classList = "red";
        }
    })
    repeatPasswordBox.addEventListener('focus', function(){
        document.getElementsByClassName("error")[10].style.visibility = "hidden";
        repeatPasswordBox.classList -= "red";
    })
    
    document.getElementById("sign-up-button").onclick = submitButton;


}

//FUNCTION FOR SUBMIT BUTTON
function submitButton (){
    var name = (document.getElementById("name").value);
    var lastName = (document.getElementById("last-name").value);
    var dni = (document.getElementById("id").value);
    var birthDate = (document.getElementById("birth-date").value);
    var phone = (document.getElementById("phone").value);
    var adress = (document.getElementById("adress").value);
    var locality = (document.getElementById("locality").value);
    var postalCode = (document.getElementById("postal-code").value);
    var email = (document.getElementById("email").value);
    var password = (document.getElementById("password").value);
    var repeatPassword = (document.getElementById("repeat-password").value);
    
    var nameV = moreThanThreeLettersValidation(document.getElementById("name").value);
    var lastNameV = moreThanThreeLettersValidation(document.getElementById("last-name").value);
    var dniV = identityCardValidation(document.getElementById("id").value);
    var birthDateV = dateValidation(document.getElementById("birth-date").value);
    var phoneV = phoneValidation(document.getElementById("phone").value);
    var adressV = adressValidation(document.getElementById("adress").value);
    var localityV = localityValidation(document.getElementById("locality").value);
    var postalCodeV = postalCodeValidation(document.getElementById("postal-code").value);
    var emailV = emailValidation(document.getElementById("email").value);
    var passwordV = passwordValidation(document.getElementById("password").value);
    var repeatPasswordV = passwordValidation(document.getElementById("repeat-password").value);
    var all = ["Name: "+name, "Last Name: "+lastName, "Id: "+dni, "Birth Date: "+birthDate, "Phone: "+phone, "Adress: "+adress, "Locality: "+locality, "Postal Code: "+postalCode, "E-mail: "+email, "Password: "+password, "Repeat Password: "+repeatPassword];
    var allV = [nameV, lastNameV, dniV, birthDateV, phoneV, adressV, localityV, postalCodeV, emailV, passwordV, repeatPasswordV];
    var allN = ["Name ", "Last Name ", "Id ", "Birth Date ", "Phone ", "Adress ", "Locality ", "Postal Code ", "E-mail ", "Password ", "Repeat Password"];
    var incorrect = [];
    if (nameV && lastNameV && dniV && birthDateV && phoneV && adressV && localityV && postalCodeV && emailV && passwordV && repeatPasswordV){
        alert(all);
    }else{
        for (i = 0; i< all.length; i++){
            if(!allV[i]){
                incorrect.push(allN[i]); 
            }
        }
        alert("Please correct the following field(s): "+ incorrect);
    }



}




//FUNCTION FOR NAME AND SRNAME
function moreThanThreeLettersValidation (word){
    var works = false;
    if(word.length>3){
        works = true;
    }
    for (i=0; i<word.length; i++){
        if(!isNaN(word[i])){
            works = false;
        }
    }
    return works; 
}
//FUNCTION FOR DNI
function identityCardValidation (dni){
    var works = false;
    if(dni.length>7){
        works = true;
    }
    for (i=0; i<dni.length; i++){
        if(isNaN(dni[i])){
            works = false;
        }
    }
    return works;
}
//FUNCTION FOR DATE
function todayDate (){
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const todayDate = dd + '/' + mm + '/' + yyyy;
    return todayDate;
}

function dateValidation (date){
    if(date[2] != '/' || date[5] != '/'){
        return false;
    }   
    var bar = date.indexOf("/");
    var day = date.substring(0, bar);
    bar++;
    var monthAndYear = date.substring(bar);
    bar = monthAndYear.indexOf("/");
    var month = monthAndYear.substring(0, bar);
    bar++;
    var year = monthAndYear.substring(bar);
    var works = true;
    if(day.length == 2 && month.length == 2 && year.length == 4){
        for(i=0; i < day.length; i++){
            if (isNaN(day[i]) || isNaN(month[i])){
                works = false;
            }
        }
        for(i=0; i < year.length; i++){
            if(isNaN(year[i])){
                works = false;
            }
        }
        if(date >= todayDate()){
            works = false;
        }
    }else{
        works = false;
    }  
    return works;
} 


//FUNCTION FOR PHONE NUMBER
function phoneValidation(phoneNumber){
    var works = false;
    if (phoneNumber.length == 10){
        works = true;
        for(i=0; i<10; i++){
            if(isNaN(phoneNumber[i])){
                works = false;
            }
        }
    }
    return works;
}
//FUNCTION FOR ADRESS/  type example: 'Corrientes 2323' or also 'Corrientes 23b'
function adressValidation (adress){
    var works = true;
    var space = adress.indexOf(" ");
    if(space==-1){
        works = false;
        // alert("Let the space be between the street name and the door number");
    }
    var street = adress.substring(0, space);
    var numbers = adress.substring(space+1);
    for (i = 0; i<street.length; i++){
        if(!isNaN(street[i])){
            works = false;
            // alert("Let the street name be only letters.");
        }
    }
    return works;
}

//FUNCTION FOR LOCALITY
function localityValidation (locality){ 
    var works = false;
    var letters = [];
    for (i=0; i <locality.length; i++){
        if (isNaN(locality[i])){
            letters.push(locality[i]);
        } 
        if (!isNaN(locality[i])){
            works = true;
        }
    }
    if (letters.length<4){
        works = false;
    }
    return works;
}

//FUNCTION FOR POSTAL CODE

function postalCodeValidation (postalCode){
    var works = false;
    if (postalCode.length>3 && postalCode.length<6){
        works = true;
        for (i = 0; i <postalCode.length; i++){
            if(isNaN(postalCode[i])){
                works = false;
            }
        }
    }
    return works;
}

//FUNCTION FOR EMAIL

function emailValidation (email){
    return (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email));   
}

//FUNCTION FOR PASSWORD

function passwordValidation (pass){
    var numbers = false;
    var letters = false;
    for (i = 0 ; i < pass.length; i ++){
        if(!isNaN(pass[i])){
            numbers = true;
        }
        if (isNaN(pass[i])){
            letters = true;
        } 
    } 
    return (letters && numbers && (pass.length>7));
}

//function repeatPassword (pass1, pass2){
    
