//Funcionalidad de los botones
//Funcionalidad de boton1
document.getElementById("boton1").addEventListener("click", () => { //funcion flecha
  console.log("boton1"); //testear boton1
  let bienvenidaBoson = document.getElementById("bienvenidaBoson");/*Se creo una variable
  para la seccion llamada bienvenidaBoson*/
  bienvenidaBoson.style.display = "none"; /*La variable const Boson se hace
  desaparecer con none al hacer click en el boton1*/
  let ayuda2 = document.getElementById("ayudaBoson");/*llama a la seccion ayudaBoson*/
  ayudaBoson.style.display = "none";/*Esconde la seccion ayudaBoson*/
  let encriptar = document.getElementById("encriptar");/*llama a la seccion encriptar*/
  encriptar.style.display = "block";/*Esconde la seccion encriptar*/

});

document.getElementById("boton2").addEventListener("click", () => { //funcion flecha
  console.log("boton2");//testear boton2
  let bienvenidaBoson = document.getElementById("bienvenidaBoson")/*Se creo una variable
  para la seccion llamada bienvenidaBoson*/
  bienvenidaBoson.style.display = "none";/*La variable const Boson se hace
  desaparecer con none al hacer click en el boton1*/
  let ayuda3 = document.getElementById("ayudaBoson");
  ayudaBoson.style.display = "none";
  let encriptar2 = document.getElementById("encriptar");
  encriptar.style.display = "none";
})

document.getElementById("boton3").addEventListener("click", () => {
  console.log("boton3");
  let bienvenidaBoson = document.getElementById("bienvenidaBoson");/*Se creo una variable
  para la seccion llamada bienvenidaBoson*/
  bienvenidaBoson.style.display = "none";/*La variable const Boson se hace
  desaparecer con none al hacer click en el boton1*/
  let ayuda = document.getElementById("ayudaBoson");/*Se creo una variable para la seccion de ayuda*/
  ayudaBoson.style.display = "block";/*La variable ayuda se hace desaparecer
   con block al hacer click en el boton3*/
})

document.getElementById("boton4").addEventListener("click", () => {
  console.log("boton4");
  let ocultarPagina = document.getElementById("ayudaBoson");
  ayudaBoson.style.display = "none";
  let regresar = document.getElementById("bienvenidaBoson");
  bienvenidaBoson.style.display = "block";
})

document.getElementById("boton5").addEventListener("click", () => {
  console.log("boton5");
  let ocultarEncriptar = document.getElementById("encriptar");
  encriptar.style.display = "none";
  let mostrarInstruccionesE =document.getElementById("instruccionesE");
  instruccionesE.style.display = "block";
})

document.getElementById("boton7").addEventListener("click", () => {
  console.log("boton7");
  let ocultarDesencriptar = document.getElementById("instruccionesE");
  instruccionesE.style.display = "none";
  let regresarDesencriptar = document.getElementById("encriptar")
  encriptar.style.display = "block";
})

document.getElementById("boton8").addEventListener("click", () => {
  console.log("boton8");
  let ocultarEncriptar1 = document
})

document.getElementById("boton6").addEventListener("click", () => {
console.log('boton6');

let message = document.getElementById("paraEncriptar").value;//contenido del mensaje introducido
console.log(message);
let offset1= document.getElementById("offset").value;//valor de offset o número fijo en la fórmula del código ASCII
console.log(offset1);
let lengthMessage = message.length;//longitud de mensaje introducido
console.log(lengthMessage);
let indexM = 0;
for (let i = 0; i < lengthMessage; i = i + 1){
  const charAtMessage = message.charAt(indexM);
  console.log(charAtMessage);
  let indexAscii = message.indexOf(charAtMessage);
  console.log(indexAscii);
  let asciiMessage = message.charCodeAt(indexAscii);//número ASCII del primer carácter del mensaje introducido. Aumenta en uno con cada ciclo for terminado
  console.log(asciiMessage);
  const asciiLetter = (asciiMessage - 65 + offset1) % 26 + 65;//Obtiene el número de ASCII del indice dado
  console.log(asciiLetter);
  const letterCipher = String.fromCharCode(asciiLetter);//Dado el numero ASCII devuelve la letra correspondiente en ASCII
  console.log(letterCipher);
  document.getElementById("cipher1").value = letterCipher;//mostrar valor en el input con id=cipher1
  console.log("hola");
  indexM = indexM + 1;
  console.log(indexM);
}

  });
