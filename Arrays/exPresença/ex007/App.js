const MeuArray = require("./MeuArray");

const meuArray = new MeuArray();

meuArray.adicionar('maçã');

meuArray.adicionar('banana');

const itemRemovido = meuArray.remover();

console.log(itemRemovido);

//O valor da variavel "itemRemovido" foi o do ultimo item adicioando, conforme a function itemRemovido
//Ou seja, o valor da variavel era "banana".