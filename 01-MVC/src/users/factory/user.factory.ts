import UserController from '../controller/user.controller'
import UserModel from '../model/user.model'
import UserView from '../view/user.view'

export default class UserFactory {
  public static createUserView(): UserView {
    const userModel = new UserModel()
    const userController = new UserController(userModel)
    return new UserView(userController)
  }
}