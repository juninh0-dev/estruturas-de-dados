class Matematica{
    static somar(a, b){
        return a + b;
    }

    static subtrair(a, b){
        return a - b;
    }

    static fatorial(n){
        let res = 1;

        for(let i = 1; i <= n; i++){
            res *= i;
        }
        
        return res;
    }
}

module.exports = Matematica;