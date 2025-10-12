// Classe Node para representar um nó na árvore binária
class Node {
    constructor(value) {
        this.value = value; //Valor armazenado no nó
        this.left = null;   //Referência para o nó filho à esquerda
        this.right = null;  //Referência para o nó filho à direita
    }
}

class BinaryTree{

    constructor() {
        this.root = null; //Inicialmente, a árvore esta vazia, então a raiz é null
    }


    //Método para inserir um valor na árvore
    insert(value) {
        const newNode = new Node (value); //Cria um novo nó com o valor dado
        if (this.root === null) {
            //Se a árvore estive vazia, o novo nó se torna a raiz
            this.root = newNode;
        } else {
            //Caso contrário, insere o nó na posição correta
            this._insertNode(this.root, newNode);
        }
    }

    //Método auxiliar para encontrar a posição correta e inserir o nó na árvore
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            //Se o valor do novo nó for menor que o valor do nó atual, vá para a subárvore esquerda
            if (node.left === null) {
                //Se não houver o nó na esquerda, insere o novo nó aqui
                node.left = newNode;
            }
            else {
                //Caso contrário, chama o método recursivamente na subárvore da esquerda
                this._insertNode(node.left, newNode);
            }
        }
        else {
            //Se o valor do novo nó for maior ou igual ao valor do nó atual, vá para a subárvore direita
            if (node.right === null) {
            //Se não houver nó à direita, insere o novo nó aqui
            node.right = newNode;
            }
            else {
                //Caso contrário, chama o método recursivamente na subárvore direita
                this._insertNode(node.right, newNode);
           }

        }   
    }
        //Percurso em-ordem: visita a subárvore da esquerda, o nó atual e a subárvore da direita
        inOrder(node = this.root) {
            if (node !==  null) {
                this.inOrder(node.left); //Visita a subárvore da esquerda
                console.log(node.value); //Visita o nó atual
                this.inOrder(node.right); //Visita a subárvore da direita
            }
        }

        //Percurso pré-ordem: visita o nó atual, a subárvore da esquerda e a subárvore da direita
        preOrder(node = this.root) {
            if (node !== null) {
                console.log (node.value); //Visita o nó atual
                this.preOrder(node.left); //Visita a subárvore da esquerda
                this.preOrder(node.right); //Visita a subárvore da direita
            }
        }

        //Percurso pós-ordem: visita a subárvore da esquerda, a subárvore da direita e o nó atual
        postOrder(node = this.root) {
            if(node !== null) {
                this.postOrder(node.left) //Visita a subárvore da esquerda
                this.postOrder(node.right) //Visita a subárvore da direita
                console.log (node.value) //Visita o nó atual
            }
        }

        //Método para buscar um nó na árvore
        search(value) {
            return this._searchNode(this.root, value); //Inicia a busca a partir da raiz
        }

        //Método auxiliar para realizar a buscar recursivamente
        _searchNode(node, value) {
            if (node === null) {
                //Se o nó atual é null, o valor não esta na árvore
                return false;  
            }
            if (value === node.value) {
                //Se o valor é encontrado, retorna true
                return true;
            }
            else if (value < node.value) {
                //Se o valor procurado é menor, continua a busca da subárvore da esquerda
                return this._searchNode(node.left, value);
            }
            else {
                //Se o valor procurado é maior, continua a busca da subárvore da direita
                return this._searchNode(node.right, value);
            }
        }
            //Método para remover um nó com o valor especificado
            remove(value) {
                this.root = this._removeNode(this.root, value); //Inicia a remoção a partir da raiz
            }

            //Método auxiliar para remover o nó recursivamente
            _removeNode(node,value) {
                if (node === null) {
                    return null; //Se o nó é null, não há nada para remover
                }

                if (value < node.value) {
                    //Se o valor a ser removido é menor, continua na subárvore esquerda
                    node.left = this._removeNode(node.left , value);
                    return node;
                }

                else if (value > node.value) {
                    //Se o valor a ser removido é maior, continua na subárvore direita
                    node.right = this._removeNode(node.right , value);
                    return node;
                }
                else {
                    //Se o valor é igual ao nó atual, este é o nó a ser removido

                    //Caso 1: Nó sem filhos (nó folha)
                    if (node.left === null && node.right === null) {
                        node = null; //Remove o nó ao definir como null
                        return node;
                    }

                    //Caso 2: Nó com um filho
                    if (node.left === null) {
                        node = node.right;
                        return node; 
                    } else if (node.right === null) {
                        node = node.left;
                        return node;
                    }

                    //Caso 3: Nó com dois filhos
                    //Encontra o nó com menor valor na subárvore direita
                    const aux = this._findMinNode(node.right);
                    node.value = aux.value; //Substitui o valor do nó atual pelo valor mínimo encontrado
                    node.right = this._removeNode(node.right, aux.value) //Remove o nó duplicado na subárvore da direita
                    return node;
                }

                }
                _findMinNode(node){
                    while (node.left !== null) {
                        node = node.left;
                    } return node;
            }
    }
    //Fim da classe