const form = document.getElementById('form');
var username = document.getElementById('user');
const email = document.getElementById('email');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');
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
    

    if(usernameVal === "")
    {
        showError(username,"Username cannot be blank");
    }
    else{
        showSuccess(username);
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