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
        
       limpiarResultado(); //Se llama a la función para limpiar el nombre sorteado al escribir uno nuevo
       mostrarAmigos();
         
    }
}   

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; //Para limpiar la lista existente al actualizar la página

    for (let i = 0; i < nombresDeAmigos.length; i++) {
        const cadaAmigo = document.createElement("li"); //Crea un nuevo elemento <li> 
        cadaAmigo.textContent = nombresDeAmigos[i] //Asigna el texto al <li> con el nombre del array
        lista.appendChild(cadaAmigo); //Agrega el <li> a la lista de <ul> en el archivo HTML
     //El bucle que itera el array y crea elementos de lista <li> para cada nombre agregado
    }
}   


function sortearAmigo() {
    //Verificando si el array esta vació.
    if (nombresDeAmigos.length === 0) { 
        alert ("No has digitado ningún nombre para ser sorteado"); 
        resultado.textContent = "";
        return; 
    }  
    //Se genera un índice aleatorio del array
   const indiceAleatorio = Math.floor(Math.random() * nombresDeAmigos.length); 

   const nombreSorteado = nombresDeAmigos[indiceAleatorio];
   //Se obtiene el nombre sorteado
   
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = (`El amigo sorteado es ${nombreSorteado}`);
    //Se muestra el resultado del sorteo en la pantalla    
     
    //EXTRA
    //Eliminar el nombre sorteado del array para que no vuelva a ser seleccionado en un nuevo sorteo con los mismos nombres
    nombresDeAmigos.splice(indiceAleatorio, 1);

    //Actualiza la lista visible en la página para ver que el nombre ya no está porque ya fue sorteado
    mostrarAmigos();
    
}   

//Limpiar el resultado del sorteo cada vez que se digita un nuevo nombre
function limpiarResultado() {
    document.getElementById("resultado").textContent = ""

}

