//Funcionalidad de los botones
//Funcionalidad de boton1
document.getElementById("boton1").addEventListener("click", () => { //funcion flecha
  //console.log("boton1"); //testear boton1
  let bienvenidaBoson = document.getElementById("bienvenidaBoson");/*Se creo una variable
  para la seccion llamada bienvenidaBoson*/
  bienvenidaBoson.style.display = "none"; /*La variable const Boson se hace
  desaparecer con none al hacer click en el boton1*/
  let ayuda2 = document.getElementById("ayudaBoson");/*llama a la seccion ayudaBoson*/
  ayuda2.style.display = "none";/*Esconde la seccion ayudaBoson*/
  let encriptar = document.getElementById("encriptar");/*llama a la seccion encriptar*/
  encriptar.style.display = "block";/*Esconde la seccion encriptar*/

});

document.getElementById("boton2").addEventListener("click", () => { //funcion flecha
  //console.log("boton2");//testear boton2
  let bienvenidaBoson = document.getElementById("bienvenidaBoson")/*Se creo una variable
  para la seccion llamada bienvenidaBoson*/
  bienvenidaBoson.style.display = "none";/*La variable const Boson se hace
  desaparecer con none al hacer click en el boton1*/
  let ayuda3 = document.getElementById("ayudaBoson");
  ayuda3.style.display = "none";
  let encriptar2 = document.getElementById("encriptar");
  encriptar2.style.display = "none";
});

document.getElementById("boton3").addEventListener("click", () => {
  //console.log("boton3");
  let bienvenidaBoson = document.getElementById("bienvenidaBoson");/*Se creo una variable
  para la seccion llamada bienvenidaBoson*/
  bienvenidaBoson.style.display = "none";/*La variable const Boson se hace
  desaparecer con none al hacer click en el boton1*/
  let ayuda = document.getElementById("ayudaBoson");/*Se creo una variable para la seccion de ayuda*/
  ayuda.style.display = "block";/*La variable ayuda se hace desaparecer
   con block al hacer click en el boton3*/
});

document.getElementById("boton4").addEventListener("click", () => {
  //console.log("boton4");
  let ocultarPagina = document.getElementById("ayudaBoson");
  ocultarPagina.style.display = "none";
  let regresar = document.getElementById("bienvenidaBoson");
  regresar.style.display = "block";

});

document.getElementById("boton5").addEventListener("click", () => {
  //console.log("boton5");
  let ocultarEncriptar = document.getElementById("encriptar");
  ocultarEncriptar.style.display = "none";
  let mostrarInstruccionesE =document.getElementById("instruccionesE");
  mostrarInstruccionesE.style.display = "block";
});

document.getElementById("boton7").addEventListener("click", () => {
  //console.log("boton7");
  let ocultarDesencriptar = document.getElementById("instruccionesE");
  ocultarDesencriptar.style.display = "none";
  let regresarDesencriptar = document.getElementById("encriptar");
  regresarDesencriptar.style.display = "block";
});


document.getElementById("boton2").addEventListener("click", () => {
  //console.log("boton7");
  let ocultarDesencriptar = document.getElementById("instruccionesE");
  ocultarDesencriptar.style.display = "none";
  let regresarDesencriptar = document.getElementById("encriptar");
  regresarDesencriptar.style.display = "none";
  let mostrarDesencriptar = document.getElementById("desencriptar");
  mostrarDesencriptar.style.display ="block";
});

document.getElementById("botonInsD").addEventListener("click", () => {
  let mostrarDesencriptar = document.getElementById("desencriptar");
  mostrarDesencriptar.style.display ="none";
  let mostrarInstruccionesD = document.getElementById("instruccionesD");
  mostrarInstruccionesD.style.display = "block";
});

document.getElementById("botonRD").addEventListener("click", () => {
  let mostrarInstruccionesD = document.getElementById("instruccionesD");
  mostrarInstruccionesD.style.display = "none";
  let mostrarDesencriptar = document.getElementById("desencriptar");
  mostrarDesencriptar.style.display ="block";
});
document.getElementById("boton8").addEventListener("click", () => {
  let regresarDesencriptar = document.getElementById("encriptar");
  regresarDesencriptar.style.display = "none";
  let bienvenidaBoson = document.getElementById("bienvenidaBoson");
  bienvenidaBoson.style.display = "block";
});

document.getElementById("botonRi2").addEventListener("click", () => {
  let mostrarDesencriptar = document.getElementById("desencriptar");
  mostrarDesencriptar.style.display ="none";
  let bienvenidaBoson = document.getElementById("bienvenidaBoson");
  bienvenidaBoson.style.display = "block";
});



document.getElementById("boton6").addEventListener("click", () => {//se manda llamar el boton
let message = document.getElementById("paraEncriptar").value; //contenido del mensaje introducido
//console.log(message);
let offset1= document.getElementById("offset").value; //Manda a llamar al offset introducido(el offset no es un numero es una string)
let encode1 = window.cipher.encode(offset1, message);//llama a la propiedad encode (a su vez encode es una funcion metodo) del onjeto window.cipher con estos parametros
document.getElementById("cipher1").value = encode1;//utilizo el objeto anterior para mostrar el codigo en el input

});

document.getElementById("botonDesencriptar").addEventListener("click", () => {//se manda llamar el boton
let message1 = document.getElementById("paraDesencriptar").value; //contenido del mensaje introducido
//console.log(message);
let offset2= document.getElementById("offsetDes1").value; //Manda a llamar al offset introducido(el offset no es un numero es una string)
let decode1 = window.cipher.decode(offset2, message1);//llama a la propiedad encode (a su vez encode es una funcion metodo) del onjeto window.cipher con estos parametros
document.getElementById("cipher3").value = decode1;//utilizo el objeto anterior para mostrar el codigo en el input

});
