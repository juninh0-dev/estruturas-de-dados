class MeuArray{

    #items = [];
    #tamanho = 0;

    adicionar(elemento) { 
        //Inserindo valores no array
        this.#items[this.#tamanho] = elemento;

        //incrementando
        this.#tamanho++;
    }
    
    remover() {

        //Veririficando se o array esta vazio
        if( this.#tamanho === 0 ){
            return undefined;
        }

        //Armazenando o ultimo elemento
        const ultimoElemento = this.#items[this.#tamanho - 1];
        
        //Removendo o ultimo elemento
        delete this.#items[this.#tamanho - 1];

        //reduzindo o tamanho
        this.#tamanho--;

        return ultimoElemento; //E retornando o ultimo elemento
    
    }
    obterElemento(indice) {
        
        if(indice < 0 || indice >= this.#tamanho){
            return undefined;
        }
        return this.#items;
    }
    tamanhoArray() { }
    limpar() { }
    editar(indice, novoValor) { }
    obterIndice(valor) { }
}

module.exports = MeuArray;