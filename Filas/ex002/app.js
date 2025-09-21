const Fila = require('./fila');

const doc = new Fila();

doc.enqueue({ nome: "Relatório Financeiro - Q1 2025", tamanho: "250KB" });
doc.enqueue({ nome: "Manual de Treinamento da Equipe", tamanho: "480KB" });
doc.enqueue({ nome: "Proposta de Projeto: Sistema de Gestão", tamanho: "310KB" });
doc.enqueue({ nome: "Pesquisa de Satisfação de Clientes", tamanho: "150KB" });
doc.enqueue({ nome: "Contrato de Parceria Comercial", tamanho: "95KB" });


while(!doc.estaVazia()){
    
    let documento = doc.dequeue();
    console.log("-=============================================================-")
    console.log(`Documento ${documento.nome} - ${documento.tamanho}, foi impresso.`);


}