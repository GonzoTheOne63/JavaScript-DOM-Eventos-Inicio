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
enlaces[0].classList.remove('navegacion__enlace'); // Remueve el elemento seleccionado

/* // getElementById
const heading2 = document.getElementById("heading");
heading.textContent = "Modificado JS";
console.log(heading2);
 */

