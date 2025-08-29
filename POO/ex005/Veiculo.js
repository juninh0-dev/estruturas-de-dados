class Carro {
    constructor(modelo, ano, marca) {
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca //ATRIBUTOS!!!

    }

    infVeiculo() {
        console.log(`Modelo: ${this.modelo}\n
            Ano: ${this.ano}\n
            Marca: ${this.marca}`);
    }//MÉTODOS
}

class Moto {
    constructor(modelo, ano, marca) {
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca

    }

    infVeiculo() {
        console.log(`Modelo: ${this.modelo}\n
            Ano: ${this.ano}\n
            Marca: ${this.marca}`);
    }//MÉTODOS

}

module.exports = Carro;
module.exports = Moto;