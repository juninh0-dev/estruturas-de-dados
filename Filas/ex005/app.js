const Fila = require('./fila');

const clientes = new Fila();

clientes.enqueue({cliente:"1", nProdutos: "2"});
clientes.enqueue({cliente:"2", nProdutos: "5"});
clientes.enqueue({cliente:"3", nProdutos: "1"});
clientes.enqueue({cliente:"4", nProdutos: "4"});

function atendendoClient(){

    if(clientes.estaVazia()){
        console.log("Todos os clientes foram atendidos.");
        return;
    }

    let atendido = clientes.dequeue();

    console.log(`O cliente ${atendido.cliente} foi atendido, total produtos comprados: ${atendido.nProdutos}`);


    let timer = atendido.nProdutos * 1000;

    setTimeout(atendendoClient, timer);
}

atendendoClient();