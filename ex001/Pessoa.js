class Pessoa {
    nome;
    idade;
    apresentar() {
        console.log(`Olá eu sou ${this.nome} e tenho ${this.idade} anos de idade`)
    };
}


module.exports = Pessoa;