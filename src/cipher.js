window.cipher = {
  encode: (message, offSet ) => { //Codifica
    let result = "";
    for(let index=0;index<message.length;index++){//Recorre mensaje letra por letra.
      const code = message.charAt(index).charCodeAt();//Toma el caracter del mensaje y lo transforma en código ascii.
      if(code > 64 && code < 91){//Rango de ascii Mayúsculas
        var newCode = code + parseInt(offSet);//Suma desplazamiento al valor númerico de el caracter ascii.
        while(newCode > 90){//Mientras el valor númerico de newCode sea mayor a 90 ira restando 26(Largo alfabeto)
          newCode -= 26; 
        }
      }else if(code > 96 && code < 123){//Rango de ascii Minúsculas
        var newCode = code + parseInt(offSet);//Suma desplazamiento al valor númerico de el caracter ascii.
        while(newCode > 122){//Mientras el valor númerico de newCode sea mayor a 122 ira restando 26(Largo alfabeto)
          newCode -= 26; 
        }
      }else{// Si no lo encuentra asignara caracter 126 código ascii ~
        newCode = 126;
      }
      result += String.fromCharCode(newCode);//Transforma el código ascii a letra y lo concatena a resultado.
    }
	  return result;	
  },
  decode: (criptoMessage,offSet) => { //Decofica
    let result = "";
    for(let index=0;index<criptoMessage.length;index++){//Recorre mensaje letra por letra.
      const code = criptoMessage.charAt(index).charCodeAt();//Toma el caracter del mensaje y lo transforma en código ascii.
      if(code > 64 && code < 91){//Rango de ascii Mayúsculas
        var newOffSet = parseInt(offSet);//Copia el offSet
        var newCode = code - newOffSet;//Resta el desplasamiento (offset) al código ascii obtenido.
        while(newCode < 65){//Mientras el valor númerico de newCode sea menor a 65 ira restando 64(Largo alfabeto)
          newCode =  (newCode - 64) + 90;//Resta el desfase al rango ascii.
          newOffSet = newOffSet - 90;//Obtiene el nuevo offset al restar el código de la última letra de ascii.
        }
        result += String.fromCharCode(newCode);//Transforma el código ascii a letra y lo concatena a resultado.
      }else if(code > 96 && code < 123){//Rango de ascii Minúsculas
        var newOffSet = parseInt(offSet);//Copia el offSet
        var newCode = code - newOffSet;//resta el desplasamiento (offset) al código ascii obtenido
        while(newCode < 97){//Mientras este fuera del rango de minúsculas del código Ascii
          newCode =  (newCode - 96) + 122;//Resta el desfase al rango ascii
          newOffSet -= 122;//Obtiene el nuevo offset al restar el código de la última letra de ascii.
        }
        result += String.fromCharCode(newCode);//Transforma el código ascii a letra y lo concatena a resultado.
      }else if(code == 126){//Si encuentra un ~ le asigna un espacio.
        result += " ";
      }else{//Si no encuentra el caracter en el rango de mayusculas o minusculas le asigna un ~
        code = 126;
      }
    }
    return result;	
  }
}

/* ESTA OPCION NO PASO LOS TEST :(
window.cipher = {
  encode: (message, offSet) => { 
     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";// abcdefghijklmnñopqrstuvwxyz1234567890áéíóú.,";
     let result = "";
     for(let i=0;i<message.length;i++){//Recorre mensaje caracter por caracter. 
       const index = alphabet.indexOf(message.charAt(i), 0);//Obtengo caracter,busca en el "String" y obtengo Indice.
       if(index != -1){ //Si... encuentra el caracter... 
         let newIndex  = index + parseInt(offSet);//Suma indice al desplazamiento (offset), obteniendo nuevo indice.
		     if(newIndex > alphabet.length){//Si... el nuevo indice es mayor al largo del "String"
           let factor = newIndex / alphabet.length;//Obtiene cuantos "String" caben entre el indice y el desplazamiento.
		       newIndex -= parseInt(factor) * alphabet.length;//Le resta al nuevo indice la cantidad de "String" obtenidos.
         }
         result += alphabet[newIndex];//Concatena la letra obtenida al resultado.
       }else{ //Si no encuentra el caracter, agregar ~
		     result += "~"; 
       }
     }
     return result;	
   },

   decode: (criptoMessage,offSet) => {
     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";// abcdefghijklmnñopqrstuvwxyz1234567890áéíóú.,";
     let result = "";
     for(let i=0;i<criptoMessage.length;i++){//Recorre mensaje caracter por caracter. 
       const index = alphabet.indexOf(criptoMessage.charAt(i), 0);//Obtengo caracter,busca en el "String" y obtengo Indice.
	     if(index != -1){//Si... encuentra el caracter... 
         let newIndex  = index - parseInt(offSet);//Resta indice al desplazamiento (offset), obteniendo nuevo indice.
         if(newIndex < 0){//Si... el nuevo indice es menor a cero. 
           newIndex = 0;//Se asigna 0 al nuevo indice.
           let desface = (parseInt(offSet) - index)//Resta el desface entre el indice y cero al offset.
           let bloques = parseInt(desface / alphabet.length);//Obtiene cantidad de "String" entre desface y 0.
		       let resto = desface - (bloques * alphabet.length);//Resta al desface la cantidad de "String" obtenido.
           newIndex = alphabet.length - resto;//Obtiene el indice restanto el "resto" al largo del "String"
         }
         result += alphabet[newIndex];//Concatena la letra obtenida al resultado.
       }else{
         result += "~";//Si no encuentra el caracter, agregar ~
       }
     }
     return result;	
  }
}
*/
