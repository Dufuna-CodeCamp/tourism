let inform = document.querySelector(".information");
let fname = document.getElementById("fname");
let email = document.getElementById("email");
let date = document.getElementById("date");
let persons =document.getElementById("persons");


function nameFieldValidation(event){
    let nameRegex = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
    if(fname.value === ''){
        document.getElementById("error").innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else if (!fname.value.match(nameRegex)) {
        document.getElementById("error").innerHTML = "Input not valid";
        event.preventDefault();
        return false;
    } else {
        document.getElementById("error").innerHTML = "";
        event.preventDefault();
        return true;
    }
}
function emailFieldValidation(event){
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    if(email.value === ''){
        document.getElementById("error1").innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else if (!email.value.match(emailRegex)) {
        document.getElementById("error1").innerHTML = "Add a valid email";
        event.preventDefault();
        return false;
    } else {
        document.getElementById("error1").innerHTML = "";
        return true;
    }
}
function dateValidation(event){
    if(date.value === ''){
        document.getElementById("error2").innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else {
        document.getElementById("error2").innerHTML = "";
        return true;
    }
}
function personsValidation(event){
    personRegex = /^[0-9]+$/;
    if(persons.value === ''){
        document.getElementById("error3").innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else if (!persons.value.match(personRegex)) {
        document.getElementById("error3").innerHTML = "Add a valid number";
        event.preventDefault();
        return false;
    } else {
        document.getElementById("error3").innerHTML = "";
        return true;
    }
}

function information(e){
    nameFieldValidation(e);
    emailFieldValidation(e);
    dateValidation(e);
    personsValidation(e);
    
    return true;
}

inform.addEventListener("submit", information);