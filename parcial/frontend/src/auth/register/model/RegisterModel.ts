import Subject from "../../../shared/types/Subject.js"
import RegisterView from "../view/RegisterView.js"

export default class RegisterModel extends Subject<RegisterView> {

  constructor(readonly loginMethod: (email: string, password: string, captchaToken?: string) => Promise<void>) {
    super()
  }
  readonly init = () => {
    console.log('RegisterModel.init()')
  }

  readonly register = async (formData: any, captchaToken: string) => {
    try {
      const userInfo = {
        ...formData,
        estadoUsuario: true,
        rolUsuario: 2
      };

      const response = await fetch("https://localhost:1803/auth/v1.0/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en el registro:", errorData.message);
        return;
      }

      const data = await response.json();
      console.log("Registro exitoso:", data);

      await this.loginMethod(formData.correoUsuario, formData.contrasenaUsuario, captchaToken);

    } catch (error) {
      console.error("Error de red o servidor:", error);
    }
  }

}
