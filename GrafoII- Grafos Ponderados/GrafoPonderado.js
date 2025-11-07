class GrafoPonderado{
        constructor(){
            // Conjunto de vértices únicos 
            this.vertices = new Set();
            // Mapa  onde cada vértice aponta para uma lista de objetos: { vértice, peso }
            this.adjacencia = new Map();
        }

    // Adiciona um novo vértice ao grafo. Se já existir, nada é feito.
    // Também incializa sua lista de adjacência.
    adicionarVertice(v){
        
        // Garante que o vértice está no conjunto
        this.vertices.add(v);
        if (!this.adjacencia.has(v)){
            // Inicializa lista de vizinhos se ainda não existir
            this.adjacencia.set(v, []);
        }
    }

    
    
}