window.cipher = {
  encode: (offset, string) => {
    let offset2 = parseInt(offset);//Convertir el string de offset1(porque es un string) a numero
    //console.log(typeof offset2) se uso para ver el tipo de dato

    //let lengthMessage = string.length;
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
    }
    };

    
