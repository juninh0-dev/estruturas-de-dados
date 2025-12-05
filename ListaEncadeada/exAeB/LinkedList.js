// Exemplo clássico de um nó em JS
class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}

class LinkedList {
    #head = undefined;
    #length = 0;

    // Inserir no início da Lista
    insertAtBeginning(value) {
        let newNode = new Node(value);
        newNode.next = this.#head;
        this.#head = newNode;
        this.#length++;
    }

    // Inserir no fim da lista
    insertAtEnd(value) {
        let newNode = new Node(value);

        // Lista vazia
        if (this.#head === undefined) {
            this.#head = newNode;
            this.#length++;
            return;
        }

        // Percorre até o último nó
        let current = this.#head;
        while (current.next !== undefined) {
            current = current.next;
        }

        current.next = newNode;
        this.#length++;
    }

    // Remover um nó por valor
    removeByValue(value) {
        if (this.#head === undefined) return;

        // Remover o primeiro nó
        if (this.#head.value === value) {
            this.#head = this.#head.next;
            this.#length--;
            return;
        }

        let current = this.#head;

        // Procurar nó anterior ao nó a remover
        while (current.next !== undefined && current.next.value !== value) {
            current = current.next;
        }

        // Se encontrou o nó
        if (current.next !== undefined) {
            current.next = current.next.next;
            this.#length--;
        }
    }

    // Buscar um nó por valor
    find(value) {
        let current = this.#head;

        while (current !== undefined) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }

        return undefined;
    }

    // Retorna o tamanho da lista
    size() {
        return this.#length;
    }

    // Retorna true se a lista estiver vazia
    isEmpty = () => this.#head === undefined;

    // Exibir a lista
    toString() {
        let current = this.#head;
        let list = '';

        while (current !== undefined) {
            list += current.value + ' -> ';
            current = current.next;
        }

        console.log(list + 'undefined');
    }
}

module.exports = LinkedList;
