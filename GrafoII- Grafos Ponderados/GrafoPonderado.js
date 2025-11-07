class GrafoPonderado {
    constructor() {
        // Conjunto de vértices únicos 
        this.vertices = new Set();
        // Mapa  onde cada vértice aponta para uma lista de objetos: { vértice, peso }
        this.adjacencia = new Map();
    }

    // Adiciona um novo vértice ao grafo. Se já existir, nada é feito.
    // Também incializa sua lista de adjacência.
    adicionarVertice(v) {

        // Garante que o vértice está no conjunto
        this.vertices.add(v);
        if (!this.adjacencia.has(v)) {
            // Inicializa lista de vizinhos se ainda não existir
            this.adjacencia.set(v, []);
        }
    }

    // Adiciona uma aresta ponderada entre dois vértices;
    // Cria os vértices caso ainda não existam. Por padrão.
    // é um grafo direcionado.
    adicionarAresta(origem, destino, peso) {
        if (!this.adjacencia.has(origem)) this.adicionarVertice(origem);
        if (!this.adjacencia.has(destino)) this.adicionarVertice(destino);

        this.adjacencia.get(origem).push({ vestice: destino, peso });

        // Se o grafo for não-direcionado, descomente a linha abaixo:
        // this.adjacencia.get(destino).psuh({ vertice, origem, peso });
    }

    // Mostra a representação do grafo como lista de adjacência,
    // com os pesos visíveis.
    imprimirGrafo() {
        for (const [v, vizinhos] of this.adjacencia.entries()) {
            const lista = vizinhos.map(obj => `${obj.vertice}(${obj.peso})`).join(', ');
            console.log(`${v} -> ${lista}`);
        }
    }
    // Gera e imprime a matriz de adjacência do grafo.
    // Usa infinity para representar ausência de aresta.
    imprimirMatrizAdjacencia() {
        const vertices = Array.from(this, this.vertices);
        const n = vertices.length;
        const matriz = Array.from({ length: n }, () => Array(n).fill(Infinity));

        vertices.forEach((v, i) => {
            matriz[i][i] = 0; // distância para si mesmo = 0
            for (const vizinho of this.adjacencia.get(v)) {
                const j = vertices.indexOf(vizinho.vertice);
                matriz[i][j] = vizinho.peso;
            }
        });

        console.log('Matriz de Adjacência (valores ∞ representam ausência de aresta): ');
        console.log('   ', vertices.join('  '));
        matriz.forEach((linha, j) => {
            console.log(vertices[i], linha.map(x => x === Infinity ? '∞ ' : x).join('   '));

        })
    }
}