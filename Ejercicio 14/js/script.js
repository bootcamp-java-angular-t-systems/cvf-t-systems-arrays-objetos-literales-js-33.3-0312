const receta1 = {
    nombre: "Canelones",
    tiempoPreparacion: "40 minutos",
    ingredientes: ["carne picada", "pasta para canelones", "salsa bechamel", "queso"]
};

const receta2 = {
    nombre: "Croquetas",
    tiempoPreparacion: "25 minutos",
    ingredientes: ["pollo desmenuzado", "harina", "leche", "pan rallado", "huevo"]
};

const receta3 = {
    nombre: "Cocido",
    tiempoPreparacion: "2 horas",
    ingredientes: ["garbanzos", "carne de cerdo", "chorizo", "patata", "zanahoria", "col"]
};

const receta4 = {
    nombre: "Ensalada de Pollo",
    tiempoPreparacion: "20 minutos",
    ingredientes: ["pollo", "lechuga", "tomate", "pepino", "aceitunas", "queso feta"]
};

const recetas = [receta1, receta2, receta3, receta4];
function imprimirReceta(receta) {
    console.log("Nombre de la receta:", receta.nombre);
    console.log("Tiempo de preparacion:", receta.tiempoPreparacion);
    console.log("Ingredientes:");

    for (const ingrediente of receta.ingredientes) {
        console.log("- " + ingrediente);
    }
    console.log("----------------------");
}

function imprimirTodasLasRecetas(recetas) {
    for (const receta of recetas) {
        imprimirReceta(receta);
    }
}

imprimirTodasLasRecetas(recetas);
