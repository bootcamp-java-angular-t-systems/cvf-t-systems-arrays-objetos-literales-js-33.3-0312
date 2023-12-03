const persona = {
    nombre: "Carla",
    apellidos: "Velasco Fàbrega",
    edad: 20,
    direccion: "Calle Secreta 123",
    ciudad: "Barcelona",
};

function imprimirNombreCompleto(persona) {
    const nombreCompleto = `${persona.nombre} ${persona.apellidos}`;
    console.log("Nombre completo:", nombreCompleto);
}

imprimirNombreCompleto(persona);