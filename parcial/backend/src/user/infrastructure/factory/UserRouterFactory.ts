import RouterExpressInterface from "../../../express/domain/RouterExpressInterface"
import MySQLUser from "../../../sql/infrastructure/database/MySQLUser"
import UserControllerExpress from "../express/controller/UserControllerExpress"
import UserRouterExpress from "../express/router/UserRouterExpress"
import UserUseCaseFactory from "./UserUseCaseFactory"

export default class UserRouterFactory {
  public static create(): RouterExpressInterface {
    const mySQLUser = new MySQLUser()
    //use case
    const authUseCase = UserUseCaseFactory.createAuthUseCase(mySQLUser)
    // controller
    const userController = new UserControllerExpress(authUseCase)
    return new UserRouterExpress(userController)
  }
}
