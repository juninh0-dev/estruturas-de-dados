const MeuArray = require("./MeuArray");

const meuArray = new MeuArray();

meuArray.adicionar(10);

meuArray.adicionar(20);

meuArray.adicionar(30);

meuArray.remover();

console.log(meuArray.tamanhoArray()); 
/* O tamanho do array irá retornar 2 por conta que ao adicionmar 3 itens ele
valeria 3, mas por usar o método remover() ele exclui o ultimo item e subtrai
1 do tamnho do array*/