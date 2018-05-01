// Obten el 'Array like Object' con todas las teclas
const teclado = document.getElementsByClassName("tecla");

// Obten el objeto HTML de la pantalla
const pantalla = document.querySelector('.pantalla');

// Declara el valor actual de la calculadora
let resultadoScreen = "";
let newNumber = "";
let resultadoHold = [];


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
      agregaPaso(teclaValue);
      agregaSimbolo(teclaValue);
      borraNewNumber();
      console.log("suma");
      break;

    case "-":
      agregaPaso(teclaValue);
      agregaSimbolo(teclaValue);
      borraNewNumber();
      console.log("resta");
      break;

    case "/":
      agregaPaso(teclaValue);
      agregaSimbolo(teclaValue);
      borraNewNumber();
      console.log("división");
      break;

    case "x":
      agregaPaso(teclaValue);
      agregaSimbolo(teclaValue);
      borraNewNumber();
      console.log("multiplicación");
      break;

    case "CE":
      borraTodo();
      console.log("Borra todo");
      break;

    case "=":
      agregaUltimaCifra();
      obtenResultado();
      console.log("resultadoScreen");
      break;

    default:
      agregaDigito(teclaValue);
      agregaDigitoNewNumber(teclaValue);
      console.log("agrega el digito");

  }

  updateScreen();
}

function agregaPaso(paso){
  if(resultadoScreen.length > 0) {
    resultadoHold.push(newNumber);
    resultadoHold.push(paso);
  }
}

function agregaSimbolo(simbolo){
  if(resultadoScreen.length > 0){
    resultadoScreen += ` ${simbolo} `;
  }
}

function borraTodo(){
  resultadoScreen = "";
  resultadoHold = [];
  newNumber = "";
}

function borraNewNumber(){
  newNumber = "";
}

function agregaDigito(stringValue){
  resultadoScreen += stringValue;
}

function agregaUltimaCifra(){
  resultadoHold.push(newNumber);
}

function agregaDigitoNewNumber(stringValue){
  newNumber += stringValue;
}

function obtenResultado(){
  console.log(resultadoHold);
}

// Actualiza la pantalla con el valor de 'resultadoScreen'
function updateScreen() {
  pantalla.innerHTML = resultadoScreen;
}

