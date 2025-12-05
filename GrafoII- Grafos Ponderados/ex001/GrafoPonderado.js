class GrafoPonderado {
    constructor() {
        this.vertices = new Set();
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

        // ❗ Corrigido "vestice" → "vertice"
        this.adjacencia.get(origem).push({ vertice: destino, peso });
    }

    imprimirGrafo() {
        console.log("\n📌 Lista de Adjacência:");
        for (const [v, vizinhos] of this.adjacencia.entries()) {
            const lista = vizinhos.map(obj => `${obj.vertice}(${obj.peso})`).join(", ");
            console.log(`${v} -> ${lista}`);
        }
    }

    imprimirMatrizAdjacencia() {
        const vertices = Array.from(this.vertices);
        const n = vertices.length;
        const matriz = Array.from({ length: n }, () => Array(n).fill(Infinity));

        vertices.forEach((v, i) => {
            matriz[i][i] = 0;
            for (const vizinho of this.adjacencia.get(v)) {
                const j = vertices.indexOf(vizinho.vertice);
                matriz[i][j] = vizinho.peso;
            }
        });

        console.log("\n📌 Matriz de Adjacência (∞ = sem aresta):");
        console.log("     " + vertices.join("   "));

        matriz.forEach((linha, i) => {
            console.log(vertices[i] + " | " +
                linha.map(x => x === Infinity ? "∞" : x).join("   ")
            );
        });
    }

    // -------- BFS --------
    bfs(inicio) {
        const visitados = new Set();
        const fila = [inicio];
        const ordem = [];

        while (fila.length > 0) {
            const atual = fila.shift();
            if (!visitados.has(atual)) {
                visitados.add(atual);
                ordem.push(atual);

                for (const viz of this.adjacencia.get(atual)) {
                    fila.push(viz.vertice);
                }
            }
        }
        return ordem;
    }

    // -------- DFS --------
    dfs(inicio, visitados = new Set(), ordem = []) {
        visitados.add(inicio);
        ordem.push(inicio);

        for (const viz of this.adjacencia.get(inicio)) {
            if (!visitados.has(viz.vertice)) {
                this.dfs(viz.vertice, visitados, ordem);
            }
        }
        return ordem;
    }

    // -------- Dijkstra --------
    dijkstra(origem) {
        const dist = {};
        const anterior = {};
        const naoVisitados = new Set(this.vertices);

        for (const v of naoVisitados) {
            dist[v] = Infinity;
            anterior[v] = null;
        }
        dist[origem] = 0;

        while (naoVisitados.size > 0) {
            let atual = null;

            for (const v of naoVisitados) {
                if (atual === null || dist[v] < dist[atual]) {
                    atual = v;
                }
            }

            naoVisitados.delete(atual);

            for (const viz of this.adjacencia.get(atual)) {
                const alt = dist[atual] + viz.peso;
                if (alt < dist[viz.vertice]) {
                    dist[viz.vertice] = alt;
                    anterior[viz.vertice] = atual;
                }
            }
        }

        return { distancia: dist, anterior };
    }

    reconstruirCaminho(origem, destino, anterior) {
        const caminho = [];
        let atual = destino;

        while (atual !== null) {
            caminho.unshift(atual);
            atual = anterior[atual];
        }

        return caminho[0] === origem ? caminho : null;
    }
}

module.exports = GrafoPonderado;
