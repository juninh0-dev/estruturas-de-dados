const PilhaTesouro = require('./PilhaTesouro');

const tesouros = new PilhaTesouro();

tesouros.adicionar("Moedas de ouro");
tesouros.adicionar("Colares de pérolas");
tesouros.adicionar("Anéis com pedras preciosas");
tesouros.adicionar("Coroa antiga");

console.log("O capitão Barbarruiva pegou o tesouro que estava no topo: " + tesouros.remover()); // Coroa Antiga

console.log(tesouros.remover()); // Remove coroa antiga

console.log("O próximo tesouro a ser visto é " + tesouros.topo());// Anéis com pedras preciosas


console.log(tesouros.estaVazia()); // False