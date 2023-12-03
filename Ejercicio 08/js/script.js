const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
const javascript2 = ["Objetos", "Arrays", "ParseInt"];

function encontrarRepetidos(array1, array2) {
    const repetidos = [];

    for (const elemento of array1) {
        if (array2.includes(elemento)) {
            repetidos.push(elemento);
        }
    }

    return repetidos;
}

const elementosRepetidos = encontrarRepetidos(javascript1, javascript2);

if (elementosRepetidos.length > 0) {
    console.log("Elementos repetidos:", elementosRepetidos.join(', '));
} else {
    console.log("No hay elementos repetidos.");
}
