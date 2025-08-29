class ContaBancaria{
    #saldo = 0;

    depositar(valor){
        this.#saldo = this.#saldo + valor;
        console.log(`Você depositou R$ ${valor}!`)
    }

    sacar(valor){
        this.#saldo = this.#saldo - valor;
        console.log(`Você sacou R$ ${valor}. Saldo atual: R$ ${this.#saldo}`)
    }

}

module.exports = ContaBancaria;