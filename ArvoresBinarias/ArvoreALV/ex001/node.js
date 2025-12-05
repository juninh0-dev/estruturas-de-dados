class Node {
    constructor(valor) {
        this.valor = valor;
        this.esq = null;
        this.dir = null;
        this.altura = 1;
    }
}

class AVL {
    getAltura(no) {
        return no ? no.altura : 0;
    }

    getFB(no) {
        return no ? this.getAltura(no.esq) - this.getAltura(no.dir) : 0;
    }

    atualizarAltura(no) {
        no.altura = 1 + Math.max(this.getAltura(no.esq), this.getAltura(no.dir));
    }

    // ROTACAO DIREITA (LL)
    rotacaoDireita(y) {
        console.log(`\nRotação à Direita (LL) no nó ${y.valor}`);

        let x = y.esq;
        let T2 = x.dir;

        // Rotação
        x.dir = y;
        y.esq = T2;

        // Atualizar alturas
        this.atualizarAltura(y);
        this.atualizarAltura(x);

        return x;
    }

    // ROTACAO ESQUERDA (RR)
    rotacaoEsquerda(x) {
        console.log(`\nRotação à Esquerda (RR) no nó ${x.valor}`);

        let y = x.dir;
        let T2 = y.esq;

        // Rotação
        y.esq = x;
        x.dir = T2;

        // Atualizar alturas
        this.atualizarAltura(x);
        this.atualizarAltura(y);

        return y;
    }

    inserir(no, valor) {
        if (!no) {
            console.log(`\nInserindo ${valor}`);
            return new Node(valor);
        }

        if (valor < no.valor) {
            no.esq = this.inserir(no.esq, valor);
        } else {
            no.dir = this.inserir(no.dir, valor);
        }

        this.atualizarAltura(no);

        let fb = this.getFB(no);
        console.log(`FB(${no.valor}) = ${fb}`);

        // Caso LL
        if (fb > 1 && valor < no.esq.valor) {
            return this.rotacaoDireita(no);
        }

        // Caso RR
        if (fb < -1 && valor > no.dir.valor) {
            return this.rotacaoEsquerda(no);
        }

        // Caso LR
        if (fb > 1 && valor > no.esq.valor) {
            console.log(`\nCaso LR detectado no nó ${no.valor}`);
            no.esq = this.rotacaoEsquerda(no.esq);
            return this.rotacaoDireita(no);
        }

        // Caso RL
        if (fb < -1 && valor < no.dir.valor) {
            console.log(`\nCaso RL detectado no nó ${no.valor}`);
            no.dir = this.rotacaoDireita(no.dir);
            return this.rotacaoEsquerda(no);
        }

        return no;
    }

    // Apenas para exibir a árvore no terminal
    print(no, nivel = 0) {
        if (!no) return;

        this.print(no.dir, nivel + 1);
        console.log("   ".repeat(nivel) + no.valor);
        this.print(no.esq, nivel + 1);
    }
}

// ==============================
// TESTE PEDIDO (30, 20, 10)
// ==============================

let avl = new AVL();
let raiz = null;

raiz = avl.inserir(raiz, 30);
raiz = avl.inserir(raiz, 20);
raiz = avl.inserir(raiz, 10);

console.log("\nÁRVORE FINAL:");
avl.print(raiz);
