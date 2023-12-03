function dividirEnParesEImpares(array) {
    const pares = [];
    const impares = [];

    for (const numero of array) {
        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    }

    return [pares, impares];
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [pares, impares] = dividirEnParesEImpares(numeros);

console.log("Array original:", numeros.join(', '));
console.log("Array de pares:", pares.join(', '));
console.log("Array de impares:", impares.join(', '));
console.log("Arrays concatenados:", pares.concat(impares).join(', '));
