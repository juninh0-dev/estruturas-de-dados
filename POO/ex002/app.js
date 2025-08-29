const Carro = require('./Carro.js');

const carro1 = new Carro("BMW",2022, 10);
const carro2 = new Carro("Audi",2021, 20);
const carro3 = new Carro("Mercedes",2023, 30);

carro1.acelerar();
carro2.acelerar();
carro3.acelerar();
carro2.frear();