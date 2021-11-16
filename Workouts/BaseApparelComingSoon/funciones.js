const button = document.querySelector('button');
const input = document.querySelector('input');
const email = document.querySelector('.email');
const error = document.querySelector('#error');

button.addEventListener('click', holaMundo);
input.addEventListener('focus', colores);
input.addEventListener('blur', coloresX);

function holaMundo(){
    alert("hello world!");
}

function colores() {
    //email.style.backgroundColor = "#FF0000";
    //email.innerHTML="no entiendo";

    //email.style.backgroundColor
    //document.getElementById("email").style.backgroundColor = "#FF0000";
    //error.a;
    error.innerHTML='<img src="assets/icon-error.svg" alt="icon-alert">';
   
}

function coloresX (){
    //error.add();
    error.innerHTML='';
}
