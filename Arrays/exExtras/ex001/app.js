const MeuArray = require("./MeuArray");

let tarefas = new MeuArray();

tarefas.adicionar('Organizar arquivos');
tarefas.adicionar('Limpar a mesa');
tarefas.adicionar('Fazer uma reunião com equipe');
tarefas.adicionar('Atulizar mudanças');
tarefas.adicionar('Jogar o lixo fora');

tarefas.remover();

tarefas.mostrarTarefas();
