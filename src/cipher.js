/*
window.cipher = {
  encode: (message, offSet ) => {
    let result = "";
    //repite el codigo caracter por caracter del mensaje.
    for(let index=0;index<message.length;index++){
      //toma el caracter por el indice INDEX y lo convierte en codigo ascii
      const code = message.charAt(index).charCodeAt();
      //valida que el rango sea un caracter mayuscula
      if(code > 64 && code < 91){
        var newCode = code + parseInt(offSet);//parseInt asegurar que sea número, lo convierto a num(LMS)
        //mientras sea mayor a 90 va restando 26 (cantidad de letras del alfabeto)
        while(newCode > 90){
          newCode -= 26; // El 26 le descuenta un alfabeto completo
        }
      }else if(code > 96 && code < 123){
        var newCode = code + parseInt(offSet);//parseInt asegurar que sea número, lo convierto a num(LMS)
        //mientras sea mayor a 122 va restando 26 (cantidad de letras del alfabeto)
        while(newCode > 122){
          newCode -= 26; // El 26 le descuenta un alfabeto completo
        }
      }else{
        //por mientras ~,para ver que hago con caracteres distintos.
        newCode = 126;
      }
      result += String.fromCharCode(newCode);
    }

	  return result;	
  },
  decode: (criptoMessage,offSet) => {
    let result = "";
    for(let index=0;index<criptoMessage.length;index++){
      const code = criptoMessage.charAt(index).charCodeAt();
      //quiere decir que es una mayuscula
      if(code > 64 && code < 91){
        var newOffSet = parseInt(offSet);
        var newCode = code - newOffSet;
        while(newCode < 65){
          //calcula el desface con respecto al principio del alfabedo para descontar despues al final.
          newCode =  (newCode - 64) + 90;
          newOffSet = newOffSet - 90;
        }
        result += String.fromCharCode(newCode);
      }else if(code > 96 && code < 123){
        var newOffSet = parseInt(offSet);
        var newCode = code - newOffSet;
        while(newCode < 97){
          //calcula el desface con respecto al principio del alfabedo para descontar despues al final.
          newCode =  (newCode - 96) + 122;
          newOffSet -= 122;
        }
        result += String.fromCharCode(newCode);
      }else if(code == 126){
        result += " ";
      }else{
        //por mientras ~,para ver que hago con caracteres distintos.
        code = 126;
      }
    }
    return result;	
  }
}
*/
window.cipher = {
  encode: (message, offSet) => { 
     //se declara un string con el alfabeto deseado
     const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ abcdefghijklmnñopqrstuvwxyz1234567890áéíóú.,";
     let result = "";
	 //se recorre letra a letra el mensaje
     for(let i=0;i<message.length;i++){
	   //se obtiene la letra, y se busca e el alfabeto y se obtiene el indice 
       const index = alphabet.indexOf(message.charAt(i), 0);
	   //si encuentra la letra 
       if(index != -1){
		 //suma al indice obtenido el desplazamiento (offset)
         let newIndex  = index + parseInt(offSet);
		 //si el indice nuevo es mayor al largo del alfabeto 
         if(newIndex > alphabet.length)
         {
		   //obtiene el factor representativo del largo total del desplazamiento en el alfabeto.
           let factor = newIndex / alphabet.length;
		   //multiplica el fator por el largo del alfabeto y obtiene un indice que este entre los limites del alfabeto
           newIndex -= parseInt(factor) * alphabet.length;
         }
		 //concatena la letra obtenida al resultado.
         result += alphabet[newIndex];
       }else{
		//sino encuentra la letra concatena ~   
        result += "~";
       }
     }
	 //retorna el resultado obtenido
     return result;	
   },
   decode: (criptoMessage,offSet) => {
	 //se declara un string con el alfabeto deseado
     const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ abcdefghijklmnñopqrstuvwxyz1234567890áéíóú.,";
     let result = "";
	  //se recorre letra a letra el mensaje
     for(let i=0;i<criptoMessage.length;i++){
	   //se obtiene la letra, y se busca e el alfabeto y se obtiene el indice 
       const index = alphabet.indexOf(criptoMessage.charAt(i), 0);
       //si no encuentra la letra 
	   if(index == -1){
		  //concatena la letra ~ 
          result += "~";
       }else{
		 //resta al indice obtenido el desplazamiento (offset)
         let newIndex  = index - parseInt(offSet);
		 //si el nuevo indice es menor que cero
         if(newIndex < 0)
         {
		   //reinicia el nuevo indice a 0	 
           newIndex = 0;
		   //determina el desface que existe entre el principio del alfabeto y el indice obtenido
           let desface = (parseInt(offSet) - index)
		   //obtiene la cantidad de alfabetos que existen entre el desface y el offset
           let bloques = parseInt(desface / alphabet.length);
           //resta los bloques al desface y obtiene un rango valido entre los limites del alfabeto
		   let resto = desface - (bloques * alphabet.length);
		   //como nos estamos devolviendo obtiene el largo del alfabeto y resta el resto obtenido anteriormente.
           newIndex = alphabet.length - resto;
         }
		 //concatena al resultado la letra obtenida
         result += alphabet[newIndex];
       }
     }
	 //retorna la palabra obtenida
     return result;	
   }
 }