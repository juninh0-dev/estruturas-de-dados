class Shorter {
    /** 
     * Quick Short
     * 
    */

    static quickShort(arr) {
        if (arr.length <= 1) return arr;

        const pivot = arr[arr.length - 1];
        const menores = [];
        const maiores = [];


        for (let i = 0; i < arr.length - 1; i++) {
            if (array[i] < pivot) {
                menores.push(arr[i]);
            } else {
                maiores.push(arr[i])
            }
        }
        return [...Shorter.quickShort(menores), pivot, ...Shorter.quickShort(maiores)];
    }
}