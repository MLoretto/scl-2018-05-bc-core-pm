  function clickCifrar(){
	  if(isValid("cifrar")){
      //obtengo el offset
      const offSet = document.getElementById("offSetGo").value;
      //obtengo el mensaje
      const message =  document.getElementById("getMessage").value;
      //Utilizo la libreria cipher para codificar el mensaje
      const messageEncode = cipher.encode(message,offSet);
      //El mensaje encriptado lo muestro en el elemento "showMessage"
      document.getElementById("showMessage").value = messageEncode;
	  }
  }
  
  function clickDecifrar(){
    if(isValid("decifrar")){
      //obtengo el offset
      const offSet = document.getElementById("offSetGo").value;
      //obtengo el mensaje
      const message =  document.getElementById("showMessage").value;
      //utilizo la libreria cipher para decodificar el mensaje
      const messageDecode = cipher.decode(message,offSet);
      //El mensaje encriptado lo muestro en el elemento "getMessage"
      document.getElementById("getMessage").value = messageDecode;
	}
  
  }
  //valida que exista contenido en los cuadros de texto.
  function isValid(opcion){
    let valid = true;
    if (document.getElementById("offSetGo").value == ""){
		document.getElementById("msgErrorOffSet").style.display = "block";
      valid = false;
    }else{
		document.getElementById("msgErrorOffSet").style.display = "none";
	}
    switch (opcion) {
      case "cifrar":
        if(document.getElementById("getMessage").value==""){
			document.getElementById("msgErrorCifrar").style.display = "block";
          valid =  false;
        }else{
			document.getElementById("msgErrorCifrar").style.display = "none";
		}
        break;
      case "decifrar":
        if(document.getElementById("showMessage").value==""){
			document.getElementById("msgErrorDecifrar").style.display = "block";
          valid =  false;
        }else{
			document.getElementById("msgErrorDecifrar").style.display = "none";
		}
      break;
    }
    return valid;
  }

  function clickClear(){
    //limpio todo
    document.getElementById("offSetGo").value = "";
    document.getElementById("showMessage").value = "";
    document.getElementById("getMessage").value = "";
  
  }

  function copyCifrar(){
    const encodeText =  document.getElementById("getMessage");
    encodeText.select();
    document.execCommand("copy");
  }

  function copyDesifrar(){
    const encodeText =  document.getElementById("showMessage");
    encodeText.select();
    document.execCommand("copy");
  }