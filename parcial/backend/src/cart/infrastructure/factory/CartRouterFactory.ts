import MySQLCart from "../../../sql/infrastructure/database/MYSQLCart"
import MySQLCategory from "../../../sql/infrastructure/database/MYSQLCategory"
import MySQLProduct from "../../../sql/infrastructure/database/MySQLProduct"
import MySQLUser from "../../../sql/infrastructure/database/MySQLUser"
import CartRouterInterface from "../../domain/interfaces/CartRouterExpressInterface"
import CartControllerExpress from "../express/controller/CartControllerExpress"
import CartRouterExpress from "../express/router/CartRouterExpress"
import CartUseCaseFactory from "./CartUseCaseFactory"

export default class CartRouterFactory {
    public static create(): CartRouterInterface {
        // database
        const mySQLUser = new MySQLUser()
        const mySQLProduct = new MySQLProduct()
        const mySQLCart = new MySQLCart()
        const mySQLCategory = new MySQLCategory()
        //service
        const carUseCase = CartUseCaseFactory.create(mySQLUser, mySQLProduct, mySQLCart,mySQLCategory)
        //controller
        const cartController = new CartControllerExpress(carUseCase)

        return new CartRouterExpress(cartController)
    }
}