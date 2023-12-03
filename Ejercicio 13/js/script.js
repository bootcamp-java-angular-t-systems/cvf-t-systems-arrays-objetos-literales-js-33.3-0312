const receta = {
    nombre: "Ensalada de Pollo",
    tiempoPreparacion: "20 minutos",
    ingredientes: ["pollo", "lechuga", "tomate", "pepino", "aceitunas", "queso feta"]
};

function imprimirReceta(receta) {
    console.log("Nombre de la receta:", receta.nombre);
    console.log("Tiempo de preparación:", receta.tiempoPreparacion);
    console.log("Ingredientes:", receta.ingredientes.join(', '));
}

imprimirReceta(receta);
