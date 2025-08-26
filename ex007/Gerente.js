const Funcionario = require("./Funcionario");

class Gerente extends Funcionario{

    calcularBonus() {
        this.bonus = (this.salario * 0.20);
        console.log(`
            Nome: ${this.nome}\n
            Seu salário é ${this.salario} e seu bônus é ${this.bonus}`);
    }


}

module.exports = Gerente;