import Observer from "../../../shared/types/Observer.js"
import RegisterModel from "../model/RegisterModel.js"
import RegisterTemplate from "../template/RegisterTemplate.js"

export default class RegisterView extends Observer<RegisterModel> {
  private readonly registerHTML: HTMLElement
  private isModalOpen: boolean = false



  constructor(element: string, registerModel: any) {
    super(registerModel)
    const register = document.createElement(element)
    this.registerHTML = register
  }

  readonly init = () => {
    console.log('RegisterView.init()')
  }

  readonly update = async (): Promise<void> => {
    console.log("filter View updated")
    await this.render()
  }

  readonly getRegisterHTML = (): HTMLElement => {
    return this.registerHTML
  }

  readonly render = async () => {
    const registerModel = this.subject as RegisterModel
    const template = new RegisterTemplate();
    this.registerHTML.innerHTML = template.render();
    this.setupModalListeners();
    this.setupFormSubmitListener(registerModel);

    if (!document.body.contains(this.registerHTML)) {
      document.body.appendChild(this.registerHTML);
    }

    await template.loadRecaptchaScript();

    (window as any).grecaptcha.render(document.querySelector('.g-recaptcha'), {
      sitekey: template.SITE_KEY
    });



  }

  private readonly setupModalListeners = () => {
    // Botón cerrar modal (la X)
    const closeButton = this.registerHTML.querySelector('.button_close_modal_register')
    if (closeButton) {
      closeButton.addEventListener('click', () => this.closeModal())
    }

    // Cerrar modal haciendo clic fuera del contenido (overlay)
    const backdrop = this.registerHTML.querySelector('.modal_background_register')
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          this.closeModal()
        }
      })
    }
  }


  private readonly setupFormSubmitListener = (register: RegisterModel) => {
    const form = this.registerHTML.querySelector('#registration_form') as HTMLFormElement;
    const passwordInput = this.registerHTML.querySelector('#register_password') as HTMLInputElement;
    const confirmPasswordInput = this.registerHTML.querySelector('input[name="confirmPassword"]') as HTMLInputElement;
    const strengthLevel = this.registerHTML.querySelector('#strengthLevel') as HTMLElement;
    const strengthText = this.registerHTML.querySelector('#strengthText') as HTMLElement;

    if (form && passwordInput && confirmPasswordInput) {
      // Verificación de fuerza de contraseña en tiempo real
      passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const strength = this.getPasswordStrength(password);
        strengthLevel.style.width = `${strength}%`;
        strengthText.textContent = `Fuerza de la contraseña: ${strength}% completa`;
      });

      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const captchaToken = (window as any).grecaptcha?.getResponse();


        // Verificación de coincidencia de contraseñas
        if (passwordInput.value !== confirmPasswordInput.value) {
          alert('Las contraseñas no coinciden');
          return;
        }

        // Verificación de fuerza mínima (opcional)
        const strength = this.getPasswordStrength(passwordInput.value);
        if (strength < 10) {
          alert('La contraseña es demasiado débil. Usa al menos una mayúscula, número y 8 caracteres.');
          return;
        }

        const formData = new FormData(form);
        const data: any = {
          ci: formData.get('CI') as string,
          nombreUsuario: formData.get('firstName') as string,
          apellidoUsuario: formData.get('lastName') as string,
          correoUsuario: formData.get('email') as string,
          contrasenaUsuario: passwordInput.value,
        };
        console.log(data);
        console.log(captchaToken);

        await register.register(data, captchaToken);

      });
    }
  }



  private getPasswordStrength(password: string): number {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25; // caracteres especiales
    return strength;
  }


  readonly openModal = () => {
    this.registerHTML.style.display = 'flex'
    document.body.classList.add('modal-open')
    this.isModalOpen = true
  }

  readonly closeModal = () => {
    this.registerHTML.style.display = 'none'
    document.body.classList.remove('modal-open')
    this.isModalOpen = false
  }

  readonly toggleModal = () => {
    this.isModalOpen ? this.closeModal() : this.openModal()
  }

}
