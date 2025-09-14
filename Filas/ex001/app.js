// const Fila = require('./fila');

// const filaClientes = new Fila();


// console.log("Seja bem-vindo a fila de atendimento!");
// console.log("-------------------------------------");

// filaClientes.enqueue("Cliente 1");
// filaClientes.enqueue("Cliente 2");
// filaClientes.enqueue("Cliente 3");

// let contador = 0;
// while (!filaClientes.estaVazia()) {

//         filaClientes.dequeue();
//         console.log(filaClientes.front() + " foi atendido");

//     contador++;
// }

// console.log("Todos os clientes foram atendidos em", contador, "iterações");

const Fila = require('./fila');

const filaClientes = new Fila();

filaClientes.enqueue("Cliente 1");
filaClientes.enqueue("Cliente 2");
filaClientes.enqueue("Cliente 3");
filaClientes.enqueue("Cliente 4");

console.log("=== Iniciando atendimento ===");

function atenderProximo() {
    if (filaClientes.estaVazia()) {
        console.log("Todos os clientes foram atendidos!");
        return; // fim da recursão
    }

    const cliente = filaClientes.dequeue();
    console.log(`${cliente} está sendo atendido...`);

    // tempo aleatório entre 1s e 3s
    const tempoAtendimento = Math.floor(Math.random() * 2000) + 1000;

    setTimeout(() => {
        console.log(`${cliente} foi atendido em ${tempoAtendimento} ms`);
        atenderProximo(); // chama o próximo
    }, tempoAtendimento);
}

atenderProximo(); // começa o processo
