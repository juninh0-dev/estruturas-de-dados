const Node = require("./Node.js");

class AVLTree {
  #root = null;

  // Retorna a altura do nó
  getHeight(node) {
    return node ? node.height : 0;
  }

  // Fator de balanceamento (altura da esquerda - altura da direita)
  getBalanceFactor(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  // Atualiza a altura do nó
  updateHeight(node) {
    node.height = 1 + Math.max(
      this.getHeight(node.left),
      this.getHeight(node.right)
    );
  }

  // Rotação à direita
  rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    // Rotaciona
    x.right = y;
    y.left = T2;

    // Atualiza alturas
    this.updateHeight(y);
    this.updateHeight(x);

    return x; // Novo root da subárvore
  }

  // Rotação à esquerda
  rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    // Rotaciona
    y.left = x;
    x.right = T2;

    // Atualiza alturas
    this.updateHeight(x);
    this.updateHeight(y);

    return y; // Novo root da subárvore
  }

  // Inserção pública
  insert(value) {
    this.#root = this._insertNode(this.#root, value);
  }

  // Inserção recursiva
  _insertNode(node, value) {
    // Inserção padrão BST
    if (!node) return new Node(value);

    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertNode(node.right, value);
    } else {
      return node; // Ignora valores duplicados
    }

    // Atualiza altura
    this.updateHeight(node);

    // Verifica balanceamento
    const balance = this.getBalanceFactor(node);

    // Casos de rotação
    // Caso Esquerda - Esquerda
    if (balance > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    // Caso Direita - Direita
    if (balance < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    // Caso Esquerda - Direita
    if (balance > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Caso Direita - Esquerda
    if (balance < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Percurso in-order (opcional)
  inOrder(node = this.#root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  // Busca pública
  search(value) {
    return this._searchNode(this.#root, value);
  }

  // Busca recursiva
  _searchNode(node, value) {
    if (!node) return false;

    if (value === node.value) return true;

    if (value < node.value)
      return this._searchNode(node.left, value);

    return this._searchNode(node.right, value);
  }

  getRoot() {
    return this.#root;
  }

}

module.exports = AVLTree;
