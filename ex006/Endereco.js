class Endereco {
    constructor(cep, rua, bairro, num) {
        this.cep = cep;
        this.rua = rua;
        this.bairro = bairro;
        this.num = num;
    }

    mostrarEndereco() {
        console.log
            (`CEP: ${this.cep}\n Rua: ${this.rua}\n Bairro: ${this.bairro}\n Número: ${this.num} `);
    }
}

module.exports = Endereco