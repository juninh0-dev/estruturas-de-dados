const GrafoPonderado = require("./GrafoPonderado");

const g = new GrafoPonderado();

// Rua mágicas
g.adicionarAresta("A", "B", 3);
g.adicionarAresta("A", "C", 2);
g.adicionarAresta("B", "D", 4);
g.adicionarAresta("C", "D", 1);
g.adicionarAresta("D", "E", 5);

// 1. Lista de Adjacência
g.imprimirGrafo();

// 2. Matriz de Adjacência
g.imprimirMatrizAdjacencia();

// 3. DFS e BFS a partir de A
console.log("\nDFS a partir de A:", g.dfs("A").join(" -> "));
console.log("BFS a partir de A:", g.bfs("A").join(" -> "));

// 4. Dijkstra A → E
const { distancia, anterior } = g.dijkstra("A");
const caminho = g.reconstruirCaminho("A", "E", anterior);

console.log("\n⭐ Menor caminho de A até E:");
console.log("Caminho:", caminho.join(" -> "));
console.log("Distância total:", distancia["E"]);
