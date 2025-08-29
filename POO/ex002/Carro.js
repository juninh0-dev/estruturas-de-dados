class Carro{
    constructor(modelo, ano, velocidade){
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = velocidade;
    }

    acelerar() {
        this.velocidade += 10;
        console.log(`${this.modelo} acelerou para ${this.velocidade} km/h`);
    }

    frear() {
        this.velocidade -= 5;
        console.log(`${this.modelo} freou para ${this.velocidade} km/h`);
    }

}

module.exports = Carro;