// Obten el 'Array like Object' con todas las teclas
const teclado = document.getElementsByClassName("tecla");

// Obten el objeto HTML de la pantalla
const pantalla = document.querySelector('.pantalla');

// Declara el valor actual de la calculadora
let resultado = "";


// Lee cada una de las teclas de la calculadora
for (let tecla = 0; tecla <= 15; tecla++) {
  teclado[tecla].addEventListener('click', function (e) {
    let = teclaValue = e.target.attributes["value"].value;
    procesa(teclaValue);
  });
}

// Actualiza la pantalla cada que una tecla es presionada
function procesa(teclaValue) {
  switch (teclaValue) {
    case "+":
      agregaSimbolo(teclaValue);
      console.log("suma");
      break;

    case "-":
      agregaSimbolo(teclaValue)
      console.log("resta");
      break;

    case "/":
      agregaSimbolo(teclaValue)
      console.log("división");
      break;

    case "x":
      agregaSimbolo(teclaValue)
      console.log("multiplicación");
      break;

    case "CE":
      borraTodo();
      console.log("Borra todo");
      break;

    case "=":
      console.log("resultado");
      break;

    default:
      agregaDigito(teclaValue);
      console.log("agrega el digito");

  }

  updateScreen();
}

function agregaSimbolo(simbolo){
  if(resultado.length > 0){
    resultado += ` ${simbolo} `;
  }
}

function borraTodo(){
  resultado = "";
}

function agregaDigito(stringValue){
  resultado += stringValue;
}

// Actualiza la pantalla con el valor de 'resultado'
function updateScreen() {
  pantalla.innerHTML = resultado;
}