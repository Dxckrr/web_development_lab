export default class RegisterTemplate {

  readonly SITE_KEY = '6LdTTEIrAAAAADWFAuBg7jphVPy6tpTG9a8j5wPK';
  readonly RECAPTCHA_SECRET = '6LdTTEIrAAAAANnMMUVbfqD-WUHdTFnh9W_xFhTb';
  private recaptchaLoaded: boolean = false;

  readonly render = (): string => {
    const token = localStorage.getItem('authToken');
    return token ? this.renderRegisteredView() : this.renderRegisterForm();
  }
  private readonly renderRegisteredView = (): string => {

    return `
        <div class="modal_background_register" id="modalRegister">
        <div class="modal_container_register">
            <div class="modal_header_register">
            <h2 class="title_main_register">You are already registered</h2>
            <button class="button_close_modal_register" id="closeModalRegister">&times;</button>
            </div>

            <div class="session_active_content">
            <div class="success_message">You already have an account and are logged in</div>
            <p>You can close this window and continue browsing.</p>
            <p>If you want to create another account, please log out first.</p>
            </div>
        </div>
        </div>

      `;


  }
  private readonly renderRegisterForm = (): string => {
    return `
      <div class="modal_background_register" id="modalRegister">
    <div class="modal_container_register">
      <div class="modal_header_register">
        <h2 class="title_main_register">Crear nueva cuenta</h2>
        <button class="button_close_modal_register" id="closeModalRegister">&times;</button>
      </div>
      
      <form id="registration_form">
        <div class="form_field_register">
          <input class="input_form_register" name="firstName" placeholder="Nombre" type="text" required>
        </div>
        <div class="form_field_register">
          <input class="input_form_register" name="lastName" placeholder="Apellidos" type="text" required>
        </div>
        <div class="form_field_register">
          <input class="input_form_register" name="CI" placeholder="CI" type="text" required>
        </div>

        <h3 class="subtitle_section_register">Información de inicio de sesión</h3>
        <div class="form_field_register">
          <input class="input_form_register" name="email" placeholder="Email" type="email" required>
        </div>
        <div class="form_field_register">
          <input class="input_form_register" id="register_password" name="password" placeholder="Contraseña" type="password" required>
          <div class="strength_bar_register">
            <div class="strength_level_register" id="strengthLevel"></div>
          </div>
          <p class="strength_text_register" id="strengthText">Fuerza de la contraseña: 0% completa</p>
        </div>
        <div class="form_field_register">
          <input class="input_form_register" name="confirmPassword" placeholder="Repetir contraseña" type="password" required>
        </div>

        <p class="help_text_register">La contraseña debe contener al menos una mayúscula y un número.</p>

        <input type="hidden" name="role" value="2">

        <div class="g-recaptcha-container">
            <div class="g-recaptcha" 
                    data-sitekey="${this.SITE_KEY}"></div>
            <div class="captcha-error-message" style="color: red; display: none;">
                Por favor, completa el CAPTCHA
            </div>
        </div>

        <button class="button_primary_register" type="submit">Crear cuenta</button>
        <button class="button_secondary_register" type="button">
          <i class="fab fa-google" style="margin-right: 5px;"></i> Accede con Google
        </button>

        <div id="errorMessage" class="message-error" style="display:none;">Error al crear la cuenta</div>
        <div id="successMessage" class="message-success" style="display:none;">¡Cuenta creada exitosamente!</div>
      </form>
    </div>
  </div>
    `;
  }

  public loadRecaptchaScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.recaptchaLoaded || (window as any).grecaptcha) {
        resolve();
        return;
      }

      const scriptId = 'recaptcha-script';
      if (document.querySelector(`#${scriptId}`)) {
        const checkInterval = setInterval(() => {
          if ((window as any).grecaptcha) {
            clearInterval(checkInterval);
            this.recaptchaLoaded = true;
            resolve();
          }
        }, 100);
        return;
      }

      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;

      script.onload = () => {
        this.recaptchaLoaded = true;
        console.log('reCAPTCHA cargado correctamente');
        setTimeout(() => resolve(), 300);
      };

      script.onerror = (error) => {
        console.error('Error al cargar reCAPTCHA:', error);
        reject(new Error('Failed to load reCAPTCHA script'));
      };

      document.body.appendChild(script);
    });
  }

  public resetCaptcha(): void {
    if ((window as any).grecaptcha) {
      (window as any).grecaptcha.reset();
    }
  }

  public getCaptchaResponse(): string | null {
    return (window as any).grecaptcha ? (window as any).grecaptcha.getResponse() : null;
  }

  public async validateCaptcha(token: string): Promise<boolean> {
    // Implementación directa del endpoint de validación
    try {
      const response = await this.validateCaptchaWithGoogle(token);
      return response.success;
    } catch (error) {
      console.error('Error validando CAPTCHA:', error);
      return false;
    }
  }

  private async validateCaptchaWithGoogle(token: string): Promise<{ success: boolean }> {
    // Implementación directa sin necesidad de backend
    try {
      const formData = new URLSearchParams();
      formData.append('secret', this.RECAPTCHA_SECRET);
      formData.append('response', token);

      const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error en la validación directa con Google:', error);
      throw error;
    }
  }
}
