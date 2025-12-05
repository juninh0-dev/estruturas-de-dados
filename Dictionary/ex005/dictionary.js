function contarPalavras(frase) {
    const mapa = new Map();

    // Transformar tudo em minúsculas e dividir por espaços
    const palavras = frase.toLowerCase().split(" ");

    for (let palavra of palavras) {
        if (palavra.trim() === "") continue; // Ignorar espaços extras

        if (mapa.has(palavra)) {
            mapa.set(palavra, mapa.get(palavra) + 1);
        } else {
            mapa.set(palavra, 1);
        }
    }

    return mapa;
}

const resultado = contarPalavras("o rato roeu a roupa do rei de roma o rei ficou bravo");

for (let [palavra, quantidade] of resultado) {
    console.log(`${palavra}: ${quantidade}`);
}
