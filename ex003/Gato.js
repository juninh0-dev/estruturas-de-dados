const Animal = require("./Animal");

class Gato extends Animal{
    falar(){
            super.falar(console.log("Miau..."));
    };

}

module.exports = Gato;