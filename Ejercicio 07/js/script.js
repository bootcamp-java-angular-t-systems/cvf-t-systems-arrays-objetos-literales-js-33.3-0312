const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imprimirMayoresQueCinco(array) {
    for (const numero of array) {
        if (numero > 5) {
            console.log(numero);
        }
    }
}

imprimirMayoresQueCinco(numeros);