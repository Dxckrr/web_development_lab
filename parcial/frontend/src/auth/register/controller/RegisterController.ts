import RegisterModel from '../model/RegisterModel.js'
import RegisterView from '../view/RegisterView.js'

export default class RegisterController {
  constructor(
    private readonly model: RegisterModel,
    private readonly view: RegisterView
  ) {}

  readonly init = async () => {
    console.log('RegisterController.init()')
    this.model.init()
    this.view.init()
    await this.view.render()
  }

  readonly getRegisterHTML = (): HTMLElement => {
    return this.view.getRegisterHTML()
  }
}
