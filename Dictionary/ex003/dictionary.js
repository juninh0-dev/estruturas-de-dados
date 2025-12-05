// Dicionário de produtos
const produtos = {
    101: { nome: "Mouse Gamer", preco: 120 },
    102: { nome: "Caderno", preco: 25 },
    103: { nome: "Fone de Ouvido", preco: 75 },
    104: { nome: "Caneta Azul", preco: 5 }
};

// Exibindo apenas produtos com preço acima de 50
console.log("Produtos acima de R$ 50:\n");

// Quando você faz:

// for (let matricula in aluno) {
//     console.log(matricula);
// }


// matricula NÃO contém o aluno.

// ✔ O que realmente acontece?

// O for...in percorre as chaves do objeto.

// Então, se você tem:

// const aluno = {
//     nome: "Carlos",
//     idade: 20,
//     curso: "DSM"
// };


// E faz:

// for (let matricula in aluno) {
//     console.log(matricula);
// }

// matricula NÃO contém o aluno.

// ✔ O que realmente acontece?

// O for...in percorre as chaves do objeto.

// Então, se você tem:

// matricula nesse caso é apenas o nome da chave sendo iterada, como uma variável temporária.

// Não importa se você chamou essa variável de matricula, x, banana… ela só representa cada chave do objeto.

// ✔ Resumo

// for...in → percorre chaves do objeto.

// A variável (no seu exemplo, matricula) vai receber cada chave do objeto, uma por vez.
for (let codigo in produtos) {
    const produto = produtos[codigo];

    if (produto.preco > 50) {
        console.log(`Código: ${codigo} | ${produto.nome} - R$ ${produto.preco}`);
    }
}
