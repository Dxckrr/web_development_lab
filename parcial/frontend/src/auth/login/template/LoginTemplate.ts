export default class LoginTemplate {
  readonly SITE_KEY = '6LdTTEIrAAAAADWFAuBg7jphVPy6tpTG9a8j5wPK';
  readonly RECAPTCHA_SECRET = '6LdTTEIrAAAAANnMMUVbfqD-WUHdTFnh9W_xFhTb';
  private recaptchaLoaded: boolean = false;

  readonly render = (errorMessage: string = "", successMessage: string = ""): string => {
    const token = localStorage.getItem('authToken');
    return token ? this.renderLoggedInView() : this.renderLoginForm(errorMessage, successMessage);
  }

  private readonly renderLoggedInView = (): string => {
    return `
      <div class="login_modal_backdrop" id="modalLogin">a
        <div class="login_modal_container">
          <div class="login_modal_header">
            <h2 class="login_modal_title">Sesión activa</h2>
            <button class="login_modal_close_btn" id="closeModalLogin">&times;</button>
          </div>
          
          <div class="logged_in_content">
            <div class="login_success_message">Ya has iniciado sesión anteriormente</div>
            <p>Puedes cerrar esta ventana y continuar navegando.</p>
          </div>
        </div>
      </div>
    `;
  }

  private readonly renderLoginForm = (errorMessage: string = "", successMessage: string = ""): string => {
    return `
      <div class="login_modal_backdrop" id="modalLogin">
        <div class="login_modal_container">
            <div class="login_modal_header">
                <h2 class="login_modal_title">Iniciar sesión</h2>
                <button class="login_modal_close_btn" id="closeModalLogin">&times;</button>
            </div>
            
            <form id="login_form">
                ${errorMessage ? `<div class="login_error_message">${errorMessage}</div>` : ''}
                ${successMessage ? `<div class="login_success_message">${successMessage}</div>` : ''}
                
                <div class="login_input_group">
                    <span class="login_input_icon">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <input class="login_form_input" id="login_email" 
                           placeholder="Email" type="email" 
                           autocomplete="email" required>
                </div>
                
                <div class="login_input_group">
                    <span class="login_input_icon">
                        <i class="fas fa-lock"></i>
                    </span>
                    <input class="login_form_input" id="login_password" 
                           placeholder="Contraseña" type="password" 
                           autocomplete="current-password" required>
                </div>

                <div class="login_forgot_password">
                    <a href="#" id="forgot_password_link">
                        ¿Has olvidado tu contraseña?
                    </a>
                </div>

                <div class="g-recaptcha-container">
                    <div class="g-recaptcha" 
                         data-sitekey="${this.SITE_KEY}"></div>
                    <div class="captcha-error-message" style="color: red; display: none;">
                        Por favor, completa el CAPTCHA
                    </div>
                </div>

                <div class="login_button_group">
                    <button class="login_primary_btn" id="submit_login" type="submit">
                        <span class="btn_text">Acceder</span>
                        <span class="btn_loading" style="display: none;">
                            <i class="fas fa-spinner fa-spin"></i>
                        </span>
                    </button>
                    <button class="login_secondary_btn" type="button">
                        <i class="fab fa-Google-G"></i> Google
                    </button>
                </div>
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

  // Método de simulación para desarrollo
//   private simulateCaptchaValidation(token: string): Promise<{ success: boolean }> {
//     console.warn('Modo desarrollo: Validación de CAPTCHA simulada');
//     return Promise.resolve({
//       success: token === 'test_token' || Math.random() > 0.5 // 50% de éxito para pruebas
//     });
//   }
}