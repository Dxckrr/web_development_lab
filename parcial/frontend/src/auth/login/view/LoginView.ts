import Observer from "../../../shared/types/Observer.js"
import LoginModel from "../model/LoginModel.js"
import LoginTemplate from "../template/LoginTemplate.js"


export default class LoginView extends Observer<LoginModel> {

  private readonly loginHTML: HTMLElement
  private isModalOpen: boolean = false

  constructor(element: string, loginModel: LoginModel) {
    super(loginModel)
    const login = document.createElement(element) as HTMLElement
    this.loginHTML = login
  }

  readonly init = () => {
    console.log('LoginView.init()')
  }

  readonly update = async (): Promise<void> => {
    console.log("filter View updated")
    await this.render()
  }

  readonly getLoginHTML = (): HTMLElement => {
    return this.loginHTML
  }

  readonly render = async () => {
    const loginModel = this.subject as LoginModel
    const template = new LoginTemplate();
    this.loginHTML.innerHTML = template.render();
    this.setupModalListeners();
    this.setupLoginFormListener(loginModel);

    // Insertar this.loginHTML en el DOM (por ejemplo en body o un contenedor)
    if (!document.body.contains(this.loginHTML)) {
      document.body.appendChild(this.loginHTML);
    }

    await template.loadRecaptchaScript();

    (window as any).grecaptcha.render(document.querySelector('.g-recaptcha'), {
      sitekey: template.SITE_KEY
    });


  }

  // Dentro de LoginView, agrega este método para configurar el listener del formulario:

  private readonly setupLoginFormListener = (loginModel :LoginModel) => {
    const form = this.loginHTML.querySelector('#login_form') as HTMLFormElement | null;
    if (!form) return;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const emailInput = form.querySelector('#login_email') as HTMLInputElement | null;
      const passwordInput = form.querySelector('#login_password')as HTMLInputElement | null ;
      if (!emailInput || !passwordInput) return;

      // Obtener token del reCAPTCHA
      const recaptchaResponse = (window as any).grecaptcha?.getResponse();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();


      // Llamar al método login del modelo
      await loginModel.login(email, password, recaptchaResponse);

    });
  };



  private readonly setupModalListeners = () => {
    // Botón cerrar modal (la X)
    const closeButton = this.loginHTML.querySelector('.login_modal_close_btn')
    if (closeButton) {
      closeButton.addEventListener('click', () => this.closeModal())
    }

    // Cerrar modal haciendo clic fuera del contenido (overlay)
    const backdrop = this.loginHTML.querySelector('.login_modal_backdrop')
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          this.closeModal()
        }
      })
    }
  }

  readonly openModal = () => {
    this.loginHTML.style.display = 'block'
    document.body.classList.add('modal-open')
    this.isModalOpen = true
  }

  readonly closeModal = () => {
    this.loginHTML.style.display = 'none'
    document.body.classList.remove('modal-open')
    this.isModalOpen = false
  }

  readonly toggleModal = () => {
    this.isModalOpen ? this.closeModal() : this.openModal()
  }
}
