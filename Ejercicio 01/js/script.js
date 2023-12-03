function obtenerLongitud(array) {
    console.log("Longitud del array:", array.length);
}

function obtenerElementoAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    const elementoAleatorio = array[indiceAleatorio];
    console.log("Elemento aleatorio del array:", elementoAleatorio);
}

const miArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
obtenerLongitud(miArray);
obtenerElementoAleatorio(miArray);

