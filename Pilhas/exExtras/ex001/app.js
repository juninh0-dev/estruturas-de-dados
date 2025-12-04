const MinhaPilha = require('./MinhaPilha');

let livros = new MinhaPilha;

livros.adicionar("Regenerção");
livros.adicionar("Cura");
livros.adicionar("Força");
livros.adicionar("Velocidade");

livros.remover();

console.log(livros.topo());

console.log(livros.estaVazia()); // false