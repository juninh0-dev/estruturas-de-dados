class Funcionario{
    nome;
    salario;
    bonus;
    
    calcularBonus(){
        this.bonus = this.salario * 0.1;
        console.log(`Seu salário é ${this.salario} e seu bônus é ${this.bonus}`);
    }
}

module.exports = Funcionario;