import MySQLCategory from "../../../sql/infrastructure/database/MYSQLCategory"
import MySQLProduct from "../../../sql/infrastructure/database/MySQLProduct"
import ProductRouterExpressInterface from "../../domain/interfaces/ProductRouterExpressInterface"
import ProductController from "../express/controller/ProductControllerExpress"
import ProductRouterExpress from "../express/router/ProductRouterExpress"
import ProductUseCaseFactory from "./ProductUseCaseFactory"

export default class ProductRouterFactory {
    public static create(): ProductRouterExpressInterface {
        // database
        const mySQLProduct = new MySQLProduct()
        const mySQLCategory = new MySQLCategory()
        //use case
        const productUseCase = ProductUseCaseFactory.create(mySQLProduct,mySQLCategory)
        // controller
        const productController = new ProductController(productUseCase)

        return new ProductRouterExpress(productController)
    }
}
