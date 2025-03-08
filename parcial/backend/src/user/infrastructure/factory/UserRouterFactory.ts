import RouterExpressInterface from "../../../express/domain/RouterExpressInterface"
import UserControllerExpress from "../express/controller/UserControllerExpress"
import UserRouterExpress from "../express/router/UserRouterExpress"
import UserUseCaseFactory from "./UserUseCaseFactory"

export default class UserRouterFactory {
  public static create(): RouterExpressInterface {
    //use case
    const authUseCase = UserUseCaseFactory.createAuthUseCase()
    // controller
    const userController = new UserControllerExpress(authUseCase)
    return new UserRouterExpress(userController)
  }
}
