// Grafo.js
class Grafo {

    constructor() {
        this.adjacencia = {}; // { vertice: [ { destino, peso }, ... ] }
    }

    adicionarVertice(vertice) {
        if (!this.adjacencia[vertice]) {
            this.adjacencia[vertice] = [];
        }
    }

    adicionarAresta(vertice1, vertice2, peso = 1) {
        this.adicionarVertice(vertice1);
        this.adicionarVertice(vertice2);

        this.adjacencia[vertice1].push({ destino: vertice2, peso });
        this.adjacencia[vertice2].push({ destino: vertice1, peso }); // grafo não-direcionado
    }

    removerAresta(vertice1, vertice2) {
        this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v.destino !== vertice2);
        this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v.destino !== vertice1);
    }

    removerVertice(vertice) {
        if (!this.adjacencia[vertice]) return;

        while (this.adjacencia[vertice].length) {
            const { destino } = this.adjacencia[vertice].pop();
            this.removerAresta(vertice, destino);
        }

        delete this.adjacencia[vertice];
    }

    // ---------------------------------------
    // BFS
    // ---------------------------------------
    bfs(inicio) {
        const visitado = new Set();
        const fila = [inicio];
        const ordem = [];

        visitado.add(inicio);

        while (fila.length > 0) {
            let atual = fila.shift();
            ordem.push(atual);

            for (let vizinho of this.adjacencia[atual]) {
                if (!visitado.has(vizinho.destino)) {
                    visitado.add(vizinho.destino);
                    fila.push(vizinho.destino);
                }
            }
        }

        return ordem;
    }

    // ---------------------------------------
    // Dijkstra (menor caminho)
    // ---------------------------------------
    menorCaminho(origem, destino) {
        const dist = {};
        const anterior = {};
        const visitado = new Set();
        const vertices = Object.keys(this.adjacencia);

        // Inicializa distâncias
        for (let v of vertices) {
            dist[v] = Infinity;
            anterior[v] = null;
        }
        dist[origem] = 0;

        while (visitado.size < vertices.length) {
            // Seleciona vértice com menor distância ainda não visitado
            let atual = null;
            for (let v of vertices) {
                if (!visitado.has(v) && (atual === null || dist[v] < dist[atual])) {
                    atual = v;
                }
            }

            if (dist[atual] === Infinity) break;
            visitado.add(atual);

            for (let vizinho of this.adjacencia[atual]) {
                let distanciaPossivel = dist[atual] + vizinho.peso;

                if (distanciaPossivel < dist[vizinho.destino]) {
                    dist[vizinho.destino] = distanciaPossivel;
                    anterior[vizinho.destino] = atual;
                }
            }
        }

        // Reconstruir caminho
        const caminho = [];
        let atual = destino;

        while (atual !== null) {
            caminho.unshift(atual);
            atual = anterior[atual];
        }

        return {
            distancia: dist[destino],
            caminho
        };
    }

    imprimirGrafo() {
        for (let vertice in this.adjacencia) {
            const lista = this.adjacencia[vertice]
                .map(v => `${v.destino}(${v.peso})`)
                .join(', ');

            console.log(`${vertice} -> ${lista}`);
        }
    }
}

module.exports = Grafo;
