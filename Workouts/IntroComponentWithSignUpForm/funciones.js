
const button = document.querySelector('#button');
const another = document.querySelector('.try span');

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');



button.addEventListener('click', sendData);

const messages = [{
    "id" : "firstName",
    "message" : "First Name cannot be empty",
},
{
    "id" : "lastName",
    "message" : "Last Name cannot be empty",
},
{
    "id" : "email",
    "message" : "Looks like this is not an email",
    "message2" : "Hola, olvidaste digitar el correo"
},
{
    "id" : "password",
    "message" : "Password cannot be empty",
}];

function sendData (){

    let ok = 0;
            
    ok += (validate(firstName));
        
    ok += (validate(lastName));
        
    ok += (validate(email));
        
    ok += (validate(password));

    if (ok==4){
        alert("Good job!-You have succefully enrolled");
        button.style.backgroundColor = "hsla(154, 59%, 51%, 0.35)";
        another.innerHTML = "Thank You! - Click here for another register";
        another.addEventListener('click', reload);
    }
       
}

function validate(inputObj){

    let msg1 = "";
    let msg2 = "";

    const comentario = messages.findIndex(function(coment){
        if (coment.id.indexOf(inputObj.id)==0){
           msg1 = coment.message;
           msg2 = coment.message2;
        }
    });

    let imgX = inputObj.parentNode.childNodes[1];
    let spanX = inputObj.parentNode.childNodes[2];

    let valEmail = 0;
    let valAll = 0;

    if (inputObj===email ){
        if (email.value!=""){
            valEmail = validateEmail(email.value);
            spanX.innerHTML = msg1;
        }
        else {
            spanX.innerHTML = msg2;
        }
        
        valAll = valEmail;
    }

    if (inputObj.value=="" || (valEmail == 0 && inputObj===email) ){   
        imgX.style.visibility = "visible";
        spanX.setAttribute("class", "error");
        inputObj.style.border = "2px solid hsl(0, 100%, 74%)";
        if (inputObj.id != "email"){
            spanX.innerHTML = msg1;
        }

    }
    else {
        imgX.style.visibility = "hidden";
        spanX.classList.remove('error');
        inputObj.style.border = "1px solid hsl(246, 25%, 77%)";
        valAll = 1;
    }

    return valAll;

}

function validateEmail(emailValue){

    let k = emailValue.length;
    //tiene signo arroba?...próximamente validación completa con expresiones regulares
    let hasAnAtSign = 0

    for(i=0;i<k;i++){
        emailValue[i]==="@"? hasAnAtSign = 1 :  hasAnAtSign = hasAnAtSign;
    }

    return hasAnAtSign;

}

function reload (){
    location.reload();
}
