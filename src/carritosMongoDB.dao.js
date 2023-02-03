import ContenedorMongoDB from "./ContenedorMongoDB.js";
import CarritoModel from "./CarritoModel.js";
import  config  from "./config.js";

class CarritoDAOMongoDB extends ContenedorMongoDB {
    constructor(){
        super(CarritoModel,config.mongodb.cnxStr, config.mongodb.options);
    }
}

export default CarritoDAOMongoDB;