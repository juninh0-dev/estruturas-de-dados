class MeuArray{

    #items = [];
    #tamanho = 0;

    adicionar(elemento) { 
        //Inserindo valores no array
        this.#items[this.#tamanho] = elemento;

        //incrementando
        this.#tamanho++;
    }
    
    remover() { }
    obterElemento() {         
        return this.#items;
    }
    tamanhoArray() { }
    limpar() { }
    editar(indice, novoValor) { }
    obterIndice(valor) { }
}

module.exports = MeuArray;