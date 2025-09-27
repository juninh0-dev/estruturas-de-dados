class Fila{
    // usamos uma lista para armazenar os itens
    #items = [];
    // representa o índice do ínicio da fila
    #inicio = 0;
    // represetta o índice do fim da fila
    #fim = 0;

    //Adiciona um item no fim da fila
    enqueue(elemento){
        //Coloca o elemento no fim da fila
        this.#items[this.#fim] = elemento;

        //incremento o índice do fim da fila
        this.#fim++;

    }

    //remove e retorna o primeiro elemento da fila (dequeue)
    dequeue(){
        // Se a fila estiver vazia, retorna undefined
        if(this.estaVazia()){
            return undefined
        }

        //obtem o primeiro item da fila
        const item = this.#items[this.#inicio]

        //deleta o primeiro item da fila
        delete this.#items[this.#inicio];

        //Move índice do inicío para o próximo item
        this.#inicio++;

        //Quando o início e o fim estiverem alinhados, redefine a fila
        if(this.#inicio === this.#fim ){
            this.#inicio = 0;
            this.#fim = 0;
        }
        return item; //retorna o item removido
    }

    //Chama o primeiro elemento da lista sem removê-lo (peek)
    front(){ 
        //Se a fila estiver vazia, return undefined
        if(this.estaVazia()){
            return undefined;
        }

        //retorna o primeiro item da fila
        return this.#items[this.#inicio];
    }
    
    //verifica se a fila está vazia
    //verifica se os índices são iguais
    estaVazia = () => this.#fim === this.#inicio;
    
    // retorna o tamanho da fila
    // calcula a diferença entre fime início
    tamanho = () => this.#fim - this.#inicio;

    limpar(){ 
        this.#items = [];
        this.#inicio = 0;
        this.#fim = 0;

    }

}

module.exports = Fila;