import Subject from "../../../shared/types/Subject.js";
import LoginView from "../view/LoginView.js";

export default class LoginModel extends Subject<LoginView> {

  private message: string = '';
  private messageType: 'success' | 'error' | 'warning' = 'success';

  readonly init = () => {
    console.log('LoginModel.init()');
  }

  public getMessage = () => this.message;
  public getMessageType = () => this.messageType;

  private readonly setMessage = (type: 'success' | 'error' | 'warning', msg: string) => {
    this.messageType = type;
    this.message = msg;
    this.notifyALL();
  }

  readonly login = async (email: string, password: string, captchaToken: string) => {
    console.log("Intentando iniciar sesión con:", { email, password, captchaToken });

    if (!captchaToken) {
      console.warn("Captcha vacío");
      this.setMessage('warning', "⚠️ Por favor verifica el reCAPTCHA.");
      return;
    }

    try {
      // Envío captchaToken en el cuerpo JSON
      const response = await fetch( 'https://localhost:1803/auth/v1.0/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, captchaToken })
      });

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      if (!response.ok) {
        this.setMessage('error', data.message || "❌ Credenciales inválidas.");
        return;
      }

      if (data.token) {
        window.localStorage.setItem('authToken', data.token);
        window.localStorage.setItem('authEmail', email); 
        this.setMessage('success', "✅ Inicio de sesión exitoso.");
      } else {
        this.setMessage('error', "❌ No se recibió token del servidor.");
      }

    } catch (error) {
      this.setMessage('error', "❌ Error de conexión con el servidor.");
    }
  }



}
