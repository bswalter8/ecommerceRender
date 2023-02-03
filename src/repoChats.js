
import ContainerDAOFactory from './DaoFactory.js'
import { asDto } from './ChatsDto.js'


const DAO = ContainerDAOFactory.get('Chats');
DAO.init();


export default class RepoChats {

        async getAll() {
            return asDto(await DAO.getAll());
        }
        
        async add(idName) {
            return asDto(await DAO.save(idName));
         }
}