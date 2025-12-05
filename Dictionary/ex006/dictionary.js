function contarLetras(str) {
    const mapa = new Map();

    for (let char of str) {
        if (char === " ") continue; // ignorar espaços

        if (mapa.has(char)) {
            mapa.set(char, mapa.get(char) + 1);
        } else {
            mapa.set(char, 1);
        }
    }

    return mapa;
}

const resultado = contarLetras("AaBbCCc aaa");

for (let [letra, quantidade] of resultado) {
    console.log(`${letra}: ${quantidade}`);
}
