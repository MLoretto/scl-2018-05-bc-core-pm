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

1 Crear Ambiente de Desarrollo
  Editor de Texto = Visual Studio Code
  Node
  GIT
  MOCHA
  Trello (https://trello.com/b/4cawPYas/proyecto-cifrado-cesar)
  GitHub

2 UX
  Desarrollo de Encuasta




## Consideraciones generales

Deben comenzar a familiarizarse con ES6 por lo cual tendrán que hacer uso de 
`const`, `let` y `arrow function`.
En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

## Parte obligatoria

### UI

La interfaz debe permitir al usuario:

* elegir un `offset` indicando cuántas posiciones queremos que el cifrado
  desplace cada caracter
* insertar un mensaje (texto) que queremos cifrar
* ver el resultado del mensaje cifrado
* insertar un mensaje (texto) a descifrar
* ver el resultado del mensaje descifrado
* hacer uso de `const`, `let` y `arrow function`

### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener to _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar dos funciones:
    - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
       queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
       que queremos cifrar.
    - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
      queremos mover a la izquierda del alfabeto y `string` el mensaje (texto) 
      que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene los tests que deberás correr
  para ver que todo funcione correctamente.

## Hacker edition

No estás limitada a implementar solo la parte obligatoria. 
Te sugerimos algunas cosas:
* Se realizan 2 test adicionales siguiendo el formato dado.
* El programa sea capaz de cifrar minúsculas.


## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages.





***
  ![Lista de tareas](/src/img/trelloPapel1.jpg)
    ![Lista de tareas2](/src/img/trelloPapel2.jpg)