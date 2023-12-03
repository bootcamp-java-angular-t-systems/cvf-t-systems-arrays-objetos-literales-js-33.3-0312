const llegadaMeta = ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto"];
const [ganador, segundo, ...restoCompetidores] = llegadaMeta;

console.log("Ganador:", ganador);
console.log("Segundo:", segundo);
console.log("Resto de competidores:", restoCompetidores.join(', '));
