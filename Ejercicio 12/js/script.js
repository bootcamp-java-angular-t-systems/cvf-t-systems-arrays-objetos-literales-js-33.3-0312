const personas = [
    { nombre: "Mariona", edad: 25, ciudad: "Oviedo" },
    { nombre: "Jose", edad: 30, ciudad: "Barcelona" },
    { nombre: "Marisa", edad: 28, ciudad: "Valencia" }
];

function imprimirValorPropiedad(objetos, propiedad) {
    for (const persona of objetos) {
        console.log(`${persona.nombre},  ${propiedad}: ${persona[propiedad]}`);
    }
}

imprimirValorPropiedad(personas, "edad");