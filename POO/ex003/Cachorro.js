const Animal = require("./Animal");

class Cachorro extends Animal{
    falar(){
        super.falar(console.log("Au! Au!"))
    };
}

module.exports = Cachorro;