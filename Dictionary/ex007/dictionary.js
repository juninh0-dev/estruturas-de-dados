function objectParaMap(obj) {
    const mapa = new Map();

    for (let chave in obj) {
        mapa.set(chave, obj[chave]);
    }

    return mapa;
}

function mapParaObject(map) {
    const obj = {};

    for (let [chave, valor] of map) {
        obj[chave] = valor;
    }

    return obj;
}

const aluno = {
    nome: "Carlos",
    idade: 20,
    curso: "DSM"
};

const mapa = objectParaMap(aluno);
console.log(mapa); // Map(3)

const novoObj = mapParaObject(mapa);
console.log(novoObj); // { nome: 'Carlos', idade: 20, curso: 'DSM' }
