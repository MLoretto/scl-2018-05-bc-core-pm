  function clickCifrar(){
	  if(Valid("cifrar")){ //Ejecuta función de validación para cifrar.
      const offSet = document.getElementById("offSetGo").value; //Obtengo valor de Offset
      const message =  document.getElementById("getMessage").value; //Obtengo Mensaje
      const messageEncode = cipher.encode(message,offSet); //Envia paramentros a cipher.encode (Para codificarlo)
      document.getElementById("showMessage").value = messageEncode; //Mensaje Codificado se despliega en ("showMessage")
	  }
  }
  
  function clickDecifrar(){
    if(Valid("decifrar")){ //Ejecuta función de validación para Decifrar.
      const offSet = document.getElementById("offSetGo").value; //Obtengo valor de Offset
      const message =  document.getElementById("showMessage").value; //Obtengo Mensaje
      const messageDecode = cipher.decode(message,offSet); //Envia paramentros a cipher.decode (Para decodificarlo)
      document.getElementById("getMessage").value = messageDecode;//Mensaje Decodificado se despliega en ("getMessage")
	  }
  }

  
  function Valid(opcion){//Valida que exista contenido en los cuadros de texto.
    let isValid = true;//Asigno valor por defecto.(Si entra en una retornara False)
    if (document.getElementById("offSetGo").value == ""){
		  document.getElementById("msgErrorOffSet").style.display = "block";
      isValid = false;
    }else{
		  document.getElementById("msgErrorOffSet").style.display = "none";
	  }
    switch (opcion) { //Selecciona la opción (Cifrar o Decifrar) y ejecuta bloque correspondiente.
      case "cifrar":
        if(document.getElementById("getMessage").value==""){
			    document.getElementById("msgErrorCifrar").style.display = "block";
          isValid =  false;
        }else{
			    document.getElementById("msgErrorCifrar").style.display = "none";
		    }
        break;
      case "decifrar":
        if(document.getElementById("showMessage").value==""){
			    document.getElementById("msgErrorDecifrar").style.display = "block";
          isValid =  false;
        }else{
			    document.getElementById("msgErrorDecifrar").style.display = "none";
		    }
        break;
    }
    return isValid;
  }

  function clickClear(){ //Botón para limpiar.
    document.getElementById("offSetGo").value = "";
    document.getElementById("showMessage").value = "";
    document.getElementById("getMessage").value = "";
    document.getElementById("msgErrorDecifrar").style.display = "none";
    document.getElementById("msgErrorCifrar").style.display = "none";
    document.getElementById("msgErrorOffSet").style.display = "none";
  }

  function copyCifrar(){ //Al hacer click en el botón ejecuta esta función para copiar contenido Cifrado.
    const encodeText =  document.getElementById("getMessage");
    encodeText.select();//Selecciona el contenido del elemento.
    document.execCommand("copy");
  }

  function copyDesifrar(){ //Al hacer click en el botón ejecuta esta función para copiar contenido Decifrado.
    const encodeText =  document.getElementById("showMessage");
    encodeText.select();
    document.execCommand("copy");
  }

  function closeHelp(){//Al hacer click en el botón cierra el panel de Ayuda.
    document.getElementById("helpContent").style.display = "none";
    document.getElementById("btnHelpMe").style.display = "block";
  }

  function openHelp(){//Al hacer click en el botón abre el panel de Ayuda.
    document.getElementById("helpContent").style.display = "block";
    document.getElementById("btnHelpMe").style.display = "none";
  }