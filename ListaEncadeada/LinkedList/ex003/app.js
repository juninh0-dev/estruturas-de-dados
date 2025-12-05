const LinkedList = require('./LinkedList');

const poderes = new LinkedList();

// 1. Adicionar um novo poder no início e outro no fim
poderes.insertAtBeginning("Golpe Vorpal");
poderes.insertAtEnd("Explosão Arcana");
poderes.insertAtEnd("Raio Congelante");
poderes.insertAtEnd("Escudo de Fogo");

console.log("Lista inicial de poderes:");
poderes.toString();

// 2. Remover o poder ineficaz "Raio Congelante"
poderes.removeByValue("Raio Congelante");

console.log("\nApós remover 'Raio Congelante':");
poderes.toString();

// 3. Verificar se "Escudo de Fogo" está disponível
const encontrado = poderes.find("Escudo de Fogo");

console.log("\nVerificando poder 'Escudo de Fogo':");
if (encontrado !== undefined) {
    console.log("O poder 'Escudo de Fogo' está disponível!");
} else {
    console.log("O poder 'Escudo de Fogo' NÃO está na lista.");
}
