class Grafo {

    // Inicializa um grafo vazio
    constructor(){
        // Estrutura para armazenar os vértices e suas conexões/
        this.adjacencia = {};

    }
    // Adiciona um novo vértice ao grafo
    adicionarVertice(vertice){
        if (!this.adjacencia[vertice]){
            this.adjacencia[vertice] = []
        }
    }

    // Adiciona uma aresta entre dois vértices (não dirigido).
    adicionarAresta(vertice1, vertice2){
        if (!this.adjacencia[vertice2]){
            this.adicionarVertice(vertice1);
        }
        if (!this.adjacencia[vertice2]){
            this.adicionarVertice(vertice2);
        }

        this.adjacencia[vertice1].push(vertice2);
        this.adjacencia[vertice2].push(vertice1);
    }

    // Remove uma aresta entre dois vértices.
    removerAresta(vertice1, vertice2){
        this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v !== vertice2);
        this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v !== vertice1);
    }

    // Remove um vértice e suas conexões
    removerVertice(vertice){
        while (this.adjacencia[vertice]?.length){
            const adjacencia = this.adjacencia[vertice].pop();
            this.removerAresta(vertice, adjacencia);
        }
        delete this.adjacencia[vertice];
    }

    //Exibe o grafo>
    imprimirGrafo(){
        for (let vertice in this.adjacencia){
            console.log(`${vertice} -> ${this.adjacencia[vertice].join(', ')}`);
        }
    }
} // Fecha classe Grafo

// Exemplo de uso

const meuGrafo = new Grafo();
meuGrafo.adicionarVertice('A');
meuGrafo.adicionarAresta('A', 'B');
meuGrafo.adicionarAresta('A', 'C');
meuGrafo.adicionarAresta('B', 'D');
meuGrafo.imprimirGrafo();