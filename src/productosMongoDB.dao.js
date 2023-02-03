import ContenedorMongoDB from "./ContenedorMongoDB.js";
import ProductoModel from "./ProductoModel.js";
import  config  from "./config.js";

class ProductosDAOMongoDB extends ContenedorMongoDB {
    constructor(){
        super(ProductoModel,config.mongodb.cnxStr, config.mongodb.options);
    }
}

export default ProductosDAOMongoDB;