class Cliente{
    constructor(nome, idade, endereco){
         this.nome = nome;
         this.idade = idade;
         this.endereco = endereco; // criando instância
    }

    infCliente(){
        console.log(`Olá ${this.nome}, sua idade é ${this.idade} e seu endereço:`)
        this.endereco.mostrarEndereco();

    }

}

module.exports = Cliente;
