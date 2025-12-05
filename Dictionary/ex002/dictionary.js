function contarCaracteres(texto) {
    const contador = {}; // dicionário que vai guardar char → quantidade

    //O for...of é uma estrutura de repetição do JavaScript usada para percorrer valores iteráveis, como:

    //     arrays

    //     strings

    //     mapas(Map)

    //     conjuntos(Set)

    // listas de elementos do DOM

    // entre outros.

    // Ele não percorre objetos comuns(dicionários), porque objetos não são iteráveis.
    for (let char of texto) {
        if (char === " ") continue; // ignorar espaços

        // Se o caractere ainda não existe, inicia com 1
        // Senão, incrementa
        contador[char] = (contador[char] || 0) + 1;
    }

    return contador;
}

// Exemplo de uso
const resultado = contarCaracteres("programacao web");
console.log(resultado);


// ✅ Como funciona o for...of

// Ele pega diretamente cada valor da estrutura, um por vez.

// Exemplo com array:
const frutas = ["maçã", "banana", "uva"];

for (let fruta of frutas) {
    console.log(fruta);
}