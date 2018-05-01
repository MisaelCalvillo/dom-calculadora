var teclado = document.getElementsByClassName("tecla");
console.log(teclado);

// Lee cada una de las teclas de la calculadora
for(let tecla = 0; tecla <= 15; tecla++){
  teclado[tecla].addEventListener('click', function(e){
    console.log(e.target.attributes["value"].value);
  });
  // console.log(teclado[tecla].attributes.value.value);
}
// number.forEach(function(element){
//   console.log(element);
// });



// function displayNumber() {
//   document.querySelector('.pantalla').innerText = number;
// }

var pantalla = document.querySelector('.pantalla');
pantalla.innerText = "HoLi";
console.log(pantalla);