import ContenedorMongoDB from "./ContenedorMongoDB.js";
import {UserRole} from "./UserModel.js";
import  config  from "./config.js";

class UsersRoleDAOMongoDB extends ContenedorMongoDB {
    constructor(){
        super(UserRole,config.mongodb.cnxStr, config.mongodb.options);
    }
}

export default UsersRoleDAOMongoDB;