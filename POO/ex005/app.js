const Moto = require("./Veiculo");
const Carro = require("./Veiculo");

const carro = new Carro("Toyota", "Corolla", 2022);
const moto = new Moto("Honda", "CB 500F", 2023);

carro.infVeiculo();
moto.infVeiculo();