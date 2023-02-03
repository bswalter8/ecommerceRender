import ContenedorMongoDB from "./ContenedorMongoDB.js";
import ChatModel from "./ChatModel.js";
import  config  from "./config.js";

class ChatDAOMongoDB extends ContenedorMongoDB {
    constructor(){
        super(ChatModel,config.mongodb.cnxStr, config.mongodb.options);
    }
}

export default ChatDAOMongoDB;