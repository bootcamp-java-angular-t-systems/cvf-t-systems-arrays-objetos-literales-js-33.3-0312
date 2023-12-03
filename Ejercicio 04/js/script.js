const stringEjempo = "Hola";

const conversionArray = stringEjempo.split('');
const arrayInvertido = conversionArray.reverse();
const stringInvertida = arrayInvertido.join('');

console.log("String original:", stringEjempo);
console.log("Array invertido:", arrayInvertido);
console.log("String invertida:", stringInvertida);
