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

//O que a I.A. fez

// const Fila = require('./fila');

// const filaClientes = new Fila();

// filaClientes.enqueue("Cliente 1");
// filaClientes.enqueue("Cliente 2");
// filaClientes.enqueue("Cliente 3");
// filaClientes.enqueue("Cliente 4");

// console.log("=== Iniciando atendimento ===");

// function atenderProximo() {
//     if (filaClientes.estaVazia()) {
//         console.log("Todos os clientes foram atendidos!");
//         return; // fim da recursão
//     }

//     const cliente = filaClientes.dequeue();
//     console.log(`${cliente} está sendo atendido...`);

//     // tempo aleatório entre 1s e 3s
//     const tempoAtendimento = Math.floor(Math.random() * 2000) + 1000;

//     setTimeout(() => {
//         console.log(`${cliente} foi atendido em ${tempoAtendimento} ms`);
//         atenderProximo(); // chama o próximo
//     }, tempoAtendimento);
// }

//O que eu vou tentar fazer, DESAFIO SETTIMEOUT()

//atenderProximo(); // começa o processo


//O que o Bardeli pensou -> setInterval();
// const Fila = require('./fila');

// const filaClientes = new Fila();


// console.log("Seja bem-vindo a fila de atendimento!");
// console.log("-------------------------------------");

// filaClientes.enqueue("Cliente 1");
// filaClientes.enqueue("Cliente 2");
// filaClientes.enqueue("Cliente 3");
// filaClientes.enqueue("Cliente 4");


// async function atendendoClient(){

//     if(filaClientes.estaVazia()){
//         console.log("Todos os clientes foram atendidos.")
//         return;
//     }
    
//     console.log(`Cliente ${filaClientes.dequeue()} foi atendido!`)

// }

// atendendoClient();

// setInterval(atendendoClient, 3000);

// Desafio feito com ajuda dos Devs Altair P., Lucas B. e Pietro V.

const Fila = require('./fila');

const filaClientes = new Fila();


console.log("Seja bem-vindo a fila de atendimento!");
console.log("-------------------------------------");

filaClientes.enqueue("Cliente 1");
filaClientes.enqueue("Cliente 2");
filaClientes.enqueue("Cliente 3");
filaClientes.enqueue("Cliente 4");


function atendendoClient(){

    if(filaClientes.estaVazia()){
        console.log("Todos os clientes foram atendidos.")
        return;
    }
    
    console.log(`Cliente ${filaClientes.dequeue()} foi atendido!`)

    setTimeout(atendendoClient, 3000);
}

atendendoClient();

