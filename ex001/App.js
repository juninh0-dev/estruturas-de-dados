// importantando a classe Pessoa
const Pessoa = require('./Pessoa.js')

const pessoa1 = new Pessoa();
const pessoa2 = new Pessoa();

pessoa1.nome = "Altair";
pessoa1.idade = 18;

pessoa2.nome = "Euller";
pessoa2.idade = 22;

pessoa1.apresentar();
pessoa2.apresentar();