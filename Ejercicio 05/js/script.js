function intercalarArrays(array1, array2) {
    const nuevoArray = [];

    for (let i = 0; i < array1.length; i++) {
        nuevoArray.push(array1[i], array2[i]);
    }

    return nuevoArray;
}

const arrayUno = [1, 2, 3];
const arrayDos = [4, 5, 6];
const nuevoArray = intercalarArrays(arrayUno, arrayDos);

console.log("Array Uno:", arrayUno.join(", "));
console.log("Array Dos:", arrayDos.join(", "));
console.log("Nuevo Array Intercalado:", nuevoArray.join(', '));

