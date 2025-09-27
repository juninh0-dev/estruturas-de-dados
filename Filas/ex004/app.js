const Fila = require('./fila');

const pedidos = new Fila();

pedidos.enqueue({numero: "Pedido 1", nome: "Batata Frita", tamanho: "grande"})
pedidos.enqueue({numero: "Pedido 2", nome: "Pizza de mussarela", tamanho: "média"})
pedidos.enqueue({numero: "Pedido 3", nome: "Suco de Laranja", tamanho: "500 ml"})
pedidos.enqueue({numero: "Pedido 4", nome: "Sorvete de Chocolate", tamanho: "2 bolas"})

while(!pedidos.estaVazia()){
    //let preparado = 
    let preparado = pedidos.dequeue();
    console.log(`O pedido ${preparado.numero} (${preparado.nome + "" + ", " + preparado.tamanho}) está sendo preparado!`);
}