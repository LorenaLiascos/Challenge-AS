// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// app.js

let listaDeAmigos = []; // Lista para almacenar los nombres de los amigos

function agregarAmigo() {
  const nombreAmigo = document.getElementById("amigo").value.trim(); // Obtener el nombre del campo de entrada y quitar espacios en blanco

  if (nombreAmigo === "") {
    alert("Por favor, ingrese un nombre válido."); // Validar que el nombre no esté vacío
    return;
  }

  listaDeAmigos.push(nombreAmigo); // Agregar el nombre a la lista
  actualizarListaAmigos(); // Actualizar la lista en la página
  document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
}

function actualizarListaAmigos() {
  const listaAmigosElement = document.getElementById("listaAmigos");
  listaAmigosElement.innerHTML = ""; // Limpiar la lista antes de actualizarla

  listaDeAmigos.forEach((amigo) => {
    const listItem = document.createElement("li"); // Crear un elemento de lista (li) para cada nombre
    listItem.textContent = amigo; // Establecer el texto del elemento de lista como el nombre del amigo
    listaAmigosElement.appendChild(listItem); // Agregar el elemento de lista a la lista en la página
  });
}

function sortearAmigo() {
  if (listaDeAmigos.length < 2) {
    alert("Por favor, agregue al menos dos amigos para el sorteo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length); // Generar un índice aleatorio
  const amigoSecreto = listaDeAmigos[indiceAleatorio]; // Obtener el amigo secreto de la lista usando el índice aleatorio
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `<li>${amigoSecreto} es tu amigo secreto!</li>`; // Mostrar el amigo secreto en la página
}