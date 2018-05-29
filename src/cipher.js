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