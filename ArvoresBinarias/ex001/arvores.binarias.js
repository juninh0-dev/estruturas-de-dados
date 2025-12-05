// Classe Node para representar um nó na árvore binária
class Node {
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

    // Inserção
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Percurso em ordem
    inOrder(node = this.root) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    // Pré-ordem
    preOrder(node = this.root) {
        if (node !== null) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // Pós-ordem
    postOrder(node = this.root) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }

    // Busca
    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (node === null) return false;
        if (value === node.value) return true;

        return value < node.value
            ? this._searchNode(node.left, value)
            : this._searchNode(node.right, value);
    }

    // Remoção
    remove(value) {
        this.root = this._removeNode(this.root, value);
    }

    _removeNode(node, value) {
        if (node === null) return null;

        if (value < node.value) {
            node.left = this._removeNode(node.left, value);
            return node;
        }

        if (value > node.value) {
            node.right = this._removeNode(node.right, value);
            return node;
        }

        // Achou o nó para remover
        // Caso 1: nó sem filhos
        if (node.left === null && node.right === null) {
            return null;
        }

        // Caso 2: 1 filho
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;

        // Caso 3: dois filhos
        const aux = this._findMinNode(node.right);
        node.value = aux.value;
        node.right = this._removeNode(node.right, aux.value);
        return node;
    }

    _findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}
