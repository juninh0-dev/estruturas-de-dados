const MeuArray = require('./MeuArray');

let nomeFuncionarios = new MeuArray;

nomeFuncionarios.adicionar('Julião');
nomeFuncionarios.adicionar('Jerson');
nomeFuncionarios.adicionar('Julia');
nomeFuncionarios.adicionar('Jasmin');

console.log(nomeFuncionarios.obterElemento(2));
nomeFuncionarios.limpar();