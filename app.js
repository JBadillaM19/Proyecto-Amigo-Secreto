// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresDeAmigos = [];
//Creación del array


function agregarAmigo() {
    let nombreEscrito = document.getElementById("amigo").value;
    //capturando el valor ingresado
    if (nombreEscrito.trim() === "") {
        alert ("Por favor, ingresa un nombre");
    } else {
        nombresDeAmigos.push(nombreEscrito);

        document.getElementById("amigo").value = "";
        console.log(nombresDeAmigos);
    }
}