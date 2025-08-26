const Produtos = require("./Produtos");

class Carrinho extends Produtos {
    produto1 = new Produtos("Banana", 10);
    produto2 = new Produtos("Maça", 5);
    
    total() {
        this.vTotal += this.preco;
        console.log(`O preço da ${this.nome} é: ${this.preco}\n
        TOTAL: ${this.vTotal}`)
    }

}

module.exports = Carrinho;