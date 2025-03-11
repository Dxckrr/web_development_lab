import GetterCategory from "../../../product/infrastructure/repository/helpers/GetterCategory";
import GetterImage from "../../../product/infrastructure/repository/helpers/GetterImage";
import GetterProduct from "../../../product/infrastructure/repository/helpers/GetterProduct";
import ProductRepository from "../../../product/infrastructure/repository/ProductRepository";
import MySQLCartInterface from "../../../sql/domain/interfaces/MYSQLCartInterface";
import MySQLCategoryInterface from "../../../sql/domain/interfaces/MYSQLCategoryInterface";
import MySQLProductInterface from "../../../sql/domain/interfaces/MYSQLProductInterface";
import MySQLUserInterface from "../../../sql/domain/interfaces/MYSQLUserInterface";
import UserRepository from "../../../user/infrastructure/repository/UserRepository";
import CartService from "../../application/service/CartService";
import CartUseCase from "../../application/usecase/CartUseCase";
import CartRepository from "../repository/CartRepository";
import GetterCart from "../repository/helpers/GetterCart";

export default class CartUseCaseFactory {
    public static create(
        mySQLUser: MySQLUserInterface,
        mySQLProduct: MySQLProductInterface,
        mySQlCart: MySQLCartInterface,
        mySQLCategory: MySQLCategoryInterface

    ) {
        //getter
        const getterImage = new GetterImage()
        const getterCategory = new GetterCategory(mySQLCategory)
        const getterProduct = new GetterProduct(getterImage, getterCategory)
        // repositories
        const userRepository = new UserRepository(mySQLUser)
        const productRepository = new ProductRepository(mySQLProduct, getterProduct)
        const getterCart = new GetterCart(userRepository, productRepository);
        const cartRepository = new CartRepository(mySQlCart, getterCart)
        const service = new CartService(cartRepository);
        return new CartUseCase(service);
    }
}
