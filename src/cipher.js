window.cipher = {
  encode: (offset1,message) => {
  let lengthMessage = message.length;
  let letters = " ";//caja vacía para guardar los strings que se generen en el bucle for
  let indexM = 0;//indice con el que se inicia(queremos que comience al principio de las palabras introducidas)
  for (let i = 0; i < lengthMessage; i = i + 1){//queremos que cumpla la condicion de que, al empezar con el indice de la primer letra, i sea menor que la longitud de la palabra introducida
    const charAtMessage = message.charAt(indexM);
    //console.log(charAtMessage);
    let indexAscii = message.indexOf(charAtMessage);
    //console.log(indexAscii);
    let asciiMessage = message.charCodeAt(indexAscii);//número ASCII del primer carácter del mensaje introducido. Aumenta en uno con cada ciclo for terminado
    //console.log(asciiMessage);
    const asciiLetter = (asciiMessage - 65 + offset1 % 26) + 65;//Obtiene el número de ASCII del indice dado
    //console.log(asciiLetter);
    const letterCipher = String.fromCharCode(asciiLetter);//Dado el numero ASCII devuelve la letra correspondiente en ASCII
    //console.log(letterCipher);
    letters = letters + letterCipher;
    //console.log(letters);
    //document.getElementById("cipher1").value = letters;//mostrar valor en el input con id=cipher1
    //console.log("hola");
    indexM = indexM + 1;
    //return letters;
    //console.log(indexM);
  }
  return letters;
}
};
