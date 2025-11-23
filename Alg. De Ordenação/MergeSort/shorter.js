class Shorter{
    static mergeSort(arr){
        if (arr.length <= 1) return arr;
        
        const meio = Math.floor(arr.length / 2);
        const esquerda = Shorter.mergeSort(arr.slice(0, meio));
        const direita = Shorter.mergeSort(arr.slice(meio));

        return Shorter.merge(esquerda, direita);
    }
}