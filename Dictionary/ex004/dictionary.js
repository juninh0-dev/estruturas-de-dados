function removerValoresNulos(obj) {
    for (let chave in obj) {
        if (obj[chave] === null || obj[chave] === undefined) {
            delete obj[chave];
        }
    }
    return obj;
}

const dados = {
    nome: "Ana",
    idade: null,
    endereco: undefined,
    curso: "DSM",
    nota: 8
};

console.log(removerValoresNulos(dados));