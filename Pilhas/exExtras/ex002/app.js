const MinhaPilha = require("./MinhaPilha");

const bau = new MinhaPilha;

bau.adicionar('Jóias preciosas');
bau.adicionar('Colar de diamante');
bau.adicionar('One Piece');

console.log("Foi removido do baú" + bau.remover()); // Remove o One Piece

console.log(bau.topo()); //Colar de diamante

console.log(bau.estaVazia()); // false