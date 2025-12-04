class MinhaPilha{
    //Itens que serão adicionados na pilha, por uma lista
    #items = [];

    // Mantemos o cotnrole do tamanho da pilha
    #tamanho = [];


    //Add novo item
    adicionar (elemento){

        //Inserindo um elemento na posiçao atual
        this.#items[this.#tamanho] = elemento;
        
        //Incrementando tamnho da pilha
        this.#tamanho++;
    
    }

    //Remvoe o ultimo item no topo da pilha
    remover(){
        //verificaçao se a pilha está vazia ou não
        if(this.#items === 0){
            return undefined;
        }

        //pega o item no topo da pilha
        const ultimoItem = this.#items[this.#tamanho - 1];
        
        //Remove o ultimo item
        delete this.#items[this.#tamanho - 1];

        //decrementa o tamanho
        this.#tamanho--;
        
        //retorna o ultimo item da pilha
        return ultimoItem;
    }

    //Retorna o elemento no topo da pilha
    topo(){

        //verifica se a pilha tem um elemento
        if(this.#tamanho === 0){
            return undefined;
        }


        //retorna o elemento no topo da pilha
        return this.#items[this.#tamanho - 1];

    }

    // Exclui todos os elementos da pilha
    limpar(){

        //zera os elementos dentro de items
        this.#items = []

        //zera o tamanho
        this.#tamanho = 0

    }

    //verifica se a pilha está vazia
    //verifica se o tamanho é igual a zero
    estaVazia = () => this.#tamanho === 0;
    
    //verifica o tamanho da pilha
    tamanhoPilha = () => this.#tamanho;
}

module.exports = MinhaPilha;