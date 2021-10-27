const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentPerson;
let firstLetter;


let profession = document.querySelector('#profession');
let image = document.querySelector('.perfil').childNodes[0];
let testimonial = document.querySelector('#testimony');

prev.addEventListener("click", () => {
    slide(-1);
});

next.addEventListener("click", () => {
    slide(1);
});

//DA: Tener en cuenta que para agregar más registros, el código debe corresponder con la primera letra del nombre.
const datos =[{
    "id": 1,
    "codigo": "T",
    "name": "Tanya Sinclair",
    "profession": "UX Engineer",
    "image": "assets/image-tanya.jpg",
    "testimonial": '"I´ve been interested in coding for a while but never taken the jump, until now. I couldn´t recommend this course enough. I´m now in the job of my dreams and so excited about the future. "'
  }, {
    "id": 2,
    "codigo": "J",
    "name": "John Tarkpor",
    "profession": "Junior Front-end Developer",
    "image": "assets/image-john.jpg",
    "testimonial": '" If you want to lay the best foundation possible I´d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "'
  }, {
    "id": 3,
    "codigo": "M",
    "name": "Michelle",
    "profession": "Decoration",
    "image": "assets/avatar-michelle.jpg",
    "testimonial": '" Me encanta la decoración, yo te recomiendo unos buenos muebles en tu hogar "'
  }, {
    "id": 4,
    "codigo": "D",
    "name": "Daniel Acosta",
    "profession": "Golden",
    "image": "assets/drasForestCamp.jpg",
    "testimonial": '" Recomiendo el semillero de aprendiz y las plataformas como FreeCodeCamp y JS30...ya que me han ayudado a ir paso a paso, también gracias a la guía y las lecciones aprendidas de Didier. "'
  }, {
    "id": 5,
    "codigo": "F",
    "name": "Firulais",
    "profession": "Dog-partner",
    "image": "assets/lapiz.png",
    "testimonial": '" Si quieres aprender a dibujar, primero debes estudiar la teoría de los colores. "'
  }, {
    "id": 6,
    "codigo": "C",
    "name": "Caballos",
    "profession": "Coach mental suffering",
    "image": "assets/horses.png",
    "testimonial": '" Si me descuidas por mucho tiempo, no olvides que la montaña te recordará que debes tener mayor disciplina. "'
  }];

function slide (i){

    let n ;

    currentPerson = document.querySelector('#person');
    firstLetter = currentPerson.innerHTML.substring(0,1);

    const idActual = datos.filter(function(dato){
        if(dato.codigo === firstLetter){
            n = (dato.id-1) + i;
        }
    });

    if (n>=datos.length){
        n=0;
    }

    if (n<0){
        n=datos.length-1;
    } 
    
        currentPerson.innerHTML = datos[n].name;
        profession.innerHTML = datos[n].profession;
        image.src = datos[n].image;
        testimonial.innerHTML = datos[n].testimonial;
       
};

slide(0); //predeterminado Tanya
