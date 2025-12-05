class GrafoPonderado {
    constructor() {
        this.vertices = new Set();   // Conjunto de vértices
        this.adjacencia = new Map(); // v -> [{ vertice, peso }]
    }

    adicionarVertice(v) {
        this.vertices.add(v);
        if (!this.adjacencia.has(v)) {
            this.adjacencia.set(v, []);
        }
    }

    adicionarAresta(origem, destino, peso) {
        if (!this.adjacencia.has(origem)) this.adicionarVertice(origem);
        if (!this.adjacencia.has(destino)) this.adicionarVertice(destino);

        // Aresta direcionada
        this.adjacencia.get(origem).push({ vertice: destino, peso });

        // Se quiser grafo não-direcionado:
        // this.adjacencia.get(destino).push({ vertice: origem, peso });
    }

    imprimirGrafo() {
        for (const [v, vizinhos] of this.adjacencia.entries()) {
            const lista = vizinhos
                .map(obj => `${obj.vertice}(${obj.peso})`)
                .join(", ");
            console.log(`${v} -> ${lista}`);
        }
    }

    imprimirMatrizAdjacencia() {
        const vertices = Array.from(this.vertices);
        const n = vertices.length;

        const matriz = Array.from({ length: n }, () => Array(n).fill(Infinity));

        // Distância para si mesmo é sempre zero
        vertices.forEach((v, i) => {
            matriz[i][i] = 0;
            for (const vizinho of this.adjacencia.get(v)) {
                const j = vertices.indexOf(vizinho.vertice);
                matriz[i][j] = vizinho.peso;
            }
        });

        console.log("\nMatriz de Adjacência (∞ = sem aresta):");
        console.log("    " + vertices.join("   "));

        matriz.forEach((linha, i) => {
            console.log(
                vertices[i] + "  " +
                linha.map(x => (x === Infinity ? "∞" : x)).join("   ")
            );
        });
    }
}

module.exports = GrafoPonderado;