const AVLTree = require("./ALVTree");

const avl = new AVLTree();

function printTree(node, prefix = "", isLeft = true) {
    if (node === null) return;

    if (node.right) {
        printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

    if (node.left) {
        printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
}

function showStatus(tree, value) {
    console.log("\n--------------------------------------");
    console.log("Inserindo:", value);
    console.log("--------------------------------------");
    printTree(tree.getRoot());
}

[50, 20, 60, 10, 30, 25, 27].forEach(v => {
    avl.insert(v);
    showStatus(avl, v);
});

console.log("\nPercurso in-order final:");
avl.inOrder();
