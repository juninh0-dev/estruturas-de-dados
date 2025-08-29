const Endereco = require("./Endereco");
const Cliente = require("./Cliente");

const endereco = new Endereco("173047-009", "Rua dos bobos", "Grand CILAS", 135);
const cliente = new Cliente("Altair", 18, endereco);

cliente.infCliente();