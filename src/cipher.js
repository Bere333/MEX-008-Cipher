window.cipher = {
  encode: (offset, string) => {//aqui se llaman los parametros que definieron en el index.js, por eso no afecta que cambien los nombres(los llama).
    let offset2 = parseInt(offset);//Convertir el string de offset1(porque es un string) a numero para que pueda ser usado en la formula
    //console.log(typeof offset2) se uso para ver el tipo de dato
     let letters = "";//caja vacía para guardar los strings que se generen en el bucle for
     let indexM = 0;//indice con el que se inicia(queremos que comience al principio de las palabras introducidas)
     for (let i = 0; i < string.length; i = i + 1){//queremos que cumpla la condicion de que, al empezar con el indice de la primer letra, i sea menor que la longitud de la palabra introducida
       let charAtMessage = string.charAt(i);
       //console.log(charAtMessage);
       let indexAscii = string.indexOf(charAtMessage);
       //console.log(indexAscii);
       let asciiMessage = string.charCodeAt(indexAscii);//número ASCII del primer carácter del mensaje introducido. Aumenta en uno con cada ciclo for terminado
       //console.log(asciiMessage);
       let asciiLetter = (asciiMessage - 65 + offset2)%26 + 65;//Obtiene el número de ASCII del indice dado
       //console.log(asciiLetter);
       let letterCipher = String.fromCharCode(asciiLetter);//Dado el numero ASCII devuelve la letra correspondiente en ASCII
       //console.log(letterCipher);
       letters = letters + letterCipher;
       //console.log(letters);
       //document.getElementById("cipher1").value = letters;//mostrar valor en el input con id=cipher1
       //console.log("hola");
       indexM = indexM + 1;
       //return letters;

       //console.log(letters); se uso para ver todas las letras
    }
    return letters;
  }, 
decode: (offset, string) => {
  let offset3 = parseInt(offset);//Convertir el string de offset1(porque es un string) a numero para que pueda ser usado en la formula
  //console.log(typeof offset2) se uso para ver el tipo de dato
   let letters1 = "";//caja vacía para guardar los strings que se generen en el bucle for
   //let indexM1 = 0;//indice con el que se inicia(queremos que comience al principio de las palabras introducidas)
   for (let i = 0; i < string.length; i = i + 1){//queremos que cumpla la condicion de que, al empezar con el indice de la primer letra, i sea menor que la longitud de la palabra introducida
     let charAtMessage1 = string.charAt(i);
     //console.log(charAtMessage);
     let indexAscii1 = string.indexOf(charAtMessage1);
     //console.log(indexAscii);
     let asciiMessage1 = string.charCodeAt(indexAscii1);//número ASCII del primer carácter del mensaje introducido. Aumenta en uno con cada ciclo for terminado
     //console.log(asciiMessage);
     let asciiLetter1 = (asciiMessage1 - 90 - offset3)%26 + 90;//Obtiene el número de ASCII del indice dado
     //console.log(asciiLetter);
     let letterCipher1 = String.fromCharCode(asciiLetter1);//Dado el numero ASCII devuelve la letra correspondiente en ASCII
     //console.log(letterCipher);
     letters1 = letters1 + letterCipher1;
     //console.log(letters);
     //document.getElementById("cipher1").value = letters;//mostrar valor en el input con id=cipher1
     //console.log("hola");
     //indexM1 = indexM1 + 1;
   }
   return letters1;
}
};
