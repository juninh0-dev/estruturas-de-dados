    const Desenvolvedor = require("./Desenvolvedor");
    const Funcionario = require("./Funcionario");
    const Gerente = require("./Gerente");

    //criando objetos
    const funcionario = new Funcionario();
    const developer = new Desenvolvedor();
    const gerente = new Gerente();

    //Atribuindo valores para os atributos
    funcionario.nome = "Maria";
    funcionario.salario = 1000;

    developer.nome = "Pedro";
    developer.salario = 2000;

    gerente.nome = "Lucas";
    gerente.salario = 3000;

    //chamando os métodos
    funcionario.calcularBonus();
    developer.calcularBonus();
    gerente.calcularBonus();