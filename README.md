# Cifrado César

## Preámbulo

Está próxima la fecha del cumpleaños de tu flacx (novix) y estás organizando una
fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto
con amigos y familiares.

Un gran problema es que pones tu alarma para levantarte temprano, sin embargo
(como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma
y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides
crear una aplicación que te permita enviar mensajes cifrados y que las demás
personas (partícipes de la fiesta) puedan tener una interfaz para
descifrarlo. Así que ahora te toca aplicar tus superpoderes 😎

## Introducción

El Cifrado César es uno de los primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

## Organización de Trabajo a Desarrollar

La Organización puede ser revisada en este link (https://trello.com/b/4cawPYas/proyecto-cifrado-cesar)
Como adicional se adjuntan imagenes al final del Documento, donde se muestra desarrollo inicial, que fueron consideradas en la toma de decisiones.

### UI

La interfaz debe permitir al usuario:

* Elegir un `offset` indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.
* Alerta a usuario si los campos estan vacíos ya sea en Desplazamiento, y áreas de texto.
* Limpia los campos para comenzar nuevamente.
* Copiar mensaje de Cifrar o Decifrar.
* Si usuario tiene dudas, existe botón de ayuda con explicación.

## Hacker edition

No estás limitada a implementar solo la parte obligatoria. 
Te sugerimos algunas cosas:
* Se realizan 2 test adicionales siguiendo el formato dado.
* El programa es capaz de cifrar minúsculas.


## Entrega

El proyecto es entregado el 01-06-2018



***
  ![Lista de tareas](/src/img/trelloPapel1.jpg)
    ![Lista de tareas2](/src/img/trelloPapel2.jpg)