const MinhaFila = require('./fila');

let fila = new MinhaFila;

// let contador = 1;
// do {
//     fila.enqueue('Cliente');
//     console.log(`O ${fila.dequeue()} ${contador}, acabou de sair da fila`);
//     contador++;
// } while (contador < 5);

console.log("Seja bem-vindo a fila de atendimento!");
console.log("-------------------------------------");

fila.enqueue("Cliente 1");
fila.enqueue("Cliente 2");
fila.enqueue("Cliente 3");
fila.enqueue("Cliente 4");

function standBy() {
    if (fila.estaVazia()) {
        console.log("Todos os Clientes foram atendidos!")
        return;
    }

    console.log(`Cliente ${fila.dequeue()} foi atendido!`)

    setTimeout(standBy, 3000);
}

standBy();