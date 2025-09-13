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
        this.tamanho++;
    
    }
    remover(){


    }
    topo(){}
    limpar(){}
    estaVazia(){}
    tamanhoPilha(){}
}

module.exports = MinhaPilha;