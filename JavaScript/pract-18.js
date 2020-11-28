const form = document.getElementById('form');
var username = document.getElementById('user');
const email = document.getElementById('emailid');
const pass1 = document.getElementById('passwrd1');
const pass2 = document.getElementById('passwrd2');
const small = document.getElementById('small');


form.addEventListener('submit', (e)=>{

e.preventDefault();

checkInput(); 

});

function checkInput(){
    const usernameVal = username.value;
    const emailValue = email.value;
    const pass1Value = pass1.value;
    const pass2Vlaue = pass2.value;
    
//   checking username field
    if(usernameVal === "")
    {
        showError(username,"Username field cannot be blank");
    }
    else{
        showSuccess(username);
    }

    // checking password field
    if(pass1Value == pass2Vlaue)
    {
            showSuccess(pass1);
            showSuccess(pass2);
    }
    else{
        showError(pass1,"password doesn't match");
        showError(pass2,"password doesn't match");
    }

    if(pass1Value.trim() ==="" ){
        showError(pass1,"password field cannot be blank");
       
    }
    if(pass2Vlaue.trim() ==="" ){
        showError(pass2,"password field cannot be blank");
       
    }

    // checking email address field

   if(emailValue===""){
       showError(email,"This field cannot be blank" );
   }
   if(emailValue.match(/^[\w-\.]+@([\w-]+\.)+com$/g)){
       showSuccess(email);
   }
    
}

function showError(input,msg){
    const formControl = input.parentNode;
    formControl.className = "form-container error";
    const small=formControl.querySelector('small');
    small.innerHTML = msg; 

}
function showSuccess(input){
    const formControl = input.parentNode;
    formControl.className = "form-container success";
}