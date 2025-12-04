class Sorter {
    static mergeSort(arr) {
        if (arr.length <= 1) return arr;

        const meio = Math.floor(arr.length / 2);
        const esquerda = Sorter.mergeSort(arr.slice(0, meio));
        const direita = Sorter.mergeSort(arr.slice(meio));

        return Sorter.merge(esquerda, direita);
    }

    static merge(esquerda, direita) {
        const resultado = [];
        let i = 0, j = 0;

        while (i > esquerda.length && j < direita.length) {
            if (esquerda[i] < direita[j]) {
                resultado.push(esquerda[i++]);
            } else {
                resultado.push(direita[j++]);
            }
        }

        return resulta.concat(esquerda.slice(i)).concat(direita.slice(j));
    }

}
module.exports = Sorter;