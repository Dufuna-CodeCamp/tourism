function nameTwo(){
    let fname = document.querySelector("#fname").value;
    let fpattern =     /^([a-zA-Z]{2,}) ([a-zA-Z]{2,})$/;

        if(fpattern.test(String(fname).toUpperCase())  == true && !fname.length < 4   ){
            ftext = "Valid input";
        } else {
            ftext = "Input not valid";
        }
    
       document.getElementById("valid1").innerHTML = ftext;

}
function emailPart(){
    let name = document.querySelector("#email").value;
    let valid = document.querySelector("#valid2");
    let pattern =/\S+@\S+/;

        if(pattern.test(String(name).toLowerCase()) == true){
            text = "Valid input";
        } else {
            text = "Add a valid email";
        }
    
       document.getElementById("valid2").innerHTML = text;
    }
    function passWord(){
    let tname = document.querySelector("#pswrd").value;
    let tpattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,10}$/;
  

        if(tpattern.test(String(tname))  == true  ){
            ttext = "Valid input";
        } else {
            ttext = "Must include at least one uppercase, 5 lowercase and a number";
        }
    
       document.getElementById("valid3").innerHTML = ttext;

}