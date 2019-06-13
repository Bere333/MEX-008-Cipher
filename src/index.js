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
