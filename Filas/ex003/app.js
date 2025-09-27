const Fila = require('./fila');

const bilhete = new Fila();

bilhete.enqueue("Visitante 1");
bilhete.enqueue("Visitante 2");
bilhete.enqueue("Visitante 3");
bilhete.enqueue("Visitante 4");

let contaor = 1;

while(!bilhete.estaVazia()){
    console.log(`O visitante ${contador}, embarcou no brinquedo.`);
    let desembarque =  bilhete.dequeue();
    console.log(`O visitante ${desembarque}, desembarcou no brinquedo.`);
    contador++;
}