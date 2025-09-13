const MinhaPilha = require('./MinhaPilha');


// Exemplo de uso

const minha_variavel = new MinhaPilha();

minha_variavel.adicionar("a");
minha_variavel.adicionar(20);
minha_variavel.adicionar(30);

console.log(minha_variavel.topo());

console.log(minha_variavel.remover());

console.log(minha_variavel.topo());

console.log(minha_variavel.tamanhoPilha());
