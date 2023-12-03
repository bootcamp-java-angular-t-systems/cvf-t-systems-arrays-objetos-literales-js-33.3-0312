class Receta {
    constructor(nombre, tiempoPreparacion, ingredientes) {
        this.nombre = nombre;
        this.tiempoPreparacion = tiempoPreparacion;
        this.ingredientes = ingredientes;
    }
}

const receta1 = new Receta("Canelones", "40 minutos", ["carne picada", "pasta para canelones", "salsa bechamel", "queso"]);
const receta2 = new Receta("Croquetas", "25 minutos", ["pollo desmenuzado", "harina", "leche", "pan rallado", "huevo"]);
const receta3 = new Receta("Cocido", "2 horas", ["garbanzos", "carne de cerdo", "chorizo", "patata", "zanahoria", "col"]);

const recetas = [receta1, receta2, receta3];

function imprimirReceta(receta) {
    console.log("Nombre de la receta:", receta.nombre);
    console.log("Tiempo de preparación:", receta.tiempoPreparacion);
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
