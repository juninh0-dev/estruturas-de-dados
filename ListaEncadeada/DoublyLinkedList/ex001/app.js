// const DoublyLinkedList = require('./DoubleLinkedList');

// const ponto_Trilha = new DoublyLinkedList();

// // Adicionando pontos da trilha
// ponto_Trilha.append("Montanha Nevada");
// ponto_Trilha.append("Trilha sombria");
// ponto_Trilha.append("Vale do riacho");
// ponto_Trilha.append("Dubai");
// ponto_Trilha.append("Mirante");

// // Removendo da trilha, um ponto perigoso
// console.log(ponto_Trilha.removeAt(1));

// // Vê todos os pontos
// ponto_Trilha.toString();

// // Encontra a posição em que está o Mirante.
// console.log(ponto_Trilha.find("Mirante"));

// MANEIRA QUE O CHAT ME DEU PARA RESOLVER O EX.
const DoublyLinkedList = require('./DoublyLinkedList');

const trilha = new DoublyLinkedList();

// Inserir pontos no início e no fim
trilha.prepend("Cachoeira Azul");
trilha.append("Caverna Misteriosa");
trilha.append("Mirante do Horizonte");

console.log("Trilha inicial:");
trilha.traverse();

// Remover um ponto perigoso
console.log("\nRemovendo ponto perigoso: 'Caverna Misteriosa'");
let indice = trilha.find("Caverna Misteriosa");
if (indice !== -1) {
    trilha.removeAt(indice);
}

console.log("\nTrilha após remoção:");
trilha.traverse();

// Verificar se o mirante ainda existe
console.log("\nO 'Mirante do Horizonte' ainda está na trilha?");
let existe = trilha.find("Mirante do Horizonte") !== -1;
console.log(existe ? "Sim, ele está na trilha!" : "Não está mais na trilha.");
