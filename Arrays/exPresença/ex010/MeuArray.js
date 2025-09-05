class MeuArray{

    #itens = [];
    #tamanho = 0;

    adicionar(elemento) { 
        //Inserindo valores no array
        this.#itens[this.#tamanho] = elemento;
        let verificador = "";

        if(this.#tamanho >= 1){
            if(this.#itens == verificador){
                this.#itens = null;
                return "Esse nome já exite";

            }
        }

        //incrementando
        this.#tamanho++;

        
    }
    
    remover() {

        //Veririficando se o array esta vazio
        if( this.#tamanho === 0 ){
            return undefined;
        }

        //Armazenando o ultimo elemento
        const ultimoElemento = this.#itens[this.#tamanho - 1];
        
        //Removendo o ultimo elemento
        delete this.#itens[this.#tamanho - 1];

        //reduzindo o tamanho
        this.#tamanho--;

        return ultimoElemento; //E retornando o ultimo elemento
    
    }

    obterElementos(indice) {
        //Verificando se o indice é valido
        if(indice < 0 || indice >= this.#tamanho){
            return undefined;
        }
        //E retornando o elemento
        return this.#itens[indice];
    }
    
    tamanhoArray() { 
        //Apenas retornando o tamanho
        return this.#tamanho;
    }

    //Removendo todos os elementos do array
    limpar() { 
        this.#itens = [];
        this.#tamanho = 0;

    }
    editar(indice, novoValor) { 
        //Verificando se o indice é valido
        if(indice < 0 || indice >= this.#tamanho){
            return undefined;
        }

        //Alterando o valor
        this.#itens[indice] = novoValor;

        return this.#itens[indice];
    }
    obterIndice(valor) { 
        //Percorrendo o array
        for(let i = 0; i < this.#tamanho; i++){
            //Verificando se o valor é igual ao elemento
            if(this.#itens[i] === valor){
                return i; //Retornando o indice
            }
        }
    }

    verItens(){
        for(let i = 0; i < this.#tamanho; i++){

            console.log(this.#itens[i]);
        }
    }
}

module.exports = MeuArray;
