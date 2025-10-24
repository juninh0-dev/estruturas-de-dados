// benchmark.js
// Benchmark de estruturas de dados

// =======================
// Estruturas de Dados
// =======================

// PILHA
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

// FILA
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

// LISTA ENCADEADA
class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        const node = new LinkedListNode(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) current = current.next;
        current.next = node;
    }
    traverse() {
        let current = this.head;
        while (current) {
            current = current.next;
        }
    }
}

// LISTA DUPLAMENTE ENCADEADA
class DoublyLinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(value) {
        const node = new DoublyLinkedListNode(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    traverse() {
        let current = this.head;
        while (current) {
            current = current.next;
        }
    }
}

// ÁRVORE BINÁRIA
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        const node = new BinaryTreeNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        const insertNode = (current) => {
            if (!current.left) {
                current.left = node;
            } else if (!current.right) {
                current.right = node;
            } else {
                insertNode(current.left);
            }
        };
        insertNode(this.root);
    }
    traverse(node = this.root) {
        if (!node) return;
        this.traverse(node.left);
        this.traverse(node.right);
    }
}

// ÁRVORE BINÁRIA DE BUSCA
class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        const node = new BSTNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                current = current.right;
            }
        }
    }
    traverse(node = this.root) {
        if (!node) return;
        this.traverse(node.left);
        this.traverse(node.right);
    }
}

// =======================
// Benchmark
// =======================
const N = 100000; // Quantidade de elementos para teste
const data = Array.from({ length: N }, (_, i) => i);

// ARRAY
console.time("Array push");
const array = [];
for (let i = 0; i < N; i++) array.push(data[i]);
console.timeEnd("Array push");

console.time("Array access");
for (let i = 0; i < N; i++) {
    const temp = array[i];
}
console.timeEnd("Array access");

// PILHA
console.time("Stack push/pop");
const stack = new Stack();
for (let i = 0; i < N; i++) stack.push(data[i]);
while (!stack.isEmpty()) stack.pop();
console.timeEnd("Stack push/pop");

// FILA
console.time("Queue enqueue/dequeue");
const queue = new Queue();
for (let i = 0; i < N; i++) queue.enqueue(data[i]);
while (!queue.isEmpty()) queue.dequeue();
console.timeEnd("Queue enqueue/dequeue");

// LISTA ENCADEADA
console.time("LinkedList add/traverse");
const linkedList = new LinkedList();
for (let i = 0; i < N; i++) linkedList.add(data[i]);
linkedList.traverse();
console.timeEnd("LinkedList add/traverse");

// LISTA DUPLAMENTE ENCADEADA
console.time("DoublyLinkedList add/traverse");
const doublyLinkedList = new DoublyLinkedList();
for (let i = 0; i < N; i++) doublyLinkedList.add(data[i]);
doublyLinkedList.traverse();
console.timeEnd("DoublyLinkedList add/traverse");

// ÁRVORE BINÁRIA
console.time("BinaryTree add/traverse");
const binaryTree = new BinaryTree();
for (let i = 0; i < N; i++) binaryTree.add(data[i]);
binaryTree.traverse();
console.timeEnd("BinaryTree add/traverse");

// ÁRVORE BINÁRIA DE BUSCA
console.time("BST add/traverse");
const bst = new BinarySearchTree();
for (let i = 0; i < N; i++) bst.add(data[i]);
bst.traverse();
console.timeEnd("BST add/traverse");

console.log("Benchmark concluído!");
