import MySQLUser from "../../../sql/infrastructure/database/MySQLUser"
import UserRouterExpressInterface from "../../domain/interfaces/UserRouterExpressInterface"
import AuthControllerExpress from "../express/controller/AuthControllerExpress"
import UserControllerExpress from "../express/controller/UserControllerExpress"
import UserRouterExpress from "../express/router/UserRouterExpress"
import UserUseCaseFactory from "./UserUseCaseFactory"

export default class UserRouterFactory {
  public static create(): UserRouterExpressInterface {
    const mySQLUser = new MySQLUser()
    //use case
    const authUseCase = UserUseCaseFactory.createAuthUseCase(mySQLUser)
    const userUseCase = UserUseCaseFactory.createUserUseCase(mySQLUser)
    // controller
    const userController = new UserControllerExpress(userUseCase)
    const authController = new AuthControllerExpress(authUseCase)
    return new UserRouterExpress(userController,authController)
  }
}
