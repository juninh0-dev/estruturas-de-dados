const mapa = new Map();

//Em JavaScript, um dicionário é basicamente um Object ou um Map

const dicionario = {
    nome: "Juninho",
    idade: 18,
    cidade: "Jaú"
};

console.log(dicionario.nome);  // Acessa pelo nome da chave

mapa.set("nome", "Juninho");
mapa.set("classe", "Mago");

console.log(mapa.get("classe")); // "Mago"