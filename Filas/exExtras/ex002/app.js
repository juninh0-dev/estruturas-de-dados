//UM JEITO DIFERNETE QUE O CHAT ME SUGERIU, MAS TEM O QUE EU FIZ ATERIORMENTE

const Fila = require('./Fila'); // sua classe Fila
const filaImpressao = new Fila();

// documentos que entrarão na fila
const documentos = [
    { nome: "Trabalho de Matemática", paginas: 12 },
    { nome: "Artigo de Programação", paginas: 5 },
    { nome: "Contrato de Serviço", paginas: 3 },
    { nome: "Relatório Financeiro", paginas: 20 }
];

// adiciona documentos à fila
documentos.forEach(doc => filaImpressao.enqueue(doc));
if (documentos) {
    console.log("A fila TA CHEIAAA!")
}
// função que simula a impressão
function imprimir() {

    // pega o próximo documento
    const doc = filaImpressao.dequeue();

    if (!doc) {
        console.log("Fila vazia. Todos os documentos foram impressos!");
        return;
    }
    console.log(`Imprimindo: ${doc.nome} (${doc.paginas} páginas)...`);

    // simula tempo de impressão
    setTimeout(() => {
        console.log(`✔ Documento "${doc.nome}" concluído!`);
        imprimir(); // chama novamente até a fila acabar
    }, 2000); // tempo entre documentos
}

// inicia a impressão
console.log("Iniciando fila de impressão...");
imprimir();
