import ImageManagerInterface from "../../../image/domain/interfaces/ImageManagerInterface";
import MySQLCategoryInterface from "../../../sql/domain/interfaces/MYSQLCategoryInterface";
import MySQLProductInterface from "../../../sql/domain/interfaces/MYSQLProductInterface";
import ProductService from "../../application/service/ProductService";
import ProductUseCase from "../../application/usecase/ProductUseCase";
import ProductUseCasePort from "../../domain/port/driver/usecase/ProductUseCase";
import GetterCategory from "../repository/helpers/GetterCategory";
import GetterImage from "../repository/helpers/GetterImage";
import GetterProduct from "../repository/helpers/GetterProduct";
import ImageRepository from "../repository/ImageRepository";
import ProductRepository from "../repository/ProductRepository";

export default class ProductUseCaseFactory {
    public static create(
        mySQLProduct: MySQLProductInterface,
        mySQLCategory: MySQLCategoryInterface,
        imageManager: ImageManagerInterface): ProductUseCasePort {
        //getters
        const getterImage = new GetterImage()
        const getterCategory = new GetterCategory(mySQLCategory)
        const getterProduct = new GetterProduct(getterImage, getterCategory)
        //repository
        const productRepository = new ProductRepository(mySQLProduct, getterProduct);
        const imageRepository = new ImageRepository(imageManager)
        //service
        const productService = new ProductService(productRepository, imageRepository)
        return new ProductUseCase(productService);
    }

}
