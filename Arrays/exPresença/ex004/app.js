const MeuArray = require("./MeuArray");

const meuArray = new MeuArray();

console.log(meuArray.remover());

/*Ele retorna o valor undefined por conta de ter um if dentro do método remover
para verificar se contém ou não um valor no meuArray, se não houver nada ele
retorna automaticamente undefined*/