class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined;
        this.prev = undefined;
    }
}

class DoublyLinkedList {
    #head = undefined;
    #tail = undefined;
    #length = 0;

    // Adicionar ao final
    append(value) {
        const newNode = new Node(value);

        if (this.#head === undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            newNode.prev = this.#tail;
            this.#tail = newNode;
        }

        this.#length++;
    }

    // Adicionar no início
    prepend(value) {
        const newNode = new Node(value);

        if (this.#head === undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.next = this.#head;
            this.#head.prev = newNode;
            this.#head = newNode;
        }

        this.#length++;
    }

    // Remover último
    removeLast() {
        if (this.#tail === undefined) return undefined;

        const removedNode = this.#tail;

        if (this.#length === 1) {
            this.#head = undefined;
            this.#tail = undefined;
        } else {
            this.#tail = this.#tail.prev;
            this.#tail.next = undefined;
        }

        this.#length--;
        return removedNode.value;
    }

    // Remover primeiro
    removeFirst() {
        if (this.#head === undefined) return undefined;

        const removedNode = this.#head;

        if (this.#length === 1) {
            this.#head = undefined;
            this.#tail = undefined;
        } else {
            this.#head = this.#head.next;
            this.#head.prev = undefined;
        }

        this.#length--;
        return removedNode.value;
    }

    // Percorrer do início ao fim
    traverse() {
        if (this.isEmpty()) {
            console.log("A lista está vazia.");
            return;
        }

        let current = this.#head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Percorrer do fim ao início
    traverseReverse() {
        if (this.isEmpty()) {
            console.log("A lista está vazia.");
            return;
        }

        let current = this.#tail;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }

    // Inserir em posição específica
    insertAt(value, index) {
        if (index < 0 || index > this.#length) return undefined;

        if (index === 0) return this.prepend(value);
        if (index === this.#length) return this.append(value);

        const newNode = new Node(value);

        let current = this.#head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        const previous = current.prev;

        previous.next = newNode;
        newNode.prev = previous;

        newNode.next = current;
        current.prev = newNode;

        this.#length++;
    }

    // Buscar índice por valor
    find(value) {
        let current = this.#head;
        let index = 0;

        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index++;
        }

        return -1;
    }

    // Remover por índice
    removeAt(index) {
        if (index < 0 || index >= this.#length) return undefined;

        if (index === 0) return this.removeFirst();
        if (index === this.#length - 1) return this.removeLast();

        let current = this.#head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

        this.#length--;
        return current.value;
    }

    size = () => this.#length;

    isEmpty = () => this.#length === 0;

    toString() {
        let current = this.#head;
        let list = "";

        while (current) {
            list += current.value + " <-> ";
            current = current.next;
        }

        console.log(list + "null");
    }
}

module.exports = DoublyLinkedList;