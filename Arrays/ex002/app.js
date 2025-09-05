const MeuArray = require("./MeuArray");

const funcionario = new MeuArray();

funcionario.adicionar("João da Silva");
funcionario.adicionar("Bruno Freitas");
funcionario.adicionar("Arthur Santos");
funcionario.adicionar("Maria da Penha");
funcionario.adicionar("Maria da Penha");

funcionario.mostrarElementos();

console.log(funcionario.obterElemento(2));

funcionario.limpar();

console.log(funcionario.obterElemento(1));