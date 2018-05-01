// Obten el 'Array like Object' con todas las teclas
var teclado = document.getElementsByClassName("tecla");

// Obten el objeto HTML de la pantalla
var pantalla = document.querySelector('.pantalla');

// Lee cada una de las teclas de la calculadora
for(let tecla = 0; tecla <= 15; tecla++){
  teclado[tecla].addEventListener('click', function(e){
    let = teclaValue = e.target.attributes["value"].value;
    updateScreen(teclaValue);
  });
}

function updateScreen(teclaValue){
  pantalla.innerText = teclaValue;
}



// function displayNumber() {
//   document.querySelector('.pantalla').innerText = number;
// }

// var pantalla = document.querySelector('.pantalla');
// pantalla.innerText = "HoLi";
// console.log(pantalla);