class Desenvolvedor{
    calcularBonus() {
        this.bonus = (this.salario * 0.15);
        console.log(`Seu salário é ${this.salario} e seu bônus é ${this.bonus}`);
    }


}

module.exports = Desenvolvedor;