// const Fila = require('./fila');

// const fila = new Fila();

// fila.enqueue("Visitante 1");
// fila.enqueue("Visitante 2");
// fila.enqueue("Visitante 3");
// fila.enqueue("Visitante 4");

// while (!fila.estaVazia()) {
//     let visitante = fila.dequeue();
//     console.log(`O ${visitante} embarcou no brinquedo.`);
//     console.log(`O ${visitante} desembarcou do brinquedo.`);
// }

const Fila = require('./fila');

const filaVIP = new Fila();
const filaNormal = new Fila();

// Adicionando visitantes
filaVIP.enqueue("Visitante VIP 1");
filaNormal.enqueue("Visitante 1");
filaNormal.enqueue("Visitante 2");
filaVIP.enqueue("Visitante VIP 2");
filaNormal.enqueue("Visitante 3");
filaNormal.enqueue("Visitante 4");

function processarFila() {

    // Checa se há visitantes
    if (filaVIP.estaVazia() && filaNormal.estaVazia()) {
        console.log("Todos os visitantes já foram atendidos.");
        return;
    }

    let visitante;

    // VIP sempre tem prioridade
    if (!filaVIP.estaVazia()) {
        visitante = filaVIP.dequeue();
        console.log(`${visitante} (PRIORIDADE) embarcou no brinquedo.`);
    } else {
        visitante = filaNormal.dequeue();
        console.log(`${visitante} embarcou no brinquedo.`);
    }

    // Simula tempo do brinquedo
    setTimeout(() => {
        console.log(`${visitante} desembarcou do brinquedo.`);
        processarFila(); // chama a próxima iteração
    }, 2000);

}

console.log("Iniciando operação do brinquedo...");
processarFila();
