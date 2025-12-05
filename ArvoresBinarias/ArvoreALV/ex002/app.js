const AVLTree = require("./ALVTree");

// Função auxiliar para desenhar a árvore (console)
function printTree(node, prefix = "", isLeft = true) {
  if (!node) return;

  console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);
  printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
  printTree(node.right, prefix + (isLeft ? "    " : "│   "), false);
}

// Executar inserções com log detalhado
function simulateLRCase() {
  const avl = new AVLTree();
  const valores = [20, 10, 30, 25, 40, 22];

  console.log("\n=========== SIMULAÇÃO DO CASO LR (ESQUERDA-DIREITA) ===========\n");

  for (let value of valores) {
    console.log(`\n👉 Inserindo: ${value}`);
    avl.insert(value);

    console.log("\nÁrvore após inserção:");
    printTree(avl.getRoot());

    console.log("\nFatores de balanceamento:");
    printBalance(avl.getRoot());

    console.log("\n---------------------------------------------------------\n");
  }

  console.log("\n=========== ÁRVORE FINAL BALANCEADA ===========\n");
  printTree(avl.getRoot());
  console.log("\n=================================================\n");
}

// Função para imprimir fator de balanceamento de cada nó
function printBalance(node) {
  if (!node) return;
  printBalance(node.left);

  const leftH = node.left ? node.left.height : 0;
  const rightH = node.right ? node.right.height : 0;
  const fb = leftH - rightH;

  console.log(`FB(${node.value}) = ${fb}`);

  printBalance(node.right);
}

simulateLRCase();
