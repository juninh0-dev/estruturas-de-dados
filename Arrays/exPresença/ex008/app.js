const MeuArray = require("./MeuArray");

const meuArray = new MeuArray();

meuArray.adicionar(100);

meuArray.adicionar(200);


console.log(meuArray.obterElementos(0));
console.log(meuArray.obterElementos(2));
console.log(meuArray.obterElementos(-1));

/*No primeiro ele irá mostrar o iten com o indice 0 ou seja 100
no segundo ele irá retornar undefined, pois o indice que foi 
instanciado é igual o tamnho do array e tem um if que verifica
caso isso acontece retornando assim undefined. Isso vale para
o último obterElementos(-1), pois na verificação também retorna
undefined caso o indice chamado seja menor que o indice do Array*/