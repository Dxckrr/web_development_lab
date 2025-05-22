import LoginController from './controller/LoginController.js'
import LoginModel from './model/LoginModel.js'
import LoginView from './view/LoginView.js'

export default class Login {
  private readonly model: LoginModel
  private readonly view: LoginView
  private readonly controller: LoginController

  constructor(element: string) {
    this.model = new LoginModel()
    this.view = new LoginView(element, this.model)
    this.controller = new LoginController(this.model, this.view)
  }

  readonly init = () => {
    this.controller.init()
  }

  readonly getLoginHTML = (): HTMLElement => {
    return this.controller.getLoginHTML()
  }
  readonly loginMethod = (email: string, password: string, captchaToken: string): Promise<void> => {
    return this.controller.loginMethod(email, password, captchaToken)
  }
}
