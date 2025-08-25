const Desenvolvedor = require("./Desenvolvedor");
const Funcionario = require("./Funcionario");
const Gerente = require("./Gerente");

const funcionario = new Funcionario();
const developer = new Desenvolvedor();
const gerente = new Gerente();

funcionario.nome = "Maria";
funcionario.salario = 1000;
developer.nome = "Pedro";
developer.salario = 2000;
gerente.nome = "Lucas";
gerente.salario = 3000;

funcionario.calcularBonus();
developer.calcularBonus();
gerente.calcularBonus();