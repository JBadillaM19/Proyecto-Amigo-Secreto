// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresDeAmigos = [];
//Creación del array.

function agregarAmigo() {
    let nombreEscrito = document.getElementById("amigo");
    let nombreObtenido = nombreEscrito.value;
    //capturando el valor ingresado.
    if (nombreObtenido.trim() === "") {
        alert ("Por favor, ingresa un nombre");
        //Validando si el espacio de texto está vació.
    } else {
        nombresDeAmigos.push(nombreObtenido);
        //Si se ingreso un valor correcto en el espacio de texto, se agrega al array.
       nombreEscrito.value = "";
       //Se vacía el campo de texto despues de ingresar un valor.

       mostrarAmigos();
        console.log(nombresDeAmigos); }
        
}   

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; //Para limpiar la lista existente al actualizar la página
    for (let i = 0; i < nombresDeAmigos.length; i++) {
        const cadaAmigo = document.createElement("li");
        cadaAmigo.textContent = nombresDeAmigos[i]
        lista.appendChild(cadaAmigo);
    }
    //El bucle que itera el array y crea elementos de lista <li> para cada nombre agregado
}   



function sortearAmigo() {
    //Verificando si el array esta vació.
    if (nombresDeAmigos.length === "") { 
    alert ("No has digitado ningún nombre para poder sortear");
    } else {
        
    }   

}   

