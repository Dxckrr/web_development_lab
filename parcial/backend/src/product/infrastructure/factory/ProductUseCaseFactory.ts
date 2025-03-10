import MySQLCategory from "../../../sql/infrastructure/database/MYSQLCategory";
import MySQLProduct from "../../../sql/infrastructure/database/MySQLProduct";
import ProductService from "../../application/service/ProductService";
import ProductUseCase from "../../application/usecase/ProductUseCase";
import ProductUseCasePort from "../../domain/port/driver/usecase/ProductUseCase";
import GetterCategory from "../repository/helpers/GetterCategory";
import GetterImage from "../repository/helpers/GetterImage";
import GetterProduct from "../repository/helpers/GetterProduct";
import ProductRepository from "../repository/ProductRepository";

export default class ProductUseCaseFactory {
    public static create(mySQLProduct: MySQLProduct, mySQLCategory: MySQLCategory): ProductUseCasePort {
        //getters
        const getterImage = new GetterImage()
        const getterCategory = new GetterCategory(mySQLCategory)
        const getterProduct = new GetterProduct(getterImage, getterCategory)
        //repository
        const productRepository = new ProductRepository(mySQLProduct,getterProduct);
        //service
        const productService = new ProductService(productRepository)
        return new ProductUseCase(productService);
    }

}
