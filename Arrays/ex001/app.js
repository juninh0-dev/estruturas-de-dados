const MeuArray = require("./MeuArray");

const tarefas = new MeuArray();

tarefas.adicionar("Estudar JavaScript");
tarefas.adicionar("Estudar Node.js");
tarefas.adicionar("Estudar React");

tarefas.remover();

tarefas.mostrarTarefas(); // Irá mostrar todos as tarefas que não foram removidas

console.log(tarefas.obterElemento(4));
