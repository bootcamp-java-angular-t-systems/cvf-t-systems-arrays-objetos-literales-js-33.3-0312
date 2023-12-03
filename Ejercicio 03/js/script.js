const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

javascript1.splice(javascript1.indexOf("DOM"), 1, "Objetos");
javascript1.splice(javascript1.indexOf("Arrays"), 1, "ArraysDifíciles");
const copiaArray = javascript1.slice(-2);
const indiceFunciones = javascript1.indexOf("Funciones");

console.log("Array modificado:", javascript1.join(", "));
console.log("Copia del array con los ultimos dos elementos:", copiaArray.join(", "));
console.log("Indice del elemento 'Funciones':", indiceFunciones);
