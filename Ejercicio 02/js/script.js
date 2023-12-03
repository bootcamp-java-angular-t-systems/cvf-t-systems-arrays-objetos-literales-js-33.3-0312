function listarPlanetas(planetas) {
    console.log("Planetas del Sistema Solar:");
    planetas.forEach(planeta => {
        console.log(planeta);
    });
}

const planetasSistemaSolar = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"];
listarPlanetas(planetasSistemaSolar);
