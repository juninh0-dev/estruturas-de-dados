class Sorter {
    /** 
     * Quick Sort
     * 
    */

    static quickSort(arr) {
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
        return [...Sorter.quickSort(menores), pivot, ...Sorter.quickSort(maiores)];
    }
}