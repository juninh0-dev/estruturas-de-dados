// app.js
const Grafo = require('./Grafo');

// Criando o grafo
const g = new Grafo();

g.adicionarAresta('A', 'B', 2);
g.adicionarAresta('A', 'C', 4);
g.adicionarAresta('B', 'D', 1);
g.adicionarAresta('C', 'D', 3);
g.adicionarAresta('D', 'E', 2);
g.adicionarAresta('C', 'E', 5);

console.log("=== GRAFO ===");
g.imprimirGrafo();

console.log("\n=== BFS a partir de A ===");
console.log(g.bfs('A'));

console.log("\n=== Menor caminho de A até E (Dijkstra) ===");
const resultado = g.menorCaminho('A', 'E');
console.log(`Distância: ${resultado.distancia}`);
console.log(`Caminho: ${resultado.caminho.join(' -> ')}`);
