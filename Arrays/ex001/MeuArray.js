class MeuArray{

    #tarefas = [];
    #tamanho = 0;

    adicionar(elemento) { 
        //Inserindo valores no array
        this.#tarefas[this.#tamanho] = elemento;

        //incrementando
        this.#tamanho++;
    }
    
    remover() {

        //Veririficando se o array esta vazio
        if( this.#tamanho === 0 ){
            return undefined;
        }

        //Armazenando o ultimo elemento
        const ultimoElemento = this.#tarefas[this.#tamanho - 1];
        
        //Removendo o ultimo elemento
        delete this.#tarefas[this.#tamanho - 1];

        //reduzindo o tamanho
        this.#tamanho--;

        return ultimoElemento; //E retornando o ultimo elemento
    
    }

    obterElemento(indice) {
        //Verificando se o indice é valido
        if(indice < 0 || indice >= this.#tamanho){
            return undefined;
        }
        //E retornando o elemento
        return this.#tarefas[indice];
    }
    
    tamanhoArray() { 
        //Apenas retornando o tamanho
        return this.#tamanho;
    }

    //Removendo todos os elementos do array
    limpar() { 
        this.#tarefas = [];
        this.#tamanho = 0;

    }
    editar(indice, novoValor) { 
        //Verificando se o indice é valido
        if(indice < 0 || indice >= this.#tamanho){
            return undefined;
        }

        //Alterando o valor
        this.#tarefas[indice] = novoValor;

        return this.#tarefas[indice];
    }
    obterIndice(valor) { 
        //Percorrendo o array
        for(let i = 0; i < this.#tamanho; i++){
            //Verificando se o valor é igual ao elemento
            if(this.#tarefas[i] === valor){
                return i; //Retornando o indice
            }
        }
    }

    mostrarTarefas(){
        for(let i = 0; i < this.#tamanho; i++){

            console.log(this.#tarefas[i]);
        }
    }
}

module.exports = MeuArray;