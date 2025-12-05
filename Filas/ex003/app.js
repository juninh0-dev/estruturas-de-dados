const Fila = require('./fila');

const fila = new Fila();

fila.enqueue("Visitante 1");
fila.enqueue("Visitante 2");
fila.enqueue("Visitante 3");
fila.enqueue("Visitante 4");

let contador = 1;

while(!fila.estaVazia()){
    console.log(`O visitante ${contador}, embarcou no brinquedo.`);
    let desembarque =  fila.dequeue();
    console.log(`O visitante ${desembarque}, desembarcou no brinquedo.`);
    contador++;
}