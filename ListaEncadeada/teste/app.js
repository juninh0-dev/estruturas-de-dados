const LinkedList = require('./LinkedList.js')

const lista = new LinkedList();

console.log("\n----------------");
console.log('\x1b[35m%s\x1b [0m', 'Lista Inicial');
lista.isEmpty() ? console.log("A lista está vazia."): console.log("A lista não está vazia.");

console.log("\n-- --------------");
console.log('\x1b[32m%s\x1b [0m', 'Inserindo no início:');
lista.insertAtBeginning (30);
lista.toString(); // Saída: 30 -> undefined
lista.insertAtBeginning(20);
lista.toString(); // Saída: 20 -> 30 > undefined
lista.insertAtBeginning (10);
lista.toString(); // Saída: 10 -> 20 -> 30 -> undefined
console.log(`Tamanho da lista: ${lista.size()}`); // Saída: Tamanho da lista: 3