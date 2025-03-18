🎉 Aplicación de Sorteo de Amigos Secretos 🎉

¡Bienvenido al repositorio de la Aplicación de Sorteo de Amigos Secretos! 
Este proyecto es una aplicación web simple desarrollada en JavaScript que 
permite a los usuarios agregar nombres a una lista y realizar un sorteo para 
seleccionar un amigo secreto al azar.

------------------------------------------------------------------------------

🚀 Funcionalidades: 

🚀 Agregar nombres a la lista:

* Los usuarios pueden ingresar nombres en un campo de texto.
* Cada nombre se valida para asegurarse de que no esté vacío.
* Se eliminan los espacios en blanco innecesarios con trim().
*Los nombres válidos se almacenan en un arreglo llamado listaDeAmigos.

🚀 Actualizar la lista visual:
* La lista se actualiza dinámicamente en la página cada vez que se agrega un nombre.
* Se recorre el arreglo con forEach() y se muestra cada nombre en un elemento <li>.

🚀 Realizar el sorteo:

* La aplicación verifica que haya al menos dos nombres en la lista.
* Usa Math.random() y Math.floor() para generar un índice aleatorio.
* Selecciona un nombre de la lista y lo muestra como el amigo secreto.
  
------------------------------------------------------------------------------

🛠️ Estructura del Código
El código principal se encuentra en el archivo app.js y está organizado de la siguiente manera:

🛠️ Variables
* listaDeAmigos: Un arreglo que almacena los nombres ingresados por los usuarios.

🛠️ Funciones

1. agregarAmigo():

* Agrega nombres al arreglo.
* Actualiza la lista visual.
* Limpia el campo de texto después de agregar un nombre.

2. actualizarListaAmigos():

* Muestra los nombres en la página.
* Limpia la lista anterior antes de actualizarla.

3. sortearAmigo():

* Realiza el sorteo.
* Muestra el nombre seleccionado como el amigo secreto.

------------------------------------------------------------------------------

📋 Cómo Usar

1. Clona este repositorio en tu máquina local:
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git

2. Abre el archivo index.html en tu navegador.
3. Ingresa los nombres en el campo de texto y presiona el botón para agregarlos.
4. Asegúrate de tener al menos dos nombres en la lista.
5. Presiona el botón de sorteo para seleccionar un amigo secreto al azar.

------------------------------------------------------------------------------
📌 Requisitos

* Navegador web moderno (Chrome, Firefox, Edge, etc.).
*No se necesitan dependencias externas.

------------------------------------------------------------------------------

🧑‍💻 Contribuciones
¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama con tu nueva funcionalidad (git checkout -b nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -m 'Añade nueva funcionalidad').
4. Haz push a la rama (git push origin nueva-funcionalidad).
5. Abre un Pull Request.

------------------------------------------------------------------------------






