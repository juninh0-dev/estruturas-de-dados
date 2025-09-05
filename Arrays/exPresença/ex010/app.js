const MeuArray = require("./MeuArray");

const meuArray = new MeuArray();

meuArray.adicionar(5); // add 5 no indice 0

meuArray.adicionar(10); // add 10 no indice 1

meuArray.adicionar(15); // add 15 no indice 2

meuArray.remover(); // remove o ultimo item -> indice 2 ou seja o 15

meuArray.adicionar(20) // add 20 no indice 2

console.log(meuArray.obterElementos(1)); // retornará 10

console.log(meuArray.tamanhoArray()); // retornará 3

