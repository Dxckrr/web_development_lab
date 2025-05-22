import RegisterController from './controller/RegisterController.js'
import RegisterModel from './model/RegisterModel.js'
import RegisterView from './view/RegisterView.js'

export default class Register {
  private readonly model: RegisterModel
  private readonly view: RegisterView
  private readonly controller: RegisterController

  constructor(element: string, loginMethod: (email: string, password: string, captchaToken?: string) => Promise<void>) {
    this.model = new RegisterModel(loginMethod)
    this.view = new RegisterView(element, this.model)
    this.controller = new RegisterController(this.model, this.view)
  }

  readonly init = () => {
    this.controller.init()
  }

  readonly getRegisterHTML = (): HTMLElement => {
    return this.controller.getRegisterHTML()
  }
}
