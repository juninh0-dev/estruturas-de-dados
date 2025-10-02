const LinkedList = require('./LinkedList.js')

const lista = new LinkedList();

console.log("\n----------------");
console.log('\x1b[35m%s\x1b [0m', 'Lista Inicial');
lista.isEmpty() ? console.log("A lista está vazia."): console.log("A lista não está vazia.");

console.log("\n-----------------");
console.log('\x1b[32m%s\x1b [0m', 'Inserindo no início:');
lista.insertAtBeginning (30);
lista.toString(); // Saída: 30 -> undefined
lista.insertAtBeginning(20);
lista.toString(); // Saída: 20 -> 30 > undefined
lista.insertAtBeginning (10);
lista.toString(); // Saída: 10 -> 20 -> 30 -> undefined
console.log(`Tamanho da lista: ${lista.size()}`); // Saída: Tamanho da lista: 3

console.log("\n-----------------");
console.log('\x1b[32m%s\x1b [0m', 'Inserindo no fim:');
lista.insertAtEnd(40);
lista.toString(); // Saida: 10 -> 20 -> 30 -> 40 -> undefined
lista.insertAtEnd(50);
lista.toString(); // Saída: 10 > 20 -> 30 -> 40 -> 50 -> undefined
console.log(`Tamanho da lista: ${lista.size()}`); // Saida: Tamanho da lista: 5
console.log("\n-----------------");
console.log('\x1b[32m%s\x1b[0m', 'Exibindo a lista:');
lista.toString(); // Saída: 10 > 20 -> 30 -> 40 -> 50 -> null

console.log("\n-----------------");
console.log('\x1b[31m%s\x1b[0m', 'Removendo Itens:');
// Removendo um valor
lista.removeByValue(30);
lista.toString(); // Saída: 10 -> 20 -> 40 -> 50 -> null

console.log("\n------------------");
console.log('\x1b [34m%s\x1b[0m', 'Procurando um Valor: ');
let node = lista.find(40);
console.log(node ? `Valor encontrado: ${node.value}` : "Valor não encontrado");