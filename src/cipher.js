window.cipher = {
  encode: (message, offSet) => { 
     const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ abcdefghijklmnñopqrstuvwxyz1234567890áéíóú.,";
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
     const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ abcdefghijklmnñopqrstuvwxyz1234567890áéíóú.,";
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