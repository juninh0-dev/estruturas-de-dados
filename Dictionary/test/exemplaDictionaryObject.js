// // Criando um dicionário com um objeto
// const dicionario = {
//     nome : "João",
//     idade: 20,
//     profissao: "Engenheiro"
// };
// console.log(dicionario.nome) // Saída: João
// console.log(dicionario.idade) // Saída: 20

// const dicionario = {}

// // Adicionando chaves e valores
// dicionario["cor"] = "azul"; 
// dicionario.tamanho = "grande"; 

// console.log(dicionario); // Saída: {cor: 'azul', tamanho: 'grande'}

// // Removendo uma chave
// delete dicionario["cor"];
// console.log(dicionario); // Saída: {tamanho: 'grande'}

// const dicionario = {
//     fruta: "maçã",
//     cor: "vermelho",
//     preco: 5
// };

// // Usando `for...in`
// for (const chave in dicionario) {
//     console.log(`${chave}: ${dicionario[chave]}`);
// }

// const dicionario = {
//     /*Isso é a chave -->*/ nome: "João" /*<-- Esse é o valor*/,
//     idade: 25,
//     cidade: "São Paulo"
// };

// //Obter todas as chaves
// console.log(Object.keys(dicionario)); // Saída: [nome, idade, cidade]

// // Obter todos os valores
// console.log(Object.values(dicionario)); // Saída: ['João', 25, 'São Paulo']

// // Obter pares chave-valor
// Object.entries(dicionario).forEach(([chave, valor])=>{
//     console.log(`${chave}: ${valor}`)
// })

// const dicionario = {fruta: "maça"};

// if("fruta" in dicionario){
//     console.log("Chave encontrada!");
// } else {
//     console.log("Chave não encontrada!");
// }

// const dados = {nome: "Carlos"};

// if(!("idade" in dados)){
//     dados["idade"] = 28;
// }

// console.log(dados); // Saída: { nome: "Carlos", idade: 28}

// const mapa = new Map();

// // Adicionando pares chave-valor
// mapa.set("nome",  "Ana");
// mapa.set("idade", 30);

// // Obtendo valores
// console.log(mapa.get("nome")); // Saída: Ana

// //Verificando se uma chave existe
// console.log(mapa.has("idade")) //Saída: true

// //Removendo uma chave
// mapa.delete("idade")
// console.log(mapa.has("idade")) //Saída: false

const mapa = new Map([
    ["chave1", "valor1"],
    ["chave2", "valor2"]
]);

// Iterando com for...of
for (const [chave, valor] of mapa){
    console.log(`${chave}: ${valor}`)
}