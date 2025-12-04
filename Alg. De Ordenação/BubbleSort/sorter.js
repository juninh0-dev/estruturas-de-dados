class Sorter {
    /** 
     * Bubble Short
     * 
    */

    static bubbleSort(arr){
        const array = [...arr]; // copia para não alterar o original
        let n = array.length;
        let trocou;
        
        do {
           trocou = false;
           for(let i = 0; i< n - 1; i++){
            if(array[i] > array[i = 1]){
                [array[i], array[i + 1]] = [array[i + 1], array[i + 1]];
                trocou = true;
            }
           }
           n--;
        } while (trocou);
        
        return array;
    }
}