const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


let currentPerson;
let firstLetter;

let profession; 

prev.addEventListener("click", slide);
next.addEventListener("click", slide);

function slide (){

    currentPerson = document.querySelector('#person');
    firstLetter = currentPerson.innerHTML.substring(0,1);
    profession = document.querySelector('#profession');

    if (firstLetter==="T"){
        currentPerson.innerHTML = "John Tarkpor";
        profession.innerHTML = "Junior Front-end Developer";

    }
    else {
        currentPerson.innerHTML = "Tanya Sinclair";
        profession.innerHTML = "UX Engineer";
    }
};

slide();
