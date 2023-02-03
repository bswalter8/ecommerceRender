import ContainerDAOFactory from "./DaoFactory.js";
import { asDto } from "./CarritoDto.js";
import config from "./config.js";

const DAO = ContainerDAOFactory.get("Carrito");
DAO.init();

export default class RepoCarrito {
  async getAll() {
    const carritos = await DAO.getAll();
    return asDto(carritos);
  }

  async add(user) {
    const carrito = await DAO.add(user);
    return asDto(carrito);
  }

  async getById(idBuscado) {
    const carrito = await DAO.getById(idBuscado);

    return await DAO.getById(idBuscado);
  }

  async addProducto(product, idName) {
    return await DAO.setCartProduct(product, idName);
  }

  async updateProducto(id, idProduct, newProduct) {
    return await DAO.updateCartProduct(id, idProduct, newProduct);
  }

  async removeById(idBuscado) {
    const removida = await DAO.deleteById(idBuscado);
    return removida;
  }

  async removeProduct(id, idProd) {
    return await DAO.deleteProdByCartId(id, idProd);
  }

  async removeAllProducts(id) {
    return await DAO.deleteAllProductsByCartId(id);
  }
}
