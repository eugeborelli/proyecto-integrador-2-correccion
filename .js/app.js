// tipos de datos
/* 
let nombreCompleto = "Ada" ;

console.log (nombreCompleto);


// Operaciones matematicas
let resultado = null;

let num1 = 50;
let num2 = 10;

resultado = num1 + num2;


console.log(resultado);


// Mostramos los valores en la consola */

const menuItems = document.querySelectorAll('.menu-item');
const menuBtn = document.querySelector('#menu-button');

menuBtn.addEventListener('click', function(){
    document.body.classList.toggle('mobile-menu-active');
});

menuItems.forEach(function(item) {
item.addEventListener('click', function() {  
    
    document.body.classList.remove('mobile-menu-active');

    const currentItems = document.querySelector('.active');
    currentItems.classList.remove('active');
    this.classList.add ('active');
 }); 
    
});
