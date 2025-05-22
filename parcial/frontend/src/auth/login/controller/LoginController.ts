import LoginModel from '../model/LoginModel.js'
import LoginView from '../view/LoginView.js'

export default class LoginController {
  constructor(
    private readonly model: LoginModel,
    private readonly view: LoginView
  ) { }

  readonly init = async () => {
    console.log('LoginController.init()')
    this.model.init()
    this.view.init()
    await this.view.render()
  }

  readonly getLoginHTML = (): HTMLElement => {
    return this.view.getLoginHTML()
  }

  readonly loginMethod = async (email: string, password: string, captchaToken: string): Promise<void> => {
    console.log('LoginController.loginMethod()')
    await this.model.login(email, password, captchaToken)
  }
}
