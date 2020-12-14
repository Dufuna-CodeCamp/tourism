let inform = document.querySelector(".information");
let email = document.getElementById("email");
let password = document.getElementById("pswrd");


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
    let tpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,10}$/;
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
    emailFieldValidation(e);
    passwordFieldValidation(e);
}

inform.addEventListener("submit", information);

