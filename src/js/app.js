// Obten el 'Array like Object' con todas las teclas
const teclado = document.getElementsByClassName("tecla");

// Obten el objeto HTML de la pantalla
const pantalla = document.querySelector('.pantalla');

// Declara el valor actual de la calculadora
let resultado = 0;


// Lee cada una de las teclas de la calculadora
for (let tecla = 0; tecla <= 15; tecla++) {
  teclado[tecla].addEventListener('click', function (e) {
    let = teclaValue = e.target.attributes["value"].value;
    updateScreen(teclaValue);
  });
}

// Actualiza la pantalla cada que una tecla es presionada
function updateScreen(teclaValue) {
  switch (teclaValue) {
    case "+":
      console.log("suma");
      break;

    case "-":
      console.log("resta");
      break;

    case "/":
      console.log("división");
      break;

    case "x":
      console.log("multiplicación");
      break;

    case "CE":
      console.log("Borra todo");
      break;

    case "=":
      console.log("resultado");
      break;

    default:
      console.log("agrega el digito");

  }
  pantalla.innerText = resultado;
}