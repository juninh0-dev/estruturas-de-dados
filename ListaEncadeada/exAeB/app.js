const LinkedList = require('./LinkedList');

const lista = new LinkedList();

// Inserindo valores
lista.insertAtEnd(10);
lista.insertAtEnd(20);
lista.insertAtEnd(30);
lista.insertAtEnd(40);

console.log("Lista original:");
lista.toString();

// Removendo valores
console.log("\nRemovendo 20:");
lista.removeByValue(20);
lista.toString();

console.log("\nRemovendo 40:");
lista.removeByValue(40);
lista.toString();

console.log("\nRemovendo 999 (não existe):");
lista.removeByValue(999);
lista.toString();

// Lista original:
// 10 -> 20 -> 30 -> 40 -> undefined

// Removendo 20:
// 10 -> 30 -> 40 -> undefined

// Removendo 40:
// 10 -> 30 -> undefined

// Removendo 999 (não existe):
// 10 -> 30 -> undefined

// 

console.log("\nBuscando valores:");

let busca1 = lista.find(30);
console.log(busca1 ? "30 está na lista" : "30 NÃO está na lista");

let busca2 = lista.find(50);
console.log(busca2 ? "50 está na lista" : "50 NÃO está na lista");

