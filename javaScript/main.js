let inform = document.querySelector(".information");
let fname = document.getElementById("fname");
let email = document.getElementById("email");
let password = document.getElementById("pswrd");

function nameFieldValidation(event){
    let nameRegex = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
    if(fname.value === ''){
        document.getElementById("valid1").innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else if (!fname.value.match(nameRegex)) {
        document.getElementById("valid1").innerHTML = "Input not valid";
        event.preventDefault();
        return false;
    } else {
        document.getElementById("valid1").innerHTML = "";
        event.preventDefault();
        return true;
    }
}
function emailFieldValidation(event){
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    if(email.value === ''){
        document.getElementById("valid2").innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else if (!email.value.match(emailRegex)) {
        document.getElementById("valid2").innerHTML = "Add a valid email";
        event.preventDefault();
        return false;
    } else {
        document.getElementById("valid2").innerHTML = "";
        return true;
    }
}

function passwordFieldValidation(event) {
    let tpattern = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;
    if(password.value === ''){
        document.getElementById("valid3").innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else if (!password.value.match(tpattern)) {
        document.getElementById("valid3").innerHTML = "Must include at least one uppercase, 5 lowercase and a number";
        event.preventDefault();
        return false;
    } else {
        document.getElementById("valid3").innerHTML = "";
        return true;
    }
}

function information(e) {
    nameFieldValidation(e);
    emailFieldValidation(e);
    passwordFieldValidation(e);
}

inform.addEventListener("submit", information);

