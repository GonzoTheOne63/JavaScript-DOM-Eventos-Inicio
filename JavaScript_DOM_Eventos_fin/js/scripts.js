// Seleccionar elementos...

// querySelector retorna 0 o un elemento
const heading = document.querySelector('.header__texto h2')
heading.textContent = 'Nuevo Heading GB'; // También se puede utilizar .text
/* heading.classList.add('nueva-clase'); */ // También se puede utilizar .text
console.log(heading);


// querySelectorAll retorna 0 hasta TODOS los selectores que selecionemos
 // Selecciona el elemento en la pocición 0
const enlaces = document.querySelectorAll(".navegacion a"); 
enlaces[0].textContent = "Nuevo Texto Para Enlace"; 
/* enlaces[0].href = "https://google.com"; */ // Cambia desde JS el enlace
/* enlaces[0].classList.remove('navegacion__enlace'); */ // Remueve el elemento seleccionado

/* // getElementById
const heading2 = document.getElementById("heading");
heading.textContent = "Modificado JS";
console.log(heading2);
 */

// GENERAR un nuevo enlace
const nuevoEnlace = document.createElement('A'); // Etiqueta en MAYÚSCULAS
//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar el texto
nuevoEnlace.textContent = "Top Enlace";  
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
//Añadirlo al documento (página web, en este caso a la primera  navegación)
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//EVENTOS 
console.log(1);

/* window.addEventListener('load', function() {  // load espera a que JS y los Archs. esten listos
    console.log(2);
}); */
window.addEventListener('load', imprimir);

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){  // Solo espera al HTML, pero no espera a CSS ni imagenes.
    console.log(4)
}); // RECOMENDADO para acelerar la carga de la página


console.log(5);

function imprimir() {
    console.log(2);
}

/* window.onscroll = function() {
    console.log('scroling...');
} */

// Seleccionar elemento y asociarle un event
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.log(evento.preventDefault()); // el 'prevent' detiene el envio
    console.log('enviando formulario');  // es especialemente útil para formularios 
    // Sirve para VALIDAR un formulario primero

});

// Eventos de los Inputs y Textarea
/* const nombre = document.querySelector('#nombre'); */
/* const email = document.querySelector('#email'); */
/* const mensaje = document.querySelector('#mensaje'); */
/* nombre.addEventListener('input', function() { */
/* nombre.addEventListener('input', function(event) { */

/* nombre.addEventListener('change', function() { */
    /* console.log(event.target.value)
}); */

/* email.addEventListener('input', function(event) {
    console.log(event.target.value)
});

mensaje.addEventListener("input", function (event) {
  console.log(event.target.value);
}); */

const datos = {  // RECOMENDADO para el llenado de formularios
    nombre: '',
    email: '',
    mensaje: '',
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(event) {
    /* console.log(event.target.value); */
    datos[event.target.id] = event.target.value;

    /* console.log(event.target); */
    console.log(datos);
}