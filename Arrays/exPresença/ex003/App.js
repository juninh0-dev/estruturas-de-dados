const MeuArray = require("./MeuArray");

const meuArray = new MeuArray();

meuArray.adicionar('a');

meuArray.adicionar('b');

meuArray.adicionar('c');

console.log(meuArray.obterElemento(1));

/* O valor exibido pelo console é "b", pois
o indice de 'a' é 0
o indice de 'b' é 1 
o indice de 'c' é 2
E próximo seria 3, que ainda não tem valor definido. */