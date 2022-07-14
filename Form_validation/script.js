const form=document.getElementById('form');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');
const messageContainer=document.querySelector('.message-container');
const message=document.getElementById('message');
let isValid=false;
let passwordsMatch=false;
function validateForm(){
    isValid=form.checkValidity();
    //console.log(isValid);
    if(!isValid){
        message.textContent="Please fill out all Fields."
        message.style.color='red';
        messageContainer.style.border='1px solid red';
        return;
    }
    if(password1===password2){
        passwordsMatch=true;
        password1.style.border='blue';
        password2.style.border='blue';
        return;
    }
    else{
        passwordsMatch=false;
        message.textContent="Please make sure passwords match";
        message.style.color='red';
        messageContainer.style.border='1px solid red';
        password1.style.borderColor='1px solid red';
        password2.style.borderColor=' 1px solid red';
        return;

    }
    if(isValid && passwordsMatch){
        message.textContent="Successfully Regitered!";
        message.style.color='blue';
        messageContainer.style.border='1px solid blue';
        return;
    }
}
function storeFormData(){
    const user={
        name:form.fullName.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value
    };
    console.log(user)
}
function processFormData(e){
    e.preventDefault();
    //console.log(e);
    validateForm();
    if(isValid && passwordsMatch){
        storeFormData();
    }
}
form.addEventListener('submit',processFormData);