function clickCifrar(){
    //obtengo el offset
    var offSet = document.getElementById("offSetGo").value;
    //obtengo el mensaje
    var message =  document.getElementById("getMessage").value;
    //Utilizo la libreria cipher para codificar el mensaje
    var messageEncode = cipher.encode(message,offSet);
    //El mensaje encriptado lo muestro en el elemento "showMessage"
    document.getElementById("showMessage").value = messageEncode;

  }
  
  function clickDecifrar(){
    //obtengo el offset
    var offSet = document.getElementById("offSetGo").value;
    //obtengo el mensaje
    var message =  document.getElementById("showMessage").value;
    //utilizo la libreria cipher para decodificar el mensaje
    var messageDecode = cipher.decode(message,offSet);
    //El mensaje encriptado lo muestro en el elemento "getMessage"
    document.getElementById("getMessage").value = messageDecode;
  
  }

  function clickClear(){
    //limpio todo
    document.getElementById("offSetGo").value = "";
    document.getElementById("showMessage").value = "";
    document.getElementById("getMessage").value = "";
  
  }

  function copyCifrar(){
    let encodeText =  document.getElementById("getMessage");
    encodeText.select();
    document.execCommand("copy");
  }

  function copyDesifrar(){
    let encodeText =  document.getElementById("showMessage");
    encodeText.select();
    document.execCommand("copy");
  }