class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined; // Próximo nó
        this.prev = undefined; // Nó anterior
    }
}

class DoublyLinkedList {
    #head = undefined; // Primeiro nó (cabeça)
    #tail = undefined; // Último nó (cauda)
    #length = 0; // Tamanho da lista

    append(value) { }
    prepend(value) { }
    removeLast() { }
    removeFirst() { }
    traverse() { }
    traverseReverse() { }
    insertAt(value, index) { }
    find(value) { }
    removeAt(index) { }
    size = () => this.#length;
    isEmpty = () => this.#length === 0;
    toString() { }
}
module.exports = DoublyLinkedList;

