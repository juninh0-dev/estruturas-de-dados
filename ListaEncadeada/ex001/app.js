const DoublyLinkedList = require('./DoubleLinkedList');

const ponto_Trilha = new DoublyLinkedList();

// Adicionando pontos da trilha
ponto_Trilha.append("Montanha Nevada");
ponto_Trilha.append("Trilha sombria");
ponto_Trilha.append("Vale do riacho");
ponto_Trilha.append("Dubai");
ponto_Trilha.append("Mirante");

// Removendo da trilha, um ponto perigoso
console.log(ponto_Trilha.removeAt(1));

// Vê todos os pontos
ponto_Trilha.toString();

// Encontra a posição em que está o Mirante.
console.log(ponto_Trilha.find("Mirante"));