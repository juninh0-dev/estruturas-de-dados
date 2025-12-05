const LinkedList = require('./LinkedList');

let fila = new LinkedList;


// 1. Inserir tartaruga no início e no final
fila.insertAtBeginning("Cabeçuda");
fila.insertAtEnd("Casco-Duro");
fila.insertAtEnd("Lenta");
fila.insertAtEnd("Turbina");

// 2. Remover a tartaruga "Lenta" (se existir)
fila.removeByValue("Lenta");

// 3. Encontrar a tartaruga "Veloz"
fila.insertAtEnd("Veloz"); // ela entrou na fila

const posicaoVeloz = fila.find("Veloz"); // supondo que find retorne o nó

console.log("Fila atual:");
fila.toString();

// Verificando a posição
console.log("\nPosição da tartaruga 'Veloz':");

if (posicaoVeloz !== undefined) {
    let current = fila.find("Veloz");
    let index = 0;
    let aux = fila.find(current.value);

    let contador = 0;
    let cursor = fila.find("Cabeçuda");

    while (cursor !== undefined) {
        if (cursor.value === "Veloz") {
            console.log(`Veloz está na posição ${contador}`);
            break;
        }
        contador++;
        cursor = cursor.next;
    }

} else {
    console.log("Veloz não está na fila.");
}